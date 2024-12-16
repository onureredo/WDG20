import { useEffect, useState } from 'react';

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(90);

  //   const burnCandle = () => setCandleHeight((prev) => prev - 1);

  //   useEffect(() => {
  //     setInterval(() => setCandleHeight((prev) => prev - 1), 2000);
  //   }, []);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setCandleHeight((prev) => {
          if (prev === 10) return 90;
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(timer);
  });

  return (
    <>
      {/* LEVEL 1 */}
      {/* <button onClick={burnCandle}>Make candle smaller</button> */}
      <div className='exercise'>
        <div className='candleContainer'>
          {/* STYLE*/}
          <div className='candle' style={{ height: `${candleHeight}%` }}>
            <div className='flame'>
              <div className='shadows' />
              <div className='top' />
              <div className='middle' />
              <div className='bottom' />
            </div>
            <div className='wick' />
            <div className='wax' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Candle;
