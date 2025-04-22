import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "./magicui/border-beam";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <div className="flex justify-center    bg-gradient-to-br from-purple-50 via-white to-purple-100 items-center ">
      <div className="min-h-screen w-[60%]  flex items-center justify-center ">
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
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={5}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="pt-4 flex justify-end">
            <Button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600"
            >
              Send Message
            </Button>
          </CardFooter>
          <BorderBeam duration={8} size={120} />
        </Card>
      </div>
      <img src="/contactImg.svg" alt="" className="h-80 " />
    </div>
  );
}
