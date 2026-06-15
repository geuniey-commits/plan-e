function CalendarComponent() {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="bg-sky-50 rounded-2xl p-4 w-full h-full">
      <div className="text-center font-bold text-sky-600 mb-3">
        2026년 6월
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {dates.map((date) => (
          <button
            key={date}
            className={`h-7 rounded-full text-xs ${
              date === 15
                ? "bg-sky-500 text-white"
                : "text-slate-600 hover:bg-sky-100"
            }`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarComponent;