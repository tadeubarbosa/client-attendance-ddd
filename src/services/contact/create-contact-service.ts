import CreateContact from "../../domain/contracts/contact/create-contact";
import CreateContactRepository from "../../domain/repositories/contact/create-contact-repository"
import Contact from "../../domain/entities/contact/contact";

export default class CreateContactService implements CreateContact {
    private repository: CreateContactRepository;

    constructor(repository: CreateContactRepository) {
        this.repository = repository;
    }

    create(name: string, email: string): Contact {
        return this.repository.create(name, email);
    }
}