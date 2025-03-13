"use server"

import { getAllAvailableDates, getAvailableTimes } from "@/lib/api/availability";
import getAllTables from "@/lib/api/tables";

export default async function ReservationsPage() {
  const availableDates = await getAllAvailableDates({
    startDate: "2024-02-11",
    endDate: "2024-02-17",
    seats: 2,
  })
  const availableTimes = await getAvailableTimes ({
    date: "2024-02-23",
    seats: 2,
  })
  const tables = await getAllTables()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Reservations</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Dates</h2>
        <div className="grid grid-cols-3 gap-4">
          {availableDates.map((date) => (
            <div key={date} className="p-3 border rounded">
              {new Date(date).toLocaleDateString()}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Available Times</h2>
        <div className="grid grid-cols-4 gap-4">
          {availableTimes.map((time) => (
            <div key={time.datetime} className="p-3 border rounded">
              <p>Table: {time.table.id}</p>
              <p>Seats: {time.table.seats}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Tables</h2>
        <div className="grid grid-cols-2 gap-4">
          {tables.map((table) => (
            <div key={table.id} className="p-4 border rounded">
              <h3 className="font-medium">Table {table.id}</h3>
              <p>Seats: {table.seats}</p>
              <p>id: {table.id}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}