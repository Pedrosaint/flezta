"use client";

import { useState } from "react";
import Flag from "react-world-flags";
import countries from "world-countries";


const countryList = countries
  .filter((c) => c.idd?.root && c.idd?.suffixes?.length)
  .map((c) => ({
    name: c.name.common,
    iso: c.cca2, // GB, NG, US
    dialCode: `${c.idd.root}${c.idd.suffixes[0]}`, // +44, +234
  }));


const PhoneInput = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    countryList.find((c) => c.iso === "GB") || countryList[0]
  );
  

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium mb-2">Phone number</label>

      <div className="flex items-center h-13 border border-gray-300 rounded-2xl px-4 gap-3">
        {/* Flag selector */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex items-center gap-2"
        >
          <Flag code={selected.iso} className="w-6 h-4 rounded-sm" />
          <span className="text-gray-500 text-sm">▾</span>
        </button>

        {/* Hidden dial code (sent to backend) */}
        <input type="hidden" name="countryCode" value={selected.dialCode} />

        {/* Phone input */}
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          className="flex-1 h-full outline-none"
          maxLength={10}
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={(e) => {
            e.target.value = e.target.value.replace(/\D/g, "");
          }}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-64 overflow-y-auto">
          {countryList.map((country) => (
            <button
              key={country.iso}
              type="button"
              onClick={() => {
                setSelected(country);
                setOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 w-full hover:bg-gray-100"
            >
              <Flag code={country.iso} className="w-6 h-4" />
              <span className="text-sm">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
