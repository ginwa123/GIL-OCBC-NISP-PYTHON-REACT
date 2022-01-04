import React, { useEffect, useState } from "react";

interface Prop {
  pTimeZone: string;
  pIsShowTitle?: boolean;
}

export const Clock = (props: Prop) => {
  const [sDate, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const showDate = (): string =>
    sDate.toLocaleTimeString("en-US", { timeZone: props.pTimeZone });

  return (
    <>
      {props.pIsShowTitle && <hr /> && <h1>{props.pTimeZone}</h1>}
      <h2>{showDate()}</h2>
    </>
  );
};
