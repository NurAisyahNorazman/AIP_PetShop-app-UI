import { Pet } from "./pet";

export class Owner {
    id?: number;
    firstName?: string;
    lastName?: string;
    dateCreated?: Date;
    dateModified?: Date;
    pets?: Pet[];
}
