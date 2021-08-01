export default interface UnlinkOperatorToProtocolRepository {
    unlinkById(operatorId: number, protocolId: number): boolean;
}