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
  const phone = String(formData.get('phone') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const farmSize = String(formData.get('farmSize') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { success: false, message: 'Veuillez remplir tous les champs.' }
  }

  try {
    await resend.emails.send({
      from: 'SunuFarm <noreply@sunufarm.com>',
      to: TO_EMAIL,
      subject: `Nouvelle demande de démo - ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${phone || 'Non renseigné'}\nProfil : ${role || 'Non renseigné'}\nTaille de l'exploitation : ${farmSize || 'Non renseigné'}\n\nBesoin :\n${message}`,
    })

    return {
      success: true,
      message: 'Demande envoyée ! Nous vous répondrons rapidement.',
    }
  } catch {
    return {
      success: false,
      message: 'Une erreur est survenue. Réessayez ou contactez-nous directement.',
    }
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

    return {
      success: true,
      message: "Inscription confirmée ! Vous serez notifié à la sortie de l'app.",
  }
  } catch {
    return { success: false, message: 'Une erreur est survenue. Réessayez.' }
  }
}
