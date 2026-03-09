import { EthDateTime } from 'ethiopian-calendar-date-converter';
import { format } from 'date-fns';

const dateTimeConverter = (timestamp:Date)=>{
    try {
      // 1. Create a JavaScript Date object from the ISO string
      const dateInput = format(new Date(timestamp), 'yyyy-MM-dd HH:mm:ss');

      const dateObj = new Date(dateInput);


      // 2. Convert the European/Gregorian date to Ethiopian date using the library
      const ethDateTime = EthDateTime.fromEuropeanDate(dateObj)

      // 3. Format the Ethiopian date and time as a string
      // Note: The library handles the calendar conversion, you can format the output as needed.
      // The EthDateTime object has properties like year, month, day, hour, minute, second in the Ethiopian calendar.
      const formattedDate = `${ethDateTime.year}-${ethDateTime.month.toString().padStart(2, '0')}-${ethDateTime.getDay.toString().padStart(2, '0')}`;
      const formattedTime = `${ethDateTime.hour.toString().padStart(2, '0')}:${ethDateTime.minute.toString().padStart(2, '0')}:${ethDateTime.second.toString().padStart(2, '0')}`;
      const formatedDateTime = ethDateTime;
      return formatedDateTime;
    } catch (error) {
      console.error("Error converting date:", error);
      return "erre ";
    }
}

export default dateTimeConverter;