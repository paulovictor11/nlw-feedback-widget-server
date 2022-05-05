import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
//data:image/pmg;base64

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe("Submit feedback usecase", () => {
    it("should throw an error when no type is provided", async () => {
        await expect(
            submitFeedback.execute({
                type: "",
                comment: "Testing feedback",
                screenshot: "test.jpg",
            })
        ).rejects.toThrow("Type is required");
    });

    it("should throw an error when no comment is provided", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "",
                screenshot: "test.jpg",
            })
        ).rejects.toThrow("Comment is required");
    });

    it("should throw an error when a wrong screenshot is provided", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "Testing feedback",
                screenshot: "test.jpg",
            })
        ).rejects.toThrow("Invalid screenshot format");
    });

    it("should be able to submit a feedback", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "Testing feedback",
                screenshot: "data:image/pmg;base64,a32sd1a68sf4a65s1a",
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
});
