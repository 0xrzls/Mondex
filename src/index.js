import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Tambahkan konfigurasi Sentry
Sentry.init({
  dsn: "https://863ae7a99882734dcd42c21ae8685965@o4508942997979136.ingest.de.sentry.io/4508943006957648",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Sesuaikan jika perlu
});

ReactDOM.render(<App />, document.getElementById("root"));
