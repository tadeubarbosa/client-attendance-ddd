export default interface ChangeContactDataRepository {
    updateByEmail(email: string, data: [string: any][]): boolean;
}