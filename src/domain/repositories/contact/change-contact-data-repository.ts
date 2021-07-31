export default interface ChangeContactDataRepository {
    updateById(contactId: number, data: [string: any][]);
}