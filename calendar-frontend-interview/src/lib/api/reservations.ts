import { Reservation } from "../types";

export function getAllReservations(): Promise<Reservation[]> {
    return Promise.resolve([
        {
            id: 'r1',
            tableId: 't1',
            datetime: '2024-02-16T17:30:00-05:00',
            name: "jerry"
        },
        {
            id: 'r2',
            tableId: 't1',
            datetime: '2024-02-16T19:00:00-05:00',
            name: "elaine"
        },
        {
            id: 'r3',
            tableId: 't1',
            datetime: '2024-02-16T20:30:00-05:00',
            name: "george"
        },
        {
            id: 'r4',
            tableId: 't1',
            datetime: '2024-02-23T20:30:00-05:00',
            name: "kramer"
        }
    ]);
}

export function postNewReservation(
    {   
        tableId,
        datetime,
        name
    }: {
        tableId: string,
        datetime: string,
        name: string
    }
): Promise<Reservation> {
    return Promise.resolve({
        id: "r5",
        tableId,
        datetime,
        name
    })
}
