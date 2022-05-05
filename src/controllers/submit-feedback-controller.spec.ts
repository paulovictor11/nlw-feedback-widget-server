import { Request, Response } from "express";
import { SubmitFeedbackController } from "./submit-feedback-controlle";

interface IMockFeedbackRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

let responseObject = {};
let mockFeedbackRequest = {};
const mockFeedbackResponse: Partial<Response> = {
    status: jest.fn(),
    json: jest.fn().mockImplementation((result) => {
        responseObject = result;
    }),
};

describe("Submit feedback controller", () => {
    beforeEach(() => {
        jest.setTimeout(30000);
    });

    it("should be able to submit a feedback", async () => {
        mockFeedbackRequest = {
            body: {
                type: "BUG",
                comment: "Testing controller",
                screenshot: "data:image/pmg;base64,a32sd1a68sf4a65s1a",
            } as IMockFeedbackRequest,
        };
        const promise = new SubmitFeedbackController().handle(
            mockFeedbackRequest as Request,
            mockFeedbackResponse as Response
        );

        expect(await promise).resolves.not.toThrow();
    });
});
