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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
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
    .max(50, "Too long message"),
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
          title: `Hello Samikshya,${values.name} is trying to contact you`,
          description: "Here are the details: ",
          color: 9175551, // Hex color code (0x58BAF7 for a blue color)
          footer: {
            text: "Submitted at",
          },
          timestamp: new Date(), // Adds the current timestamp to the embed
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
    // axios.post(webHook, messagePayload);
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
      toast.success("Message sent");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <div
      className="flex justify-center    bg-gradient-to-br from-purple-50 via-white to-purple-100 items-center "
      id="contact"
    >
      <form
        onSubmit={form.handleSubmit(sendMessage)}
        className="min-h-screen w-[60%]   flex items-center justify-center "
      >
        <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-200 bg-white relative overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-purple-700">
              Get Connected with me
            </CardTitle>
            <CardDescription className="text-center">
              I would love to hear from you! Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...form.register("name")}
                />
                <Label className="text-destructive">
                  {form.formState.errors.name?.message}
                </Label>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...form.register("email")}
                />
                <Label className="text-destructive">
                  {form.formState.errors.email?.message}
                </Label>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  rows={5}
                  {...form.register("message")}
                />
                <Label className="text-destructive">
                  {form.formState.errors.message?.message}
                </Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-4 flex justify-end">
            <Button
              disabled={mutation.isPending || mutation.isSuccess}
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600"
            >
              {mutation.isPending ? (
                <div className="loader"></div>
              ) : mutation.isSuccess ? (
                "Message Sent"
              ) : (
                "Send message"
              )}
            </Button>
          </CardFooter>
          <BorderBeam duration={8} size={120} />
        </Card>
      </form>
      <img src="/contact.svg" alt="" className="h-80 " />
    </div>
  );
}
