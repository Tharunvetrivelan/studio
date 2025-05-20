// src/ai/flows/resume-enhancement.ts
'use server';
/**
 * @fileOverview An AI-powered tool to suggest improvements to candidate resumes.
 *
 * - enhanceResume - A function that handles the resume enhancement process.
 * - EnhanceResumeInput - The input type for the enhanceResume function.
 * - EnhanceResumeOutput - The return type for the enhanceResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceResumeInputSchema = z.object({
  resumeFileDataUri: z
    .string()
    .describe("A PDF file of the resume, as a data URI that must include a MIME type (application/pdf) and use Base64 encoding. Expected format: 'data:application/pdf;base64,<encoded_data>'."),
  jobDescription: z
    .string()
    .optional()
    .describe('Optional job description to tailor the resume to.'),
});
export type EnhanceResumeInput = z.infer<typeof EnhanceResumeInputSchema>;

const EnhanceResumeOutputSchema = z.object({
  enhancedResume: z
    .string()
    .describe('The enhanced resume with suggestions incorporated (or summary if input was a document).'),
  suggestions: z
    .string()
    .describe('Specific suggestions for improving the resume.'),
});
export type EnhanceResumeOutput = z.infer<typeof EnhanceResumeOutputSchema>;

export async function enhanceResume(input: EnhanceResumeInput): Promise<EnhanceResumeOutput> {
  return enhanceResumeFlow(input);
}

const enhanceResumePrompt = ai.definePrompt({
  name: 'enhanceResumePrompt',
  input: {schema: EnhanceResumeInputSchema},
  output: {schema: EnhanceResumeOutputSchema},
  prompt: `You are an expert career coach specializing in resume optimization.

  Based on industry best practices and recruiter preferences, provide suggestions for improving the resume provided in the document. If a job description is provided, tailor the resume to that specific job.

  Resume Document:
  {{media url=resumeFileDataUri}}

  Job Description (if provided):
  {{jobDescription}}

  Provide both an enhanced version of the resume (if possible from the document, otherwise summarize key points from the original) and a list of specific suggestions.
  The suggestions should be clear and actionable.

  Ensure the output is well-formatted and easy to read.
  `,
});

const enhanceResumeFlow = ai.defineFlow(
  {
    name: 'enhanceResumeFlow',
    inputSchema: EnhanceResumeInputSchema,
    outputSchema: EnhanceResumeOutputSchema,
  },
  async input => {
    const {output} = await enhanceResumePrompt(input);
    return output!;
  }
);
