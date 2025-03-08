// src/sentry.js
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://863ae7a99882734dcd42c21ae8685965@o4508942997979136.ingest.de.sentry.io/4508943006957648", // Ganti dengan DSN Anda
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Sesuaikan sesuai kebutuhan
});
