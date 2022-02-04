import { Optional } from 'sequelize';

interface CreatedAtUpdatedAt {
  createdAt: Date
  updatedAt: Date
}

export interface CustomerAttributes extends CreatedAtUpdatedAt {
  id: number
  firstName: string
  lastName: string
  ssn: string
}

export type CustomerCreationAttributes = Optional<CustomerAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export interface CustomerCreditCardAttributes extends CreatedAtUpdatedAt {
  customerId: number
  type: string
}