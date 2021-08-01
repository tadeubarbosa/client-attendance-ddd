import LinkOperatorToChannel from "../../domain/contracts/operator/link-operator-to-channel";
import LinkOperatorToChannelRepository from "../../domain/repositories/operator/link-operator-to-channel-repository";

export default class LinkOperatorToChannelService implements LinkOperatorToChannel {
    private readonly repository: LinkOperatorToChannelRepository;

    constructor(repository: LinkOperatorToChannelRepository) {
        this.repository = repository;
    }

    linkById(operatorId: number, channelId: number): boolean {
        return this.repository.linkById(operatorId, channelId);
    }
}