"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { superstarSchema } from "@/app/superstar/schema";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

export default function SuperstarForm({
  superstar,
  onFormSubmit,
  isPending,
}: {
  superstar?: z.infer<typeof superstarSchema>;
  onFormSubmit: (values: z.infer<typeof superstarSchema>) => void;
  isPending: boolean;
}) {
  const form = useForm<z.infer<typeof superstarSchema>>({
    resolver: zodResolver(superstarSchema),
    defaultValues: superstar || {
      fullName: "",
      email: "",
      linkedInUrl: "",
      githubUrl: "",
      portfolioUrl: "",
      education: "",
      telephone: "",
      summary: "",
    },
  });

  function onSubmit(data: z.infer<typeof superstarSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    onFormSubmit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Bart Simpson" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="bart@simpsons.com" {...field} />
              </FormControl>
              <FormDescription>This is your public email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedInUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.linkedin.com/in/bart/"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your LinkedIn URL.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github URL</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com/bart" {...field} />
              </FormControl>
              <FormDescription>This is your Github URL.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="portfolioUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Portfolio URL</FormLabel>
              <FormControl>
                <Input placeholder="https://bart.com" {...field} />
              </FormControl>
              <FormDescription>This is your Portfolio URL.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input
                  placeholder="I am currently enrolled in the school of life."
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your education info.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone</FormLabel>
              <FormControl>
                <Input placeholder="123-456-7890" {...field} />
              </FormControl>
              <FormDescription>This is phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your summary.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mr-2">{superstar ? "Reset" : "Clear"}</Button>
        <Button type="submit">
          {isPending ? "Loading..." : superstar ? "Update" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
