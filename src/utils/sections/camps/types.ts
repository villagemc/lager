import { IconType } from "react-icons"

export interface CampMarkStruct {
  id: number
  mark: string
  icon?: IconType
}

export interface CampStruct {
  id: number
  item: string
  name: string
  description: string
  marks: CampMarkStruct[]
  image: string
}