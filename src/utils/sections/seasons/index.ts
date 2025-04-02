import { SeasonStruct } from "./types"
import Image11 from "@/images/season1/image1.png"
import Image12 from "@/images/season1/image2.jpg"
import Image13 from "@/images/season1/image3.png"
import Image14 from "@/images/season1/image4.png"
import Image21 from "@/images/season2/image1.png"
import Image22 from "@/images/season2/image2.png"
import Image23 from "@/images/season2/image3.png"
import Image24 from "@/images/season2/image4.png"
import Image25 from "@/images/season2/image5.png"

export const SEASONS: SeasonStruct[] = [
  {
    id: 1,
    name: 'TIME_WINTER',
    icon: '☃️',
    cards: [
      {
        id: 1,
        name: 'SEASON_WINTER_NAME_1',
        description: 'SEASON_WINTER_DESCRIPTION_1',
        image: Image11,
      },
      {
        id: 2,
        name: 'SEASON_WINTER_NAME_2',
        description: 'SEASON_WINTER_DESCRIPTION_2',
        image: Image12,
      },
      {
        id: 3,
        name: 'SEASON_WINTER_NAME_3',
        description: 'SEASON_WINTER_DESCRIPTION_3',
        image: Image13,
      },
      {
        id: 4,
        name: 'SEASON_WINTER_NAME_4',
        description: 'SEASON_WINTER_DESCRIPTION_4',
        image: Image14,
      },
    ]
  },
  {
    id: 2,
    name: 'TIME_SUMMER',
    icon: '☀️',
    cards: [
      {
        id: 1,
        name: 'SEASON_SUMMER_NAME_1',
        description: 'SEASON_SUMMER_DESCRIPTION_1',
        image: Image21,
      },
      {
        id: 2,
        name: 'SEASON_SUMMER_NAME_2',
        description: 'SEASON_SUMMER_DESCRIPTION_2',
        image: Image22,
      },
      {
        id: 3,
        name: 'SEASON_SUMMER_NAME_3',
        description: 'SEASON_SUMMER_DESCRIPTION_3',
        image: Image23,
      },
      {
        id: 4,
        name: 'SEASON_SUMMER_NAME_4',
        description: 'SEASON_SUMMER_DESCRIPTION_4',
        image: Image24,
      },
      {
        id: 5,
        name: 'SEASON_SUMMER_NAME_5',
        description: 'SEASON_SUMMER_DESCRIPTION_5',
        image: Image25,
      },
      // {
      //   id: 6,
      //   name: 'SEASON_SUMMER_NAME_6',
      //   description: 'SEASON_SUMMER_DESCRIPTION_6',
      //   image: FamilyImage
      // },
      // {
      //   id: 7,
      //   name: 'SEASON_SUMMER_NAME_7',
      //   description: 'SEASON_SUMMER_DESCRIPTION_7',
      //   image: GrassImage
      // },
    ]
  }
]