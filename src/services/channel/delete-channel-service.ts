import DeleteChannelRepository from "../../domain/repositories/channel/delete-channel-repository";
import DeleteChannel from "../../domain/repositories/channel/delete-channel-repository";

export default class DeleteChannelService implements DeleteChannel {
    private readonly repository: DeleteChannelRepository;

    constructor(repository: DeleteChannelRepository) {
        this.repository = repository;
    }

    deleteById(channelId: number): boolean {
        return this.repository.deleteById(channelId);
    }
}