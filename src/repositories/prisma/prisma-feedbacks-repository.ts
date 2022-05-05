import { prisma } from "../../prisma";
import {
    IFeedbackRequest,
    IFeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
    async create({ type, comment, screenshot }: IFeedbackRequest) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            },
        });
    }
}
