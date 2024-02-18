import { ReadyState } from "react-use-websocket";
import React, { useState, useCallback } from "react";

function Controls({ mode, sendJsonMessage, readyState }) {
  const [status, setStatus] = useState(false);

  const toggle = useCallback(() => {
    const data = {
      mode,
      status: !status ? "on" : "off",
    };
    sendJsonMessage(data);
    setStatus(!status);
  }, [status, sendJsonMessage, mode]);

  const title = (mode) => {
    switch (mode) {
      case "ignite":
        return "Ignition";
      case "eject":
        return "Ejection";
      case "reset":
        return "Reset";

      default:
        break;
    }
  };

  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent"
      onClick={toggle}
      disabled={readyState !== ReadyState.OPEN}
    >
      {status ? `Stop ${title(mode)}` : `Start ${title(mode)}`}
    </button>
  );
}

function Reset({ mode, sendJsonMessage, readyState }) {
  const reset = useCallback(() => {
    const data = {
      mode,
      status: "on",
    };
    sendJsonMessage(data);
  }, [sendJsonMessage, mode]);

  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent"
      onClick={reset}
      disabled={readyState !== ReadyState.OPEN}
    >
      Reset
    </button>
  );
}

export { Controls, Reset };
