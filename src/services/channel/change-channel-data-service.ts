import ChangeChannelData from "../../domain/contracts/channel/change-channel-data";
import ChangeChannelDataRepository from "../../domain/repositories/channel/change-channel-data-repository"

export default class ChangeChannelDataService implements ChangeChannelData {
    private readonly repository: ChangeChannelDataRepository;

    constructor(repository: ChangeChannelDataRepository) {
        this.repository = repository;
    }

    updateById(channelId: number, data: [string: any][]): boolean {
        return this.repository.updateById(channelId, data);
    }
}