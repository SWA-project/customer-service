import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';

import { CustomerCreditCardAttributes } from '../types/models';
import Customer from './Customer';


@Table
class CustomerCreditCard extends Model<CustomerCreditCardAttributes> {

  @ForeignKey(() => Customer)
  customerId!: number;
  
  @Column({
    type: DataType.STRING
  })
  type!: string;

 

}


export default CustomerCreditCard;