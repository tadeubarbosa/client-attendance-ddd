import Contact from "../../entities/contact/contact";

export default interface CreateContactRepository {
    create(name: string, email: string): Contact;
}