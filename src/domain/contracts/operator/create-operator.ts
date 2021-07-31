import Operator from "../../entities/operator/operator";

export default interface CreateOperator {
    create(name: string, channelId: number): Operator;
}