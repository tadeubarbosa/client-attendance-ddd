export default interface LinkOperatorToChannelRepository {
    linkById(operatorId: number, channelId: number): boolean;
}