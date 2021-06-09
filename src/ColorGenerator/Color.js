import React, { useEffect, useState } from 'react';
// import rgbToHex from './util';

function Color({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');

  // rgb -> hex Util
  // const hexColor = rgbToHex(...rgb);

  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to Clipboard!</p>}
    </article>
  );
}

export default Color;
