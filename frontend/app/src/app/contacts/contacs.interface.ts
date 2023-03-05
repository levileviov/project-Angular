export interface Contact {
    id: number;
    createTime: Date;
    firstName: string;
    lastName: string;
    age: Date;
    meansOfCommunication: meansOfCommunication;
    phone: number;
    email: string;
    state: string;
    city: string;
    street: string;
    houseNamber: string;
    zipCode: number;
    info: string;
    isDeleted: boolean;
}

export enum meansOfCommunication {
    sms = 0,
    email = 1,
    phone = 2,
    post = 3,
}

export const moclevel = [
    {stasus: meansOfCommunication.email, title: 'אימייל'},
    {stasus: meansOfCommunication.phone, title: 'פלאפון'},
    {stasus: meansOfCommunication.post, title: 'דואר'},
    {stasus: meansOfCommunication.sms, title: 'סמס'},
]

