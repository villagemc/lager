import { DocStruct } from "./types"

const { location } = window

const path = (loc: string) => location + loc

export const DOCS: DocStruct[] = [
  { id: 1, name: 'DOCS_PUBLIC', href: path('/offer.pdf') },
]