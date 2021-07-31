import DeleteContact from "../../domain/contracts/contact/delete-contact";
import DeleteContactRepository from "../../domain/repositories/contact/delete-contact-repository";

export default class DeleteContactService implements DeleteContact {
    private readonly repository: DeleteContactRepository;
    
    constructor(repository: DeleteContactRepository) {
        this.repository = repository;
    }

    deleteById(contactId: number): boolean {
        return this.repository.deleteById(contactId);
    }
}