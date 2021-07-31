import Contact from "../contact/contact";

export default class Protocol {
    private number: number;
    private contact: Contact;
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date|null;

    constructor(
        number: number,
        contact: Contact,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date|null
    ) {
        this.setNumber(number);
        this.setContact(contact);
        this.setCreatedAt(createdAt);
        this.setUpdatedAt(updatedAt);
        this.setDeletedAt(deletedAt);
    }

    private setNumber(number: number) {
        this.number = number;
    }

    private setContact(contact: Contact) {
        this.contact = contact;
    }

    private setCreatedAt(createdAt: Date) {
        this.createdAt = createdAt;
    }

    private setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }

    private setDeletedAt(deletedAt: Date|null) {
        this.deletedAt = deletedAt;
    }
}