import React, { useEffect, useState } from 'react';

function Counting() {
  let [num0, countnum0] = useState(0);
  let [incre, setIncre] = useState(false);

  useEffect(() => {
    const val = setInterval(() => {
      countnum0((num0) => {
        if (num0 === 60) {
          clearInterval(val)
          return num0
        }
        return num0 + .5
      });
    }, 100);

    ;
  }, []);

  const decre = () => {
    if (num0 <= 0) {
      countnum0(65);
    } else if (incre === true) {
      countnum0(65);
    }
    countnum0((num0) => num0 - 5);
    setIncre(false);



  }
  return (
    <div className='container2'>
      <h2 className='setcounter'>{num0}</h2>
      
      <button onClick={decre} className="btn">
        Decrement Counter
      </button>
    </div>
  );
}
export default Counting;
