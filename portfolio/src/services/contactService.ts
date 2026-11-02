import { apiClient } from "@/lib/apiClient";
import { ENDPOINTS } from "@/config/endpoint";

export interface ContactPayload {
  name: string;
  email: string;
  body: string;
  website?: string;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResponse> {
  return apiClient<ContactResponse>(ENDPOINTS.contact.send, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
