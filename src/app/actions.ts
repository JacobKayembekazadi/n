// @/app/actions.ts
"use server";

import { smartContactForm, type SmartContactFormInput } from "@/ai/flows/smart-contact-form";
import { z } from "zod";

const SmartContactFormInputSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  project: z.string().min(3, { message: "Project type must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(formData: SmartContactFormInput) {
  const validationResult = SmartContactFormInputSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
    const aiResponse = await smartContactForm(validationResult.data);
    
    // In a real application, you would now send an email to Jacob
    // with both formData and aiResponse (summary, urgency, suggestedResponses).
    // For this example, we'll just log it and return success.
    console.log("AI Processed Contact Form Submission:");
    console.log("Original Data:", validationResult.data);
    console.log("AI Analysis:", aiResponse);

    return {
      success: true,
      message: "Your message has been sent successfully! Jacob will get back to you soon.",
      aiSummary: aiResponse.summary, // Optionally return some AI data if needed by client
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      success: false,
      message: "An error occurred while submitting your message. Please try again.",
    };
  }
}
