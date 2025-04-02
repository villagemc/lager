export interface SeasonCardStruct {
  id: number
  name: string
  description: string
  image: string
}

export interface SeasonStruct {
  id: number
  name: string
  icon: string
  cards: SeasonCardStruct[]
}