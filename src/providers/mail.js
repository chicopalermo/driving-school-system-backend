import nodemailer from 'nodemailer';

export class Mail {
    constructor(
        from,
        to,
        subject,
        body
    ) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
    }

    static async sendMail(message) {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });
        
        const mailOptions = {
            from: message.from,
            to: message.to,
            subject: message.subject,
            html: message.body
        };

        return await transporter.sendMail(mailOptions);
    }
}