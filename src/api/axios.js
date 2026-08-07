import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.sprintexa.com/api/";

const isDev = process.env.NODE_ENV === "development";

export const Api = axios.create({
  baseURL: BASE_URL,
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const devRequestLogger = (config) => {
  const method = (config.method ?? "GET").toUpperCase();
  console.groupCollapsed(
    `%c⬆ ${method}%c ${config.url}`,
    "color:#1072b7;font-weight:700;font-size:11px;background:#eef6fd;padding:2px 6px;border-radius:4px",
    "color:#374151;font-weight:600;font-size:11px",
  );
  console.log("%cFull URL   ", "color:#6b7280;font-size:10px", `${config.baseURL ?? BASE_URL}${config.url ?? ""}`);
  if (config.params && Object.keys(config.params).length) {
    console.log("%cParams     ", "color:#6b7280;font-size:10px", config.params);
  }
  if (config.data) {
    console.log("%cPayload    ", "color:#6b7280;font-size:10px", config.data);
  }
  console.log("%cTimestamp  ", "color:#6b7280;font-size:10px", new Date().toISOString());
  console.groupEnd();
};

const devResponseLogger = (response, duration) => {
  const status = response.status;
  console.groupCollapsed(
    `%c⬇ ${response.config.method?.toUpperCase()}%c ${response.config.url} %c${status}%c ${duration}ms`,
    "color:#059669;font-weight:700;font-size:11px;background:#ecfdf5;padding:2px 6px;border-radius:4px",
    "color:#374151;font-weight:600;font-size:11px",
    "color:#ffffff;background:#059669;font-size:10px;padding:1px 5px;border-radius:4px",
    "color:#6b7280;font-size:10px",
  );
  console.log("%cResponse   ", "color:#6b7280;font-size:10px", response.data);
  console.groupEnd();
};

const devErrorLogger = (error, duration) => {
  const method = (error.config?.method ?? "GET").toUpperCase();
  const status = error.response?.status;
  console.groupCollapsed(
    `%c⬇ ${method}%c ${error.config?.url} %c${status ?? "ERR"}%c ${duration}ms`,
    "color:#dc2626;font-weight:700;font-size:11px;background:#fef2f2;padding:2px 6px;border-radius:4px",
    "color:#374151;font-weight:600;font-size:11px",
    "color:#ffffff;background:#dc2626;font-size:10px;padding:1px 5px;border-radius:4px",
    "color:#6b7280;font-size:10px",
  );
  console.log("%cError      ", "color:#dc2626;font-size:10px", error.message);
  if (error.response?.data) {
    console.log("%cServer msg ", "color:#6b7280;font-size:10px", error.response.data);
  }
  console.groupEnd();
};

Api.interceptors.request.use(
  (config) => {
    if (isDev) {
      config.metadata = { startTime: Date.now() };
      devRequestLogger(config);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

Api.interceptors.response.use(
  (response) => {
    if (isDev) {
      const duration = Date.now() - (response.config.metadata?.startTime ?? Date.now());
      devResponseLogger(response, duration);
    }
    return response;
  },
  (error) => {
    if (isDev) {
      const duration = Date.now() - (error.config?.metadata?.startTime ?? Date.now());
      devErrorLogger(error, duration);
    }
    return Promise.reject(error);
  },
);

export const requestType = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};


