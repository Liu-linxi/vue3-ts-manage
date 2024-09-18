import dayjs from "dayjs";

export function timeFormat(time: string | number, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(format);
}
