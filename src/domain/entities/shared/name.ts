import InvalidNameException from "../../../exceptions/contato/invalid-name-exception";

export default class Name {
    private name: string;

    constructor(name: string) {
        this.setName(name);
    }

    private setName(name: string) {
        if (name.length < 3) {
            throw new InvalidNameException('The name must be at least 3 characters long');
        }
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}