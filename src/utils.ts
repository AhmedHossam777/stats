export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year/month-1(as it's zero indexed)/day
};
