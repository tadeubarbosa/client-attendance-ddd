import Name from "../shared/name";
import Email from "../shared/email";

export default class Contato {
    private name: Name;
    private email: Email;

    constructor(name: string, email: string) {
        this.setName(name);
        this.setEmail(email);
    }

    private setName(name: string) {
        this.name = new Name(name);
    }

    private setEmail(email: string) {
        this.email = new Email(email);
    }
}