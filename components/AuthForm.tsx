'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import FormInput from '@/components/FormInput'
import { authformSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/router'



const AuthForm = ({ type }: {
  type: string
}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 1. Define your form.

  const formSchema = authformSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    try {


      if (type === 'sign-in') {
        // const res = await auth.signIn(data);
        // setUser(res);
      }
      else if (type === 'sign-up') {
        // const res = await auth.signUp(data);
        // setUser(res);


        //       router.push('/');
      }
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);

    }



  }
  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">FINtrack</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'
              }
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* <PlaidLink user={user} variant="primary" /> */}
        </div>
      ) : (

        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <FormInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <FormInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <FormInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address' />
                  <FormInput control={form.control} name='city' label="City" placeholder='Enter your city' />
                  <div className="flex gap-4">
                    <FormInput control={form.control} name='state' label="State" placeholder='Example: NY' />
                    <FormInput control={form.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                  </div>
                  <div className="flex gap-4">
                    <FormInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                    <FormInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                  </div>
                </>
              )}
              <FormInput control={form.control} name="email" label="Email" placeholder="Enter your Email" />

              <FormInput control={form.control} name="password" label="Password" placeholder="Enter your Password" />
              <Button
                className="form-btn"
                disabled={loading}
                type="submit">
                {loading ?
                  <>
                    <Loader2 size={24} className='animate-spin' /> &nbsp;
                    Loading...
                  </> :
                  type === 'sign-in'
                    ? 'Sign In'
                    : 'Sign Up'
                }
              </Button>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )


      }

    </section>
  )
}

export default AuthForm;
