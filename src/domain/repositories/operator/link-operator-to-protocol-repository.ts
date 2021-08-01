export default interface LinkOperatorToProtocolRepository {
    linkById(operatorId: number, protocolId: number): boolean;
}