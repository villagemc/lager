export interface ChangeMonthStruct {
  id: number
  start: string
  end: string
  price: number
  out_price?: number
}

export interface ChangePlanStruct {
  id: number
  month: string
  months: ChangeMonthStruct[]
}

export interface ChangeStruct {
  id: number
  name: string
  icon: string
  plans: ChangePlanStruct[]
}