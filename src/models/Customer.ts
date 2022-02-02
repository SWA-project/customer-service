import { Model, Table, Column, DataType } from 'sequelize-typescript';

import { CustomerCreationAttributes, CustomerAttributes } from '../types/models';



@Table
class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> {
  @Column({ 
    primaryKey: true, 
    autoIncrement: true,
    type: DataType.INTEGER
  })
  id!: number;

  @Column({
    type: DataType.STRING
  })
  firstName!: string;

  @Column({
    type: DataType.STRING
  })
  lastName!: string;

  @Column({
    type: DataType.STRING
  })
  ssn!: string;

}


export default Customer;