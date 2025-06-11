export class updateUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  roomNumber: number;
  isActive: boolean;
}
