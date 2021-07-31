export default interface ChangeContactData {
    updateByEmail(email: string, data: [string: any][]): boolean;
}