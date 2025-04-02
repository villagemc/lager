import { IconType } from "react-icons"

export interface ContactStruct {
  id: number
  name: string
  href: string
  trans?: boolean
  icon: IconType
} 