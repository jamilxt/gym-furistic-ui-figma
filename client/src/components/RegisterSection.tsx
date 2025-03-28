import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const registerSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  membership: z.string({ required_error: "Please select a membership type" }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterSection() {
  const { toast } = useToast();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      membership: "",
      terms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: RegisterFormValues) => {
      const response = await apiRequest("POST", "/api/register", values);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccessful(true);
      toast({
        title: "Registration Successful",
        description: "Thank you for joining PowerFit! We'll contact you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-24 bg-[#71AC16] relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&w=1920" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-tilt text-white mb-4">
              Start Your <span className="text-white">Journey</span> Today
            </h2>
            <p className="text-white text-opacity-80 text-lg">
              Register now and get exclusive access to our premium fitness programs and equipment
            </p>
          </div>

          {isSuccessful ? (
            <motion.div 
              className="text-center text-white p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-tilt mb-4">Registration Complete!</h2>
              <p className="mb-6">Thank you for registering with PowerFit. We'll be in touch soon!</p>
              <Button 
                onClick={() => setIsSuccessful(false)} 
                className="bg-white text-[#71AC16] hover:bg-white/90"
              >
                Register Another Account
              </Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="John"
                            className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl py-6 text-white placeholder:text-white placeholder:text-opacity-70 focus:ring-white"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Doe"
                            className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl py-6 text-white placeholder:text-white placeholder:text-opacity-70 focus:ring-white"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="john.doe@example.com"
                          className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl py-6 text-white placeholder:text-white placeholder:text-opacity-70 focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="(123) 456-7890"
                          className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl py-6 text-white placeholder:text-white placeholder:text-opacity-70 focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="membership"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Membership Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl py-6 text-white focus:ring-white">
                            <SelectValue placeholder="Select Membership" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="basic" className="text-gray-800">Basic ($29.99/month)</SelectItem>
                          <SelectItem value="premium" className="text-gray-800">Premium ($49.99/month)</SelectItem>
                          <SelectItem value="elite" className="text-gray-800">Elite ($79.99/month)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-white" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="bg-white bg-opacity-20 border border-white border-opacity-30 data-[state=checked]:bg-white data-[state=checked]:text-[#71AC16]"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-white">
                          I agree to the <a href="#" className="underline">Terms and Conditions</a>
                        </FormLabel>
                        <FormMessage className="text-white" />
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-white text-[#71AC16] font-tilt uppercase text-xl py-6 rounded-xl hover:bg-opacity-90 transition duration-300"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Register Now"
                  )}
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
