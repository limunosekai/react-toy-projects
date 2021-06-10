import React, { useEffect } from 'react';

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`grocery-alert grocery-alert-${type}`}>{msg}</p>;
}

export default Alert;
