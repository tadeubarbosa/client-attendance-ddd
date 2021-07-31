export default interface DeleteContactRepository {
    deleteById(contactId: number): boolean;
}