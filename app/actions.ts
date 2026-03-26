'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@sunufarm.com'

export type FormState = {
  success: boolean
  message: string
} | null

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { success: false, message: 'Veuillez remplir tous les champs.' }
  }

  try {
    await resend.emails.send({
      from: 'SunuFarm <noreply@sunufarm.com>',
      to: TO_EMAIL,
      subject: `Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    })
    return { success: true, message: 'Message envoyé ! Nous vous répondrons rapidement.' }
  } catch {
    return { success: false, message: 'Une erreur est survenue. Réessayez ou contactez-nous directement.' }
  }
}

export async function submitWaitlist(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const email = String(formData.get('email') ?? '').trim()

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Adresse email invalide.' }
  }

  try {
    await resend.emails.send({
      from: 'SunuFarm <noreply@sunufarm.com>',
      to: TO_EMAIL,
      subject: `Nouvelle inscription liste d'attente`,
      text: `Email : ${email}`,
    })
    return { success: true, message: 'Inscription confirmée ! Vous serez notifié à la sortie de l\'app.' }
  } catch {
    return { success: false, message: 'Une erreur est survenue. Réessayez.' }
  }
}
