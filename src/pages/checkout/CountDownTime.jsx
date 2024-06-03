import { useState, useEffect, useRef } from "react";
import { intervalToDuration, addHours, addMinutes, addDays } from "date-fns";
import format from "date-fns/format";

function CountDownTime({ date, hours, minute }) {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const day = format(addDays(today, 1), "cccc, dd MM yyyy p");

  console.log(day);

  const hourRef = useRef("");
  const minutesRef = useRef("");
  const secondRef = useRef("");

  const [isHour, setIsHour] = useState(false);

  useEffect(() => {
    let end = new Date();

    if (hours) {
      end = addHours(end, hours);
      setIsHour(true);
    }
    if (minute) {
      end = addMinutes(end, minute);
    }

    const timeInterval = setInterval(() => {
      const start = new Date();

      if (!hourRef.current || !minutesRef.current || !secondRef.current) {
        return;
      }
      const duration = intervalToDuration({ start, end });
      //   console.log(duration);

      if (duration.hours && duration.hours > 0) {
        hourRef.current.textContent = duration.hours?.toString();
      }
      if (duration.minutes && duration.minutes > 0) {
        minutesRef.current.textContent = duration.minutes?.toString();
      }
      if (duration.seconds && duration.seconds > 0) {
        secondRef.current.textContent = duration.seconds?.toString();
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <div className="countdown-timer">
      <span className={`${isHour && "time"}`} ref={hourRef}>
        {isHour ? "00" : ""}
      </span>{" "}
      <span className="time" ref={minutesRef}>
        00
      </span>{" "}
      <span className="time" ref={secondRef}>
        00
      </span>
    </div>
  );
}

export default CountDownTime;
