export const formatDate = (date: string): string => {
  const dateFormatted = new Intl.DateTimeFormat("en-US").format(new Date(date));

  return dateFormatted;
};
