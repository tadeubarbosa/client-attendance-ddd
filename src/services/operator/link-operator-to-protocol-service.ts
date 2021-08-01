import LinkOperatorToProtocol from "../../domain/contracts/operator/link-operator-to-protocol";
import LinkOperatorToProtocolRepository from "../../domain/repositories/operator/link-operator-to-protocol-repository";

export default class LinkOperatorToProtocolService implements LinkOperatorToProtocol {
    private readonly repository: LinkOperatorToProtocolRepository;

    constructor(repository: LinkOperatorToProtocolRepository) {
        this.repository = repository;
    }

    linkById(operatorId: number, protocolId: number): boolean {
        return this.repository.linkById(operatorId, protocolId);
    }
}