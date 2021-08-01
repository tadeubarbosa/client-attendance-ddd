export default interface LinkOperatorToChannel {
    linkById(operatorId: number, channelId: number): boolean;
}