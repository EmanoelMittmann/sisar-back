import { BUSINESS_TIMETABLE } from "../contants/business-timetable";


export function isBetweenTimeTable(date: Date) {
  const is_business_day = date.getTime() >= BUSINESS_TIMETABLE.start.getTime() && date.getTime() <= BUSINESS_TIMETABLE.end.getTime();
  return is_business_day;
}