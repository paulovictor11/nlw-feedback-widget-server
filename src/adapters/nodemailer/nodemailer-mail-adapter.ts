import nodemailer from "nodemailer";
import { IMailAdapter, ISendMailRequest } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "dfb899a61d9841",
        pass: "b4736c37b589d6",
    },
});

export class NodemailerMailAdapter implements IMailAdapter {
    async sendMail({ subject, body }: ISendMailRequest) {
        await transport.sendMail({
            from: "Equipe FeedGet <suporte@feedget.com>",
            to: "Paulo Victor <paulo@feedget.com>",
            subject,
            html: body,
        });
    }
}
