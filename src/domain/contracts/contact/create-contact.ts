import Contact from "../../entities/contact/contact"

export default interface CreateContact {
    create(name: string, email: string): Contact;
}