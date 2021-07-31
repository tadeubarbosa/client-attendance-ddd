import Message from "../../entities/message/message";

export default interface CreateMessage {
    constructor(contactId: number|null, operatorId: number|null, message: string): Message;
}