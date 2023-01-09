import { Injectable } from '@nestjs/common';
import { User } from '../model/user.entity';
import { Role } from '../model/role.enum';

// export type User = {
//   id: number;
//   name: string;
//   username: string;
//   password: string;
// };

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Marius',
      username: 'marius',
      password: 'hello123',
      roles: [Role.User],
    },
    {
      id: 2,
      name: 'John',
      username: 'john',
      password: 'hello1234',
      roles: [Role.Admin],
    },
    {
      id: 3,
      name: 'Maria',
      username: 'maria',
      password: 'hello12345',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
