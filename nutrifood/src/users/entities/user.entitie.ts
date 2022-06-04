import { IsNotEmpty, IsString } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @IsNotEmpty()
  @IsString()
  @Column
  name: string;

  @IsNotEmpty()
  @Column
  email: string;

  @IsNotEmpty()
  @Column
  password: string;

  @Column
  address: string;

  @Column
  phone: string;
}
