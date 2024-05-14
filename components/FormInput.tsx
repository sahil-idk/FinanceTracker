import React from 'react'
import { z } from 'zod'

import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form"
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


import { authformSchema } from '@/lib/utils'


const formSchema = authformSchema('sign-up');

interface FormInput {

  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const FormInput = ({ control, name, label, placeholder }: FormInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className='input-class'
              type={name == 'password' ? 'password' : 'text'}
              {...field}
            />
          </FormControl>
          <FormDescription>
          </FormDescription>
          <FormMessage className='form-message mt-2' />
        </FormItem>
      )}
    />
  )
}

export default FormInput