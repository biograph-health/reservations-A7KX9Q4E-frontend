import { Table } from "../types";

export default async function getAllTables(): Promise<Table[]> {
    return Promise.resolve([
        {
            id: 't1',
            seats: 2
        },
        {
            id: 't2',
            seats: 3
        },
        {
            id: 't3',
            seats: 4
        },
        {
            id: 't4',
            seats: 4
        }
    ])
}