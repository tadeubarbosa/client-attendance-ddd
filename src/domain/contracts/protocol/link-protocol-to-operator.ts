import Protocol from "../../entities/protocol/protocol";
import Operator from "../../entities/operator/operator";

export default interface LinkProtocolToOperator {
    constructor(protocol: Protocol, operator: Operator): boolean;
}