export default interface ChangeChannelDataRepository {
    updateById(channelId: number, data: [string: any][]): boolean;
}