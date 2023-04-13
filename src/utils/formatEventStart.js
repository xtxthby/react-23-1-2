import { format } from 'date-fns';

export const formatEventStart = start => { 
    //  вказуємо формат в якому хочемо вивести дату , це з сайта date-fns
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};