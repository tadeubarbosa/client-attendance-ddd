export default interface ChangeChannelData {
    constructor(channelId: number, data: Array<[string: any]>): boolean;
}