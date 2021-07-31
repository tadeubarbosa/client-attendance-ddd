import Protocol from "../../entities/protocol/protocol";
import Operator from "../../entities/operator/operator";

export default interface UnlinkProtocolToOperator {
    constructor(protocol: Protocol, operator: Operator): boolean;
}