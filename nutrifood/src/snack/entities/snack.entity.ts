import { IsNotEmpty, IsString, IsNumber, isNotEmpty, isString } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Snack extends Model {
  @IsNotEmpty()
  @IsString()
  @Column
  name: string;

  @IsNotEmpty()
  @Column
  value: number;

  @IsNotEmpty()
  @IsString()
  @Column
  category: string;

  @IsNotEmpty()
  @IsString()
  @Column
  status: string;

  @Column
  image: string;
}
