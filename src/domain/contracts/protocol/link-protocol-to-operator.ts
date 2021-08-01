export default interface LinkProtocolToOperator {
    linkById(protocolId: number, operatorId: number): boolean;
}