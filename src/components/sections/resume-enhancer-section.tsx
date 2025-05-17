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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, FileText, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResumeEnhancerSectionProps {
  id: string;
  ref?: LegacyRef<HTMLElement>;
}

const formSchema = z.object({
  resumeText: z.string().min(100, "Resume text must be at least 100 characters."),
  jobDescription: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ResumeEnhancerSection: FC<ResumeEnhancerSectionProps> = ({ id, ref }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EnhanceResumeOutput | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const aiResult = await enhanceResume(data as EnhanceResumeInput);
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
              Paste your resume and an optional job description to get AI-driven suggestions for improvement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="resumeText" className="block text-sm font-medium text-foreground mb-1">Your Resume Text</label>
                <Textarea
                  id="resumeText"
                  {...register("resumeText")}
                  placeholder="Paste your full resume text here..."
                  rows={10}
                  className={`w-full ${errors.resumeText ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                />
                {errors.resumeText && <p className="text-sm text-destructive mt-1">{errors.resumeText.message}</p>}
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
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
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
                    Enhanced Resume
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
                  Once you submit your resume, your AI-powered suggestions and an improved version will appear here. Get ready to make your application stand out!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeEnhancerSection;
