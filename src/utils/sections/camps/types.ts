export interface CampMarkStruct {
  id: number
  mark: string
  icon?: string
}

export interface CampStruct {
  id: number
  item: string
  name: string
  description: string
  marks: CampMarkStruct[]
  image: string
}