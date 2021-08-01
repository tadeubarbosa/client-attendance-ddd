import UnlinkOperatorToChannel from "../../domain/contracts/operator/unlink-operator-to-channel";
import UnlinkOperatorToChannelRepository from "../../domain/repositories/operator/unlink-operator-to-channel-repository";

export default class UnlinkOperatorToChannelService implements UnlinkOperatorToChannel {
    private readonly repository: UnlinkOperatorToChannelRepository;

    constructor(repository: UnlinkOperatorToChannelRepository) {
        this.repository = repository;
    }

    unlinkById(operatorId: number, channelId: number): boolean {
        return this.repository.unlinkById(operatorId, channelId);
    }
}