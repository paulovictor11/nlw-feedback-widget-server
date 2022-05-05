export interface ISendMailRequest {
    subject: string;
    body: string;
}

export interface IMailAdapter {
    sendMail: (data: ISendMailRequest) => Promise<void>;
}
