'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function contactUsAction(prevState: any, formData: FormData) {
  const schema = z.object({
    message: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(1),
  })

  const data = schema.parse({
    message: formData.get('message'),
    email: formData.get('email'),
    subject: formData.get('subject'),
  })

  try {
    console.log(data)
    revalidatePath('/')
    return { message: 'success!' }
  } catch (err) {
    return { message: 'failed to submit - please try again!' }
  }
}
