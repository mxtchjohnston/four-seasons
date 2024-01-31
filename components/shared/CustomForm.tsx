"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useState } from "react"

const SuccessAlert = () => (
  <div>
  <Alert variant="default">
    <AlertTitle>Thanks for reaching out!</AlertTitle>
    <AlertDescription>
      We will get back to you as soon as possible.
    </AlertDescription>
  </Alert>
  </div>
);

const ErrorAlert = () => (
  <div>
  <Alert variant="destructive">
    <AlertTitle>Something went wrong</AlertTitle>
    <AlertDescription>
      Please try again
    </AlertDescription>
  </Alert>
  </div>
);


const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  telephone: z.string().refine(data => /^\d{10}$/.test(data), {
    message: "Please enter a valid 10-digit telephone number",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  body: z.string().min(10, {
    message: "Please enter a message of at least 10 characters",
  }),
});

export default function ContactForm() {
  type Status = "hidden" | "success" | "error";
  const [state, setState] = useState<Status>("hidden");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      telephone: "",
      email: "",
      body: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    axios.post("/api/contact", data)
      .then(() => {
        form.reset();
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  };

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='telephone'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Telephone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='body'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>How Can We Help You?</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    <div className='mt-4'>
    {state === "success" && <SuccessAlert />}
    {state === "error" && <ErrorAlert />}
    </div>
    </>
  );
};

