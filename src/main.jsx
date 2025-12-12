import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";


if (typeof EventTarget !== "undefined") {
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  const originalRemoveEventListener = EventTarget.prototype.removeEventListener;

  EventTarget.prototype.addEventListener = function (type, listener, options) {
    const scrollBlockingEvents = [
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
      "touchend",
      "mousewheel",
    ];

    if (scrollBlockingEvents.includes(type)) {
      if (typeof options === "boolean") {
        options = { capture: options };
      } else if (typeof options !== "object" || options === null) {
        options = {};
      }
      options.passive = true;
    }

    return originalAddEventListener.call(this, type, listener, options);
  };

  EventTarget.prototype.removeEventListener = function (
    type,
    listener,
    options
  ) {
    return originalRemoveEventListener.call(this, type, listener, options);
  };
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
