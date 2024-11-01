import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const { name, tel, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "GoDaddy",
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: "hedi.solve@gmail.com",
      subject: "Reçu commande Casse-croûte Courteau",

      html: `
      <h1>Contact form</h1>
      <p>name: ${name}!</p>
      <p>Phone: ${tel}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
    };
    const res = await transporter.sendMail(mailOptions);

    return Response.json({
      message: "Registration successful",
      status: 200,
    });
  } catch (e) {
    return new Response(500, { message: "Registration failed" });
  }
}
