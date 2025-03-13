export type Table = {
  id: string,
  seats: number,
}

export type Reservation = {
  id: string,
  tableId: string,
  datetime: string,
  name: string,
}