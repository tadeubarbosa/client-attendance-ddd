import CreateChannel from "../../domain/contracts/channel/create-channel"
import Channel from "../../domain/entities/channel/channel";
import CreateChannelRepository from "../../domain/repositories/channel/create-channel-repository"

export default class CreateChannelService implements CreateChannel {
    private readonly repository: CreateChannelRepository;

    constructor(repository: CreateChannelRepository) {
        this.repository = repository;
    }

    create(name: string): Channel {
        return this.repository.withName(name);
    }
}