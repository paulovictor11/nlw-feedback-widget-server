import { Request, Response } from "express";
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "../use-cases/submit-feedback-use-case";

export class SubmitFeedbackController {
    async handle(request: Request, response: Response) {
        try {
            const { type, comment, screenshot } = request.body;

            const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
            const nodemailerMailAdapter = new NodemailerMailAdapter();

            const submitFeedbackUseCase = new SubmitFeedbackUseCase(
                prismaFeedbacksRepository,
                nodemailerMailAdapter
            );

            await submitFeedbackUseCase.execute({
                type,
                comment,
                screenshot,
            });

            return response.status(201).send();
        } catch (err: any) {
            return response.status(400).json({
                message: err.message ?? "Unexpected Error",
            });
        }
    }
}
