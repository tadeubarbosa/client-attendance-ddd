import Protocol from "../../entities/protocol/protocol";

export default interface CreateProtocol {
    create(data: [string: any][]): Protocol;
}