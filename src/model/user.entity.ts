import { Role } from './role.enum';

export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
    roles: Role[];
}