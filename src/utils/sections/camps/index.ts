import { CampStruct } from "./types"
import Image1 from "@/images/camp/image1.png"
import Image2 from "@/images/camp/image2.png"
import Image3 from "@/images/camp/image3.png"
import Image4 from "@/images/camp/image4.png"
import SVG1 from "@/images/smile/one.svg"
import SVG2 from "@/images/smile/two.svg"

export const CAMPS: CampStruct[] = [
  {
    id: 1,
    item: 'CAMP_ITEM_1',
    name: 'CAMP_NAME_1',
    description: 'CAMP_DESCRIPTION_1',
    image: Image1,
    marks: [
      { id: 1, mark: 'CAMP_PUNKT_1_1', icon: SVG1 },
      { id: 2, mark: 'CAMP_PUNKT_1_2', icon: SVG2 },
    ]
  },
  {
    id: 2,
    item: 'CAMP_ITEM_2',
    name: 'CAMP_NAME_2',
    description: 'CAMP_DESCRIPTION_2',
    image: Image2,
    marks: [
      { id: 1, mark: 'CAMP_PUNKT_2_1', icon: SVG1 },
      { id: 2, mark: 'CAMP_PUNKT_2_2', icon: SVG2 },
    ]
  },
  {
    id: 3,
    item: 'CAMP_ITEM_3',
    name: 'CAMP_NAME_3',
    description: 'CAMP_DESCRIPTION_3',
    image: Image3,
    marks: [
      { id: 1, mark: 'CAMP_PUNKT_3_1', icon: SVG1 },
      { id: 2, mark: 'CAMP_PUNKT_3_2', icon: SVG2 },
    ]
  },
  {
    id: 4,
    item: 'CAMP_ITEM_4',
    name: 'CAMP_NAME_4',
    description: 'CAMP_DESCRIPTION_4',
    image: Image4,
    marks: [
      { id: 1, mark: 'CAMP_PUNKT_4_1', icon: SVG1 },
      { id: 2, mark: 'CAMP_PUNKT_4_2', icon: SVG2 },
    ]
  },
  // {
  //   id: 5,
  //   item: 'CAMP_ITEM_5',
  //   name: 'CAMP_NAME_5',
  //   description: 'CAMP_DESCRIPTION_5',
  //   image: Image,
  //   marks: [
  //     { id: 1, mark: 'CAMP_PUNKT_5_1' },
  //     { id: 2, mark: 'CAMP_PUNKT_5_2' },
  //     { id: 3, mark: 'CAMP_PUNKT_5_4' },
  //     { id: 4, mark: 'CAMP_PUNKT_5_4' },
  //   ]
  // },
]