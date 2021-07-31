import Contato from "../../entities/contato/contato";

export default interface CreateContact {
    constructor(name: string, email: string): Contato;
}