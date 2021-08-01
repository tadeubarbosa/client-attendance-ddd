export default interface ChangeProtocolData {
    updateById(protocolId: number, data: [string: any][]): boolean;
}