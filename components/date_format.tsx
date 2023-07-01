export function DaysAgo(date: string) {
  const currentDate = new Date();
  const desiredDate = new Date(date);

  currentDate.setHours(0, 0, 0, 0);
  desiredDate.setHours(0, 0, 0, 0);

  const timeDiff = Math.abs(currentDate.getTime() - desiredDate.getTime());
  
 
const daysAgo = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);

  

if (yearsAgo > 0) {
    return `${yearsAgo} ${yearsAgo === 1 ? "year" : "years"} ago.`;
  } else if (monthsAgo > 0) {
    return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago.`;
  } else if (weeksAgo > 0) {
    return `${weeksAgo} ${weeksAgo === 1 ? "week" : "weeks"} ago.`;
  } else {
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago.`;
  }
}

export function FormatDate(dateString: string) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
  return formattedDate;
}


