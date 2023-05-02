import { format, parseISO } from "date-fns";

const formatRangeDateAndHour = (beginDateTime: any, endDateTime: any) => {
  const beginDate = parseISO(beginDateTime);
  const endDate = parseISO(endDateTime);

  const timeInMilisec = endDate.getTime() - beginDate.getTime();
  const distanceBetweenDays = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));

  const formattedSingleDateHour = format(beginDate, "dd/MM/yyyy | HH:mm");
  const formattedRangeDateHour = `${format(beginDate, "dd/MM/yyyy | HH:mm")} - ${format(endDate, "HH:mm")}`;

  return distanceBetweenDays > 0 ? formattedSingleDateHour : formattedRangeDateHour;
};

export default formatRangeDateAndHour;
