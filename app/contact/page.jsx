'use client'

import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-hot-toast'
import { contactUsAction } from '../actions/contact-us'
import SubmitButton from '@/components/SubmitButton'

const intiialState = {
  response: '',
}

export default function Contact() {
  // @ts-ignore
  const formRef = useRef(null)
  const [state, formAction] = useFormState(contactUsAction, intiialState)

  useEffect(() => {
    if (state?.status === 'rate-limit-error') {
      toast.error(state.message)
    }

    if (state?.status === 'success') {
      toast.success(state.message)
    }

    if (state?.status === 'error') {
      toast.error(
        'We are really sorry, something went wrong. Please try again later!'
      )
    }
  }, [state?.status, state?.message])

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          We are looking forward to hearing from you! Get in touch with us to
          start bringing your journey to life!
        </p>
        <form
          action={async (formData) => {
            await formAction(formData)
            formRef.current?.reset()
          }}
          className="space-y-8"
          ref={formRef}
        >
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@ineeddesignhelp.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          {state.status === 'success' ? (
            <h2 className="py-4 text-xl font-semibold ">
              Thank you! We will be in touch soon!
            </h2>
          ) : (
            <SubmitButton />
          )}
        </form>
      </div>
    </section>
  )
}
