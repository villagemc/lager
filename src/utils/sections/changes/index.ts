import { ChangeStruct } from "./types"

export const CHANGES: ChangeStruct[] = [
  {
    id: 1,
    icon: '☃️',
    name: 'TIME_WINTER',
    plans: []
  },
  {
    id: 2,
    icon: '🌸',
    name: 'TIME_SPRING',
    plans: []
  },
  {
    id: 3,
    icon: '☀️',
    name: 'TIME_SUMMER',
    plans: [
      {
        id: 4,
        month: 'MONTH_JUNE',
        months: [
          { id: 1, start: '2025-06-01', end: '2025-06-07', price: 119000 },
          { id: 2, start: '2025-06-08', end: '2025-06-14', price: 119000 },
          { id: 3, start: '2025-06-15', end: '2025-06-21', price: 119000 },
          { id: 4, start: '2025-06-22', end: '2025-06-28', price: 119000 },
          { id: 5, start: '2025-06-29', end: '2025-07-05', price: 119000 },
        ]
      },
      {
        id: 5,
        month: 'MONTH_JULY',
        months: [
          { id: 6, start: '2025-07-06', end: '2025-07-12', price: 119000 },
          { id: 7, start: '2025-07-13', end: '2025-07-19', price: 119000 },
          { id: 8, start: '2025-07-20', end: '2025-07-26', price: 119000 },
          { id: 9, start: '2025-07-27', end: '2025-08-02', price: 119000 },
        ]
      },
      {
        id: 6,
        month: 'MONTH_AUGUST',
        months: [
          { id: 10, start: '2025-08-03', end: '2025-08-09', price: 119000 },
          { id: 11, start: '2025-08-10', end: '2025-08-16', price: 119000 },
          { id: 12, start: '2025-08-17', end: '2025-08-23', price: 99900 },
        ]
      },
    ]
  },
  {
    id: 4,
    icon: '🍂',
    name: 'TIME_AUTUMN',
    plans: []
  },
]