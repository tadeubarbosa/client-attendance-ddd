import Channel from "../../entities/channel/channel";

export default interface CreateChannelRepository {
    withName(name: string): Channel;
}