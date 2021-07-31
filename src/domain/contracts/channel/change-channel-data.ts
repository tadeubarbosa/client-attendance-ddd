export default interface ChangeChannelData {
    updateById(channelId: number, data: [string: any][]): boolean;
}