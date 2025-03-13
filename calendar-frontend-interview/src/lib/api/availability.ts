/*
* A date is available if there is at least one open
* <table, timeslot> tuple for that date. A 
* <table, timeslot> is not available if there is an
* equivalent reservation. 
*/
export async function getAllAvailableDates(
  {
    startDate,
    endDate,
    seats
  }: {
    startDate: string,
    endDate: string,
    seats: number
  }
) {
  // Mock result for 2024-02-11 to 2024-02-17, seats = 2
  return Promise.resolve([
    "2024-02-11",
    "2024-02-12",
    "2024-02-13",
    "2024-02-14",
    "2024-02-15",
    "2024-02-17"
  ])
}

/*
* A time is available for a date if there is
* not a matching reservation for that
* <seats, tiemslot> combination. 
*/
export async function getAvailableTimes(
  {
    date,
    seats,
  }: 
  {
    date: string,
    seats: number
  }
): Promise<{
  table: {
    id: string,
    seats: number,
  },
  datetime: string
}[]> {
  // Mock result for date = 2024-02-23, seats = 2
  return [{
    table: {
      id: "t1",
      seats: 2,
    },
    datetime: '2024-02-23T17:30:00-05:00'
  }, {
    table: {
      id: "t1",
      seats: 2,
    },
    datetime: '2024-02-23T19:00:00-05:00'
  },]
}