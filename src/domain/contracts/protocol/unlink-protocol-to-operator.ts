export default interface UnlinkProtocolToOperator {
    unlinkById(protocolID: number, operatorId: number): boolean;
}