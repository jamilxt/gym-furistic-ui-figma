import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterSection() {
  const { toast } = useToast();
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubmit = (data: NewsletterFormValues) => {
    // In a real-world scenario, you would make an API call here
    console.log("Subscribing email:", data.email);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
    }, 1000);
  };
  
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white text-lg mb-2 font-tilt">Join our community</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-tilt text-white mb-6">
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-opacity-80 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our Newsletter, You'll Receive Expert 
            Training Tips, Nutrition Guides, Exclusive Discounts, And The Latest News On Upcoming Events And Products.
          </p>
          
          {isSubscribed ? (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto bg-white bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-tilt text-white mb-2">Thank You!</h3>
              <p className="text-white text-opacity-80">
                You've successfully subscribed to our newsletter.
              </p>
            </motion.div>
          ) : (
            <form 
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row items-center justify-center gap-2 max-w-xl mx-auto"
            >
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-6 py-6 rounded-full bg-transparent border-2 border-white text-white placeholder:text-white focus:ring-white"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <span className="text-red-300 text-sm absolute -bottom-6 left-4">
                    {form.formState.errors.email.message}
                  </span>
                )}
              </div>
              <Button 
                type="submit"
                disabled={form.formState.isSubmitting}
                className="rounded-full bg-white hover:bg-white/90 text-black font-tilt uppercase px-6 py-6 whitespace-nowrap min-w-[120px]"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Wait...</span>
                  </>
                ) : (
                  "SUBSCRIBE"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}