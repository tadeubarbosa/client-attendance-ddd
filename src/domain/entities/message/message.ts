export default class Message {
    private contactId: number|null;
    private operatorId: number|null;
    private message: string|null;
    private sent: boolean;

    constructor(
        contactId: number|null, 
        operatorId: number|null,
        message: string|null,
        sent: boolean
    ) {
        this.setContactId(contactId);
        this.setOperatorId(operatorId);
        this.setMessage(message);
        this.setSent(sent);
    }

    private setContactId(contactId: number|null) {
        this.contactId = contactId;
    }

    private setOperatorId(operatorId: number|null) {
        this.operatorId = operatorId;
    }

    private setMessage(message: string|null) {
        this.message = message;
    }

    private setSent(sent: boolean) {
        this.sent = sent;
    }
}