import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @IsNotEmpty()
  @IsNumber()
  @Column
  totalValue: number;

  @IsNotEmpty()
  @IsString()
  @Column
  payment: string;
}
