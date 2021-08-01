export default interface ChangeProtocolDataRepository {
    updateById(protocolId: number, data: [string: any][]): boolean;
}