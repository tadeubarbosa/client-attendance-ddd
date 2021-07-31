import Operator from "../../entities/operator/operator";

export default interface CreateOperator {
    constructor(name: string, channelId: number): Operator;
}