export default interface ChangeContactData {
    updateByEmail(contactEmail: string, data: [string: any][]): boolean;
}