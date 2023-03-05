export interface Customers {
    id: number;
    createTime: Date;
    firstName: string;
    lastName: string;
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



