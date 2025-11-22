/**
 * Cloudflare Worker for Portfolio Contact Form
 * Handles form submissions and sends emails via Resend API
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Parse form data
      const { name, email, message } = await request.json();

      // Validate inputs
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: 'Invalid email address' }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      // Get timestamp
      const timestamp = new Date().toLocaleString('pt-PT', {
        timeZone: 'Europe/Lisbon',
        dateStyle: 'full',
        timeStyle: 'short'
      });

      // Send email via Resend API
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
          'X-Priority': '1',
          'Importance': 'high',
        },
        body: JSON.stringify({
          from: 'contact@ryanbarbosa.com',
          to: 'ryan@ryanbarbosa.com',
          reply_to: email,
          subject: `🔔 [URGENTE] Nova Mensagem de ${name}`,
          headers: {
            'X-Priority': '1',
            'Priority': 'urgent',
            'Importance': 'high',
          },
          html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #0f172a;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #0a1628 0%, #1a2a3a 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(45, 212, 191, 0.2);">
        <tr>
            <td style="padding: 50px 40px; text-align: center;">

                <!-- Badge de Urgência -->
                <div style="display: inline-block; background: #ef4444; color: white; padding: 8px 20px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 30px; letter-spacing: 1px;">
                    🔔 NOVA MENSAGEM - REQUER ATENÇÃO
                </div>

                <!-- Esfera com foto -->
                <div style="width: 180px; height: 180px; margin: 0 auto 30px; border-radius: 50%; border: 4px solid #2dd4bf; overflow: hidden; background: linear-gradient(135deg, #374151 0%, #1f2937 100%); box-shadow: 0 20px 60px rgba(45, 212, 191, 0.3);">
                    <img src="https://i.imgur.com/Joj7ruQ.jpeg" alt="Ryan Barbosa" style="width: 100%; height: 100%; object-fit: cover; display: block;">
                </div>

                <!-- Nome -->
                <h1 style="margin: 0 0 10px; font-size: 42px; font-weight: bold; color: #ffffff; letter-spacing: -1px;">
                    Ryan Barbosa
                </h1>

                <!-- Título -->
                <p style="margin: 0 0 30px; font-size: 20px; color: #2dd4bf; font-weight: 500;">
                    Cybersecurity Student
                </p>

                <!-- Linha divisória -->
                <div style="width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #2dd4bf, transparent); margin: 0 auto 40px;"></div>

                <!-- Dados do Contato Recebido -->
                <div style="background: rgba(45, 212, 191, 0.05); border: 2px solid #2dd4bf; border-radius: 15px; padding: 30px; margin: 30px 0; text-align: left;">

                    <!-- Nome do Contato -->
                    <div style="margin-bottom: 25px;">
                        <div style="font-size: 12px; color: #2dd4bf; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                            👤 Nome do Contato
                        </div>
                        <div style="font-size: 18px; color: #ffffff; font-weight: 600;">
                            ${name}
                        </div>
                    </div>

                    <!-- Email do Contato -->
                    <div style="margin-bottom: 25px;">
                        <div style="font-size: 12px; color: #2dd4bf; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                            📧 Email
                        </div>
                        <div style="font-size: 16px;">
                            <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none; font-weight: 500;">
                                ${email}
                            </a>
                        </div>
                    </div>

                    <!-- Mensagem -->
                    <div>
                        <div style="font-size: 12px; color: #2dd4bf; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
                            💬 Mensagem
                        </div>
                        <div style="background: #0f172a; border-left: 4px solid #2dd4bf; border-radius: 8px; padding: 20px; font-size: 15px; color: #d1d5db; line-height: 1.8; white-space: pre-wrap;">
${message}
                        </div>
                    </div>
                </div>

                <!-- Botão de Resposta -->
                <div style="margin: 35px 0;">
                    <a href="mailto:${email}?subject=Re: Portfolio Contact" style="display: inline-block; background: linear-gradient(135deg, #059669 0%, #2dd4bf 100%); color: white; padding: 16px 40px; border-radius: 10px; text-decoration: none; font-size: 16px; font-weight: 700; box-shadow: 0 10px 30px rgba(45, 212, 191, 0.3); transition: transform 0.3s;">
                        ↩️ Responder Agora
                    </a>
                </div>

                <!-- Timestamp -->
                <p style="margin: 30px 0 20px; font-size: 13px; color: #6b7280;">
                    📅 Recebido em: ${timestamp}
                </p>

                <!-- Footer -->
                <p style="margin: 35px 0 10px; font-size: 11px; color: #6b7280; border-top: 1px solid #374151; padding-top: 25px;">
                    Enviado automaticamente via <a href="https://ryanbarbosa.com" style="color: #2dd4bf; text-decoration: none;">ryanbarbosa.com</a><br>
                    Powered by Cloudflare Workers + Resend
                </p>
                <p style="margin: 10px 0 0; font-size: 10px; color: #4b5563;">
                    © 2025 Ryan Barbosa. All rights reserved.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.text();
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send email');
      }

      // Success response
      return new Response(
        JSON.stringify({ success: true, message: 'Email sent successfully' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }
  },
};
