import { BASE_URL } from "@/config/apiconfig";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { params, headers, ...rest } = options;
  const url = new URL(`${BASE_URL}${endpoint}`, typeof window !== "undefined" ? window.location.origin : "http://localhost:3000");

  if (params) {
    Object.entries(params).forEach(([key, val]) => {
      url.searchParams.set(key, val);
    });
  }

  const res = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...rest,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new ApiError(
      data.error ?? "An unexpected API error occurred",
      res.status,
      data.code
    );
  }

  return data as T;
}
