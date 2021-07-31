import Operator from "../../domain/entities/operator/operator";
import CreateOperator from "../../domain/contracts/operator/create-operator";
import CreateOperatorRepository from "../../domain/repositories/operator/create-operator-repository";

export default class CreateOperatorService implements CreateOperator {
    private readonly repository: CreateOperatorRepository;

    constructor(repository: CreateOperatorRepository) {
        this.repository = repository;
    }

    create(name: string, channelId: number): Operator {
        return this.repository.create(name, channelId);
    }
}