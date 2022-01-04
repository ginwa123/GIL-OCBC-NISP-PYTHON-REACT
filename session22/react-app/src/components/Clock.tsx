import { useEffect, useState } from "react";
import moment from "moment-timezone";
interface Props {
  pClockName?: string;
  pIsShowClockName?: boolean;
  pTimeZone: string;
  pFormatDateTime: string;
}

export const Clock = (props: Props) => {
  const [sDate, setDate] = useState<string>("");

  useEffect(() => {
    console.log("onCreate Clock Component");

    const timerId = setInterval(() => {
      fetch("http://127.0.0.1:5000/time")
        .then((response) => response.json())
        .then((json) => json.time)
        .then((time) =>
          setDate(
            moment(time).tz(props.pTimeZone).format(props.pFormatDateTime)
          )
        );
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clockName = (): string | undefined => {
    if (props.pIsShowClockName) return props.pClockName;
  };

  return (
    <>
      <span>
        {clockName()} {sDate}
      </span>
    </>
  );
};
