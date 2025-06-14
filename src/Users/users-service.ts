import { ConflictException, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { updateUserDto } from './dtos/update-user-dtos';
import { User } from './interfaces/user-interface';

import { CreateUserDto } from './dtos/create-user-dtos';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John paul',
      email: 'john@gmail.com',
      phone: '+25427066347',
      checkInDate: new Date('2025-05-06'),
      checkOutDate: new Date('2023-04-04'),
      roomNumber: 121,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'John peter',
      email: 'johnpeter@gmail.com',
      phone: '+25424546347',
      checkInDate: new Date('2025-04-06'),
      checkOutDate: new Date('2023-02-04'),
      roomNumber: 111,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private nextId = 3;
  create(data: CreateUserDto): User {
    const existingUser = this.users.find((user) => user.email === data.email);
    if (existingUser) {
      throw new ConflictException(
        `guest with email ${data.email}  already exists`,
      );
    }
    const newUser: User = {
      ...data,
      id: this.nextId++,

      checkInDate: data.checkInDate ? new Date(data.checkInDate) : undefined,
      checkOutDate: data.checkOutDate ? new Date(data.checkOutDate) : undefined,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }
}
