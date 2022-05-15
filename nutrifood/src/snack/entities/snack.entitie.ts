import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Snack extends Model {
  @IsNotEmpty()
  @IsString()
  @Column
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Column
  value: number;

  @Column
  category: string;

  @Column
  status: string;

  @Column
  image: string;
}
