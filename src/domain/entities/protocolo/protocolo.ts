import Contato from "../contato/contato";

export default class Protocolo {
    private number: number;
    private contato: Contato;
    private createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date|null;

    constructor(
        number: number,
        contato: Contato,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date|null
    ) {
        this.setNumber(number);
        this.setContato(contato);
        this.setCreatedAt(createdAt);
        this.setUpdatedAt(updatedAt);
        this.setDeletedAt(deletedAt);
    }

    private setNumber(number: number) {
        this.number = number;
    }

    private setContato(contato: Contato) {
        this.contato = contato;
    }

    private setCreatedAt(createdAt: Date) {
        this.createdAt = createdAt;
    }

    private setUpdatedAt(updatedAt: Date) {
        this.updatedAt = updatedAt;
    }

    private setDeletedAt(deletedAt: Date|null) {
        this.deletedAt = deletedAt;
    }
}