import { useState } from "react";

function CalendarComponent({ todos }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const emptyDates = Array.from({ length: firstDay });
  const dates = Array.from({ length: lastDate }, (_, index) => index + 1);

  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (date) => {
    return (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      date === today.getDate()
    );
  };

  const hasTodo = (date) => {
    const calendarDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      date
    ).padStart(2, "0")}`;

    return todos.some((todo) => todo.date === calendarDate);
  };

  return (
    <div className="bg-sky-50 rounded-2xl p-4 w-full h-full">
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={handlePrevMonth}
          className="text-sky-500 font-bold hover:text-sky-700"
        >
          ◀
        </button>

        <div className="font-bold text-sky-600">
          {year}년 {month + 1}월
        </div>

        <button
          onClick={handleNextMonth}
          className="text-sky-500 font-bold hover:text-sky-700"
        >
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {emptyDates.map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {dates.map((date) => (
          <button
            key={date}
            className={`h-7 rounded-full text-xs flex flex-col items-center justify-center ${
              isToday(date)
                ? "bg-sky-500 text-white font-bold shadow-md"
                : "text-slate-600 hover:bg-sky-100"
            }`}
          >
            <span>{date}</span>

            {hasTodo(date) && (
              <span
                className={`w-1 h-1 rounded-full mt-0.5 ${
                  isToday(date) ? "bg-white" : "bg-sky-500"
                }`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarComponent;