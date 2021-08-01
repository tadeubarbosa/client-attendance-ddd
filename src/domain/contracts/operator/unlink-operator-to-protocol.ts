export default interface UnlinkOperatorToProtocol {
    unlinkById(operatorId: number, protocolId: number): boolean;
}