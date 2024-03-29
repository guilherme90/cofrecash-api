export enum TransactionSettingInstallmentsEnum {
  YEARLY = 'YEARLY',
  SEMI_ANNUAL = 'SEMI_ANNUAL',
  QUARTERLY = 'QUARTERLY',
  BIMONTHLY = 'BIMONTHLY',
  MONTHLY = 'MONTHLY',
  BIWEEKLY = 'BIWEEKLY',
  WEEKLY = 'WEEKLY',
  DAYS = 'DAYS'
}

export type TransactionInput = {
  user_id: number
  bank_account_id: number
  type_transaction_id: number
  category_id: number
  title: string
  description: string
  value_transaction: number
  due_date: Date
  finished?: boolean
  setting: {
    fixed?: boolean
    installments?: boolean
    installments_quantity?: number
    installments_interval?: TransactionSettingInstallmentsEnum
  }
}
