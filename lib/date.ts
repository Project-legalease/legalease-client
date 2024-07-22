
export class CustomDate {
  static formatDateWithSlash(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    return `${day}/${month}/${year}`;
  }

  static formatDateWithDash(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year

    return `${day}-${month}-${year}`;
  }

  static getCurrentDate(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // Get full month name
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }

  static getCurrentDayMonth(): string {
    const date = CustomDate.getCurrentDate().split(",")[0]

      return date;
  }

  static formatDateToDayMonthYear(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // Get full month name
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }
}