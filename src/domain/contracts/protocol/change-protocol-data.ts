import Protocol from "../../entities/protocol/protocol";

export default interface ChangeProtocolData {
    constructor(protocol: Protocol, data: Array<[string: any]>): boolean;
}