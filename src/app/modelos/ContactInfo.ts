export class ContactInfo {
    email: string;
    message: string;
    date: Date;

    constructor(email: string, message: string) {
        this.email = email;
        this.message = message;
        this.date = new Date();
    }
}