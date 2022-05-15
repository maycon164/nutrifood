import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Lanche extends Model {
  @Column
  nome: string;

  @Column
  valor: number;

  @Column
  categoria: string;

  @Column
  status: boolean;

  @Column
  image: string;
}
