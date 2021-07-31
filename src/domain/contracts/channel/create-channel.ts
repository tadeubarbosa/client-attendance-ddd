import Channel from "../../entities/channel/channel";

export default interface CreateChannel {
    create(name: string): Channel;
}