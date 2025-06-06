"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { Loader2 } from "lucide-react";
import type { SmartContactFormInput } from "@/ai/flows/smart-contact-form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  project: z.string().min(3, { message: "Project type must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      message: "",
    },
  });

  const {formState: {isSubmitting}} = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitContactForm(values as SmartContactFormInput);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
          variant: "default",
        });
        form.reset();
      } else {
        // Handle validation errors from server if any (though client-side should catch most)
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            const fieldName = field as keyof z.infer<typeof formSchema>;
            if (Array.isArray(messages)) {
                 form.setError(fieldName, { type: "server", message: messages.join(", ") });
            }
          });
        }
        toast({
          title: "Submission Failed",
          description: result.message || "An unknown error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="bg-background/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-primary/10">
      <h3 className="text-2xl font-bold mb-6 text-primary font-headline">Start Your Transformation</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-semibold">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-semibold">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-semibold">Project Type</FormLabel>
                <FormControl>
                  <Input placeholder="AI Integration, Digital Strategy, Web Development..." {...field} className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-semibold">Tell me about your vision</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What challenges are you facing? What transformation are you seeking?"
                    {...field}
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Let's Build Something Amazing"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
