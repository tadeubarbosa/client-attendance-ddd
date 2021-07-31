import Contact from "../../entities/contact/contact"

export default interface CreateContact {
    constructor(name: string, email: string): Contact;
}