import InvalidEmailException from "../../exceptions/shared/invalid-email-exception";

export default class Email {
    private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    private email: string;

    constructor(email: string) {
        this.setEmail(email);
    }

    private setEmail(email: string) {
        if (this.emailRegex.test(String(email).toLowerCase()) === false) {
            throw new InvalidEmailException('The email must be an valid email: email@example.com!');
        }
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }
}