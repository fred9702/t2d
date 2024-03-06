"use client"
import React from 'react'
import { z } from "zod"
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useMutation } from '@tanstack/react-query'
import {Loader2} from 'lucide-react';

export const Icons = {
  spinner: Loader2,
};

type Props = {}

const formSchema = z.object({
  platform: z.enum(["Shopify", "WooCommerce", "BigCommerce"], {
    required_error: "You need to select a platform type.",
  }),
  file: z.instanceof(FileList).refine((file) => file?.length == 1, 'File is required.').optional()
})

type FormData = z.infer<typeof formSchema>

type FormProps = {
  defaultValues: FormData;
  onSubmit(data: FormData): void;
  isSubmitting: boolean;
}

function FormComponent({ onSubmit, defaultValues, isSubmitting}: FormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platform: "Shopify",
    },
  })

  const fileRef = form.register("file");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem className="space-y-3">
              {/* <FormLabel>Notify me about...</FormLabel> */}
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Shopify" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Shopify
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="WooCommerce" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      WooCommerce
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="BigCommerce" />
                    </FormControl>
                    <FormLabel className="font-normal">BigCommerce</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>File</FormLabel>
                <FormControl>
                  <Input 
                    type="file" 
                    placeholder="shadcn" 
                    {...fileRef} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {isSubmitting ? <Icons.spinner className="h-4 w-4 animate-spin" /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  )
}

export function T2DForm() {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      var formData = new FormData()
      data.file && formData.append("file",  data.file[0]) 
      formData.append("platform", data.platform) 

      try {
        const response = await axios.post("/api/uploader/csv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "accept": "application/json"
          }
        } )
        return response
      } catch (error) {
        console.log(error)
      }
    }
  })
  
  return (
    <FormComponent 
      defaultValues={{platform: "Shopify"}}
      onSubmit={async (data) => {
        await mutation.mutate(data, {
          onSuccess: (data, variables, context) => {
            console.log(data?.data)
          },
        });
      }}
      isSubmitting={mutation.isPending}
    />
  )
}

export default T2DForm