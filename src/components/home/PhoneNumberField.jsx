"use client";

import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const names = new Intl.DisplayNames(["en"], { type: "region" });
const countries = getCountries()
  .map((code) => ({ code, name: names.of(code), dial: getCountryCallingCode(code) }))
  .sort((a, b) => a.name.localeCompare(b.name));

export function PhoneNumberField({ country, onCountryChange, value, onChange, className }) {
  return (
    <div className="flex gap-2">
      <Select value={country} onValueChange={onCountryChange}>
        <SelectTrigger aria-label="Phone country code" className={`${className} w-[120px] shrink-0`}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {countries.map(({ code, name, dial: callingCode }) => (
            <SelectItem key={code} value={code}>{name} (+{callingCode})</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        aria-label="Phone number"
        placeholder="300 1234567"
        className={className}
        value={value}
        onChange={(event) => {
          const digits = event.target.value.replace(/\D/g, "");
          onChange(digits);
        }}
      />
    </div>
  );
}
