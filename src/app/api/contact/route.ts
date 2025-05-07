import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    let transporter;
    
    // Check if SMTP credentials are set
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      // Use production configuration
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      console.log('No SMTP credentials found.');
    }

    // Format the message
    const message = `
      Nouvelle demande d'audit de bien:
      
      Nom: ${formData.lastName}
      Prénom: ${formData.firstName}
      Email: ${formData.email}
      Téléphone: ${formData.phone || 'Non fourni'}
      Adresse du bien: ${formData.address}
      Type de bien: ${formData.propertyType}
      
      Message envoyé depuis le formulaire de contact du site Driing Conciergerie.
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'site-web@driing-conciergerie.fr',
      to: 'contact@driing-conciergerie.fr',
      subject: 'Nouvelle demande d\'audit de bien',
      text: message,
      html: `<div style="font-family: sans-serif; line-height: 1.5;">
        <h1 style="color: #1D3784; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouvelle demande d'audit de bien</h1>
        <p><strong>Nom:</strong> ${formData.lastName}</p>
        <p><strong>Prénom:</strong> ${formData.firstName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Téléphone:</strong> ${formData.phone || 'Non fourni'}</p>
        <p><strong>Adresse du bien:</strong> ${formData.address}</p>
        <p><strong>Type de bien:</strong> ${formData.propertyType}</p>
        <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
          Message envoyé depuis le formulaire de contact du site Driing Conciergerie.
        </div>
      </div>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 
