import Name from "../shared/name";

export default class Operator {
    private name: any;

    constructor(name: string) {
        this.setName(name);
    }

    setName(name: string) {
        this.name = new Name(name);
    }
}