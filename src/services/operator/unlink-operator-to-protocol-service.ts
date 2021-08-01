import UnlinkOperatorToProtocol from "../../domain/contracts/operator/unlink-operator-to-protocol";
import UnlinkOperatorToProtocolRepository from "../../domain/repositories/operator/unlink-operator-to-protocol-repository";

export default class UnlinkOperatorToProtocolService implements UnlinkOperatorToProtocol {
    private readonly repository: UnlinkOperatorToProtocolRepository;

    constructor(repository: UnlinkOperatorToProtocolRepository) {
        this.repository = repository;
    }

    unlinkById(operatorId: number, protocolId: number): boolean {
        return this.repository.unlinkById(operatorId, protocolId);
    }
}