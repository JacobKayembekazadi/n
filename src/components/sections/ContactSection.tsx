import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageSquareText } from "lucide-react";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" title="Ready to Transform Your Vision?">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-8 rounded-xl shadow-xl space-y-6">
          <h3 className="text-3xl font-bold font-headline">Let&apos;s Connect</h3>
          <p className="text-lg leading-relaxed">
            Whether you&apos;re looking to integrate AI into your workflow, optimize your digital operations, or build a comprehensive marketing strategy, I&apos;m here to help transform your ideas into scalable solutions.
          </p>
          <div className="flex items-start space-x-3 pt-4">
            <MessageSquareText className="h-8 w-8 mt-1 text-primary-foreground/80 shrink-0" />
            <p className="text-lg font-semibold">Ready to discuss your next project?</p>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="h-8 w-8 mt-1 text-primary-foreground/80 shrink-0" />
            <p className="text-lg font-semibold">Let&apos;s map AI tools to your real-world problems.</p>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
