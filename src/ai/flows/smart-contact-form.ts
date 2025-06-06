'use server';

/**
 * @fileOverview Smart Contact Form AI agent.
 *
 * - smartContactForm - A function that handles the smart contact form process.
 * - SmartContactFormInput - The input type for the smartContactForm function.
 * - SmartContactFormOutput - The return type for the smartContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  project: z.string().describe('The type of project the person is interested in.'),
  message: z.string().describe('The message from the person submitting the form.'),
});
export type SmartContactFormInput = z.infer<typeof SmartContactFormInputSchema>;

const SmartContactFormOutputSchema = z.object({
  summary: z.string().describe('A short summary of the message.'),
  urgency: z
    .enum(['high', 'medium', 'low'])
    .describe('The urgency of the message.'),
  suggestedResponses: z.array(z.string()).describe('Suggested responses to the message.'),
});
export type SmartContactFormOutput = z.infer<typeof SmartContactFormOutputSchema>;

export async function smartContactForm(input: SmartContactFormInput): Promise<SmartContactFormOutput> {
  return smartContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartContactFormPrompt',
  input: {schema: SmartContactFormInputSchema},
  output: {schema: SmartContactFormOutputSchema},
  prompt: `You are an AI assistant helping to process contact form submissions.

  Summarize the message, classify its urgency as high, medium, or low, and suggest 3 possible responses.

  Name: {{{name}}}
  Email: {{{email}}}
  Project Type: {{{project}}}
  Message: {{{message}}}
  Output format: JSON
  `,
});

const smartContactFormFlow = ai.defineFlow(
  {
    name: 'smartContactFormFlow',
    inputSchema: SmartContactFormInputSchema,
    outputSchema: SmartContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
