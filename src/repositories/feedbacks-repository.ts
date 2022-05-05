export interface IFeedbackRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface IFeedbacksRepository {
    create: (data: IFeedbackRequest) => Promise<void>;
}
