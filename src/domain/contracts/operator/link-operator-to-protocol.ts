export default interface LinkOperatorToProtocol {
    linkById(operatorId: number, protocolId: number): boolean;
}