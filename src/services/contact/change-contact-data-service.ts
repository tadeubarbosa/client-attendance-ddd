import ChangeContactData from "../../domain/contracts/contact/change-contact-data"
import ChangeContactDataRepository from "../../domain/repositories/contact/change-contact-data-repository"

export default class ChangeContactDataService implements ChangeContactData {
    private readonly repository: ChangeContactDataRepository;

    constructor(repository: ChangeContactDataRepository) {
        this.repository = repository;
    }

    updateByEmail(email: string, data: [string: any][]): boolean {
        return this.repository.updateByEmail(email, data);
    }
}