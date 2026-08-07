"use client";

import { useCallback, useState } from "react";

import { requestBookDemo } from "@/api/service/contact";

/**
 * Encapsulates the "book a demo" submission flow.
 *
 * Handles the submitting flag and surfaces the request result so the UI can
 * react to success or failure without knowing the API details.
 *
 * @returns {{
 *   isSubmitting: boolean,
 *   submit: (payload: object) => Promise<
 *     { ok: true, data: unknown } | { ok: false, error: unknown }
 *   >,
 * }}
 */
export function useBookDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = useCallback(async (payload) => {
    setIsSubmitting(true);
    try {
      const data = await requestBookDemo(payload);
      return { ok: true, data };
    } catch (error) {
      return { ok: false, error };
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { isSubmitting, submit };
}
