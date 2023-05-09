import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");

export const formatDate = (date: Date, type?: "fancy" | "classic") => {
  if (!type || type === "fancy") {
    dayjs.extend(relativeTime);
    //@ts-ignore
    return dayjs(date).fromNow();
  }

  return `${date.getDate()}.${date
    .getMonth()
    .toLocaleString()}.${date.getFullYear()}`;
};
