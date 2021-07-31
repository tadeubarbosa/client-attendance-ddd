import Protocol from "../../entities/protocol/protocol";
import Contact from "../../entities/contact/contact";

export default interface CreateProtocol {
    constructor(contact: Contact): Protocol;
}