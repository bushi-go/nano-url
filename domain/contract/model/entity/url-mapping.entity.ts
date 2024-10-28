import { User } from "./user.entity";

export interface UrlMapping {
    mappedUrl: string;
    mappedTo: string;
    owner: User
}