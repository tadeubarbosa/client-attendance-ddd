export default class InvalidNameException extends Error {
    constructor(message: string) {
        super(message);
    }
}