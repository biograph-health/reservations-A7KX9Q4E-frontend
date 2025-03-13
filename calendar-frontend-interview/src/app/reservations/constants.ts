import { DateTime } from "luxon"

/*
* The discrete timeslots that a user can
* book from. 
*/
export const BOOKABLE_TIMESLOTS: DateTime[] = [
    DateTime.fromObject(
        { hour: 17, minute: 30 },
        { zone: 'America/New_York' }
    ),
    DateTime.fromObject(
        { hour: 19, minute: 0 },
        { zone: 'America/New_York' }
    ),
    DateTime.fromObject(
        { hour: 20, minute: 30 },
        { zone: 'America/New_York' }
    ),
]