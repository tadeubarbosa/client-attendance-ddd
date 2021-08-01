export default interface UnlinkOperatorToChannel {
    unlinkById(operatorId: number, channelId: number): boolean;
}