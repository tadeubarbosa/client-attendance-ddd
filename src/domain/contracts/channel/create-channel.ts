import Channel from "../../entities/channel/channel";

export default interface CreateChannel {
    constructor(id: number, name: string): Channel;
}