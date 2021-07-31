import Operator from "../../entities/operator/operator";

export default interface CreateOperatorRepository {
    create(name: string, channelId: number): Operator;
}