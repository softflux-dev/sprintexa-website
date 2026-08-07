import { Api, requestType } from "@/api/axios";
import {ENDPOINTS} from "@/api/endpoint";
/**
 * Submits a demo request to the backend.
 *
 * The request goes through the same-origin `/api/contact` route handler,
 * which proxies to the real backend server-side. This avoids browser CORS
 * entirely. The UI never references external API paths directly.
 *
 * @param {{
 *   fullName: string,
 *   workEmail: string,
 *   companyName: string,
 *   companySize: string,
 *   phoneNumber: string,
 *   message: string,
 * }} payload - Form values matching the backend contract.
 * @returns {Promise<*>} The resolved response body.
 */
export async function requestBookDemo(payload) {
  const { data } = await Api.request({
    method: requestType.POST,
    url: ENDPOINTS.contact.contactForm,
    data: payload,
  });
  return data;
}
