import Name from "../shared/name";

export default class Channel {
    private id: number;
    private name: Name;

    constructor(id: number, name: string) {
        this.setId(id);
        this.setName(name);
    }

    private setId(id: number) {
        this.id = id;
    }

    private setName(name: string) {
        this.name = new Name(name);
    }
}