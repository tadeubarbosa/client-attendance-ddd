import DeleteOperator from "../../domain/contracts/operator/delete-operator";
import DeleteOperatorRepository from "../../domain/repositories/operator/delete-operator-repository";

export default class DeleteOperatorService implements DeleteOperator {
    private readonly repository: DeleteOperatorRepository;

    constructor(repository: DeleteOperatorRepository) {
        this.repository = repository;
    }

    deleteById(operatorId: number): boolean {
        return this.repository.deleteById(operatorId);
    }
}