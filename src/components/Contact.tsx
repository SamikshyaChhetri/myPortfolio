"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { BorderBeam } from "./magicui/border-beam";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter valid email"),
  message: z
    .string()
    .min(10, "Please enter your message")
    .max(500, "Message too long (max 500 characters)"),
});

export function Contact() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function sendMessage() {
    const values = form.getValues();
    const messagePayload = {
      content: `@here`,
      embeds: [
        {
          title: `Hello Samikshya, ${values.name} is trying to contact you`,
          description: "Here are the details: ",
          color: 9175551,
          footer: {
            text: "Submitted at",
          },
          timestamp: new Date(),
          fields: [
            {
              name: "Name",
              value: values.name,
              inline: false,
            },
            {
              name: "Email",
              value: values.email,
              inline: false,
            },
            {
              name: "Message",
              value: values.message,
              inline: false,
            },
          ],
        },
      ],
    };

    const webHook = process.env.NEXT_PUBLIC_WEBHOOK || "";
    mutation.mutate({ webHook, messagePayload });
  }

  const mutation = useMutation({
    mutationFn: async ({
      webHook,
      messagePayload,
    }: {
      webHook: string;
      messagePayload: object;
    }) => {
      const response = await axios.post(webHook, messagePayload);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      form.reset();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-10" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 sm:mb-4">
            <Icon
              icon="solar:phone-calling-rounded-linear"
              width="30"
              height="30"
              className="sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            Get In Touch
          </div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            I&apos;d love to hear from you! Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <img
              src="/contact.svg"
              alt="Contact illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <form
              onSubmit={form.handleSubmit(sendMessage)}
              className="flex justify-center"
            >
              <Card className="w-full max-w-lg bg-slate-800/80 backdrop-blur-sm border-slate-700/50 shadow-2xl">
                <CardHeader className="text-center pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl text-white">
                    Let&apos;s Connect
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm sm:text-base">
                    Fill out the form below and I&apos;ll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-6">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400"
                        {...form.register("name")}
                      />
                      {form.formState.errors.name && (
                        <Label className="text-red-400 text-sm">
                          {form.formState.errors.name?.message}
                        </Label>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <Label className="text-red-400 text-sm">
                          {form.formState.errors.email?.message}
                        </Label>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        rows={5}
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-gray-400 resize-none"
                        {...form.register("message")}
                      />
                      {form.formState.errors.message && (
                        <Label className="text-red-400 text-sm">
                          {form.formState.errors.message?.message}
                        </Label>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    disabled={mutation.isPending || mutation.isSuccess}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 transition-all duration-300"
                  >
                    {mutation.isPending ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : mutation.isSuccess ? (
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="solar:check-circle-linear"
                          width="20"
                          height="20"
                        />
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Icon
                          icon="solar:letter-linear"
                          width="20"
                          height="20"
                        />
                        Send Message
                      </div>
                    )}
                  </Button>
                </CardFooter>
                <BorderBeam duration={8} size={120} />
              </Card>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
