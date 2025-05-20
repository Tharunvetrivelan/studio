// src/components/sections/resume-enhancer-section.tsx
"use client";

import type { FC, LegacyRef } from 'react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { enhanceResume, type EnhanceResumeInput, type EnhanceResumeOutput } from '@/ai/flows/resume-enhancement';
import SectionWrapper from '@/components/common/section-wrapper';
import SectionTitle from '@/components/common/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, FileText, Sparkles, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResumeEnhancerSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const formSchema = z.object({
  resumeFileDataUri: z.string()
    .refine(value => value.startsWith('data:application/pdf;base64,'), {
      message: "Please upload a valid PDF file.",
    })
    .describe("The PDF resume file as a data URI."),
  jobDescription: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ResumeEnhancerSection: FC<ResumeEnhancerSectionProps> = ({ id, ref }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EnhanceResumeOutput | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, resetField } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeFileDataUri: '',
      jobDescription: '',
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          const dataUri = loadEvent.target?.result as string;
          setValue('resumeFileDataUri', dataUri, { shouldValidate: true });
          setFileName(file.name);
        };
        reader.onerror = () => {
          toast({ title: "File Error", description: "Could not read the selected file.", variant: "destructive" });
          resetField('resumeFileDataUri');
          setFileName(null);
        }
        reader.readAsDataURL(file);
      } else {
        toast({ title: "Invalid File Type", description: "Please select a PDF file.", variant: "destructive" });
        resetField('resumeFileDataUri');
        setFileName(null);
        event.target.value = ''; // Clear the file input
      }
    } else {
        resetField('resumeFileDataUri');
        setFileName(null);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      // Ensure data passed to enhanceResume matches EnhanceResumeInput type
      const inputForAI: EnhanceResumeInput = {
        resumeFileDataUri: data.resumeFileDataUri,
        jobDescription: data.jobDescription,
      };
      const aiResult = await enhanceResume(inputForAI);
      setResult(aiResult);
      toast({
        title: "Resume Enhanced!",
        description: "Your resume suggestions are ready.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error enhancing resume:", error);
      toast({
        title: "Error",
        description: "Failed to enhance resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id={id} ref={ref} className="bg-background">
      <SectionTitle title="AI-Powered Resume Enhancer" subtitle="Get Expert Feedback" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Wand2 className="mr-2 h-7 w-7 text-primary" />
              Boost Your Resume
            </CardTitle>
            <CardDescription>
              Upload your resume (PDF) and an optional job description to get AI-driven suggestions for improvement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="resumeFile" className="block text-sm font-medium text-foreground mb-1">Your Resume (PDF)</label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="resumeFile"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className={`w-full ${errors.resumeFileDataUri ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                  />
                   {/* Hidden input to allow react-hook-form to register and validate the data URI */}
                  <input type="hidden" {...register("resumeFileDataUri")} />
                </div>
                {fileName && <p className="text-sm text-muted-foreground mt-1">Selected: {fileName}</p>}
                {errors.resumeFileDataUri && <p className="text-sm text-destructive mt-1">{errors.resumeFileDataUri.message}</p>}
              </div>
              <div>
                <label htmlFor="jobDescription" className="block text-sm font-medium text-foreground mb-1">Target Job Description (Optional)</label>
                <Textarea
                  id="jobDescription"
                  {...register("jobDescription")}
                  placeholder="Paste the job description you're targeting..."
                  rows={6}
                  className="w-full border-input"
                />
              </div>
              <Button type="submit" disabled={isLoading || !!errors.resumeFileDataUri} className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-5 w-5" />
                )}
                Enhance My Resume
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {isLoading && (
            <Card className="shadow-lg animate-pulse">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl"><Loader2 className="mr-2 h-7 w-7 animate-spin text-primary" />Generating Feedback...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          )}
          {result && (
            <>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-green-600">
                    <FileText className="mr-2 h-7 w-7" />
                    Enhanced Resume / Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] p-4 border rounded-md bg-secondary/50">
                    <pre className="whitespace-pre-wrap text-sm text-foreground/90">{result.enhancedResume}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-blue-600">
                    <Sparkles className="mr-2 h-7 w-7" />
                    Improvement Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] p-4 border rounded-md bg-secondary/50">
                     <pre className="whitespace-pre-wrap text-sm text-foreground/90">{result.suggestions}</pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </>
          )}
          {!isLoading && !result && (
             <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">Your Enhanced Resume Awaits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload your PDF resume, and once you submit, your AI-powered suggestions and an improved version/summary will appear here. Get ready to make your application stand out!
                </p>
                <div className="mt-4 flex justify-center">
                    <UploadCloud className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeEnhancerSection;
