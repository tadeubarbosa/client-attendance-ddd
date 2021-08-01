export default interface UnlinkOperatorToChannelRepository {
    unlinkById(operatorId: number, channelId: number): boolean;
}