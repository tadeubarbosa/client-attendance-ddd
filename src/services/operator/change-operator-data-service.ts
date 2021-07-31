import ChangeOperatorData from "../../domain/contracts/operator/change-operator-data";
import ChangeOperatorDataRepository from "../../domain/repositories/operator/change-operator-data-repository";

export default class ChangeOperatorDataService implements ChangeOperatorData {
    private readonly repository: ChangeOperatorDataRepository;

    constructor(repository: ChangeOperatorDataRepository ) {
        this.repository = repository;
    }

    updateById(operatorId: number, data: [string: any][]): boolean {
        return this.repository.updateById(operatorId, data);
    }
}