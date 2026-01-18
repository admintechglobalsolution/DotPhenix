// src/lib/phone.ts

import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";

/**
 * Validates phone number using ISO country code
 * Example: countryCode = "IN"
 */
export function isValidPhoneNumber(
  phone: string,
  countryCode: CountryCode,
): boolean {
  try {
    const parsed = parsePhoneNumberFromString(phone, countryCode);
    return parsed?.isValid() ?? false;
  } catch {
    return false;
  }
}

/**
 * Formats phone number to E.164 standard
 */
export function formatToE164(
  phone: string,
  countryCode: CountryCode,
): string | null {
  try {
    const parsed = parsePhoneNumberFromString(phone, countryCode);
    return parsed?.isValid() ? parsed.format("E.164") : null;
  } catch {
    return null;
  }
}
