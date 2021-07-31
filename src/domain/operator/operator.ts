import Channel from "../channel/channel";
import Name from "../shared/name";

export default class Operator {
    private name: any;
    private channel: Channel;

    constructor(name: string, channel: Channel) {
        this.setName(name);
        this.setChannel(channel);
    }

    private setName(name: string) {
        this.name = new Name(name);
    }

    private setChannel(channel: Channel) {
        this.channel = channel;
    }
}