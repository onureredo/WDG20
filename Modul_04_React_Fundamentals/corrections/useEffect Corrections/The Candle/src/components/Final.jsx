import { useEffect, useState } from 'react';

const Final = () => {
  const [candleHeight, setCandleHeight] = useState(90);

  useEffect(() => {
    const timer = setInterval(() => setCandleHeight((prev) => prev - 1), 100); // 2000
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* FINAL LEVEL */}
      {/* <button onClick={() => setCandleHeight(90)}>Replace</button> */}
      {candleHeight < 10 && (
        <button onClick={() => setCandleHeight(90)}>Replace</button>
      )}
      <div className='exercise'>
        <div className='candleContainer'>
          {/* STYLE*/}
          {candleHeight > 10 && (
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
          )}
        </div>
      </div>
    </>
  );
};

export default Final;
