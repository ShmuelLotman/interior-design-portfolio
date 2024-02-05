'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { basicRateLimiter } from '../../app/utils/rate-limiter'

const ipHash = {}
const Airtable = require('airtable')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
)

export async function contactUsAction(prevState: any, formData: FormData) {
  const isRateLimited = basicRateLimiter(ipHash)

  if (isRateLimited) {
    return {
      message:
        'Thanks for reaching out again! We are working hard to get back to you as soon as we can, please reach out again in a bit.',
      status: 'rate-limit-error',
    }
  }
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
    const { message, email, subject } = data

    const records = await base('Table 1').create(
      [
        {
          fields: {
            message,
            email,
            subject,
          },
        },
      ],
      function (err, records) {
        if (err) {
          return
        }
        records.forEach(function (record) {
          console.log(record.getId())
        })
      }
    )

    revalidatePath('/contact')
    return { message: 'success!', status: 'success' }
  } catch (err) {
    return { message: 'failed to submit - please try again!', status: 'error' }
  }
}
