import { Owner } from "./owner";

export class Pet {
    id?: number;
    name?: string;
    owner?: Owner;
    breed?: string;
    dateCreated?: Date;
    dateModified?: Date;
}
