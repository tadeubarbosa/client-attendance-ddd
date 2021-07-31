export default interface ChangeContactData {
    constructor(contactEmail: string, data: Array<[string: any]>): boolean;
}