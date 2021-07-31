export default interface DeleteChannelRepository {
    deleteById(channelId: number): boolean;
}