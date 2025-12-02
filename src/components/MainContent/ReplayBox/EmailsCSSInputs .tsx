import React, { useState } from "react";
import type { KeyboardEvent } from "react";
import { X, Expand } from "lucide-react";

export default function EmailCCInput() {
  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addEmail = (email: string) => {
    const trimmed = email.trim();
    if (trimmed !== "" && !emails.includes(trimmed)) {
      setEmails([...emails, trimmed]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addEmail(inputValue);
      setInputValue("");
    }
  };

  const removeEmail = (email: string) => {
    setEmails(emails.filter((e) => e !== email));
  };

  return (
    <div className="flex items-center gap-3 w-full border-b border-gray-200 pb-3">

      {/* Zoom Button */}
      <button className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-50">
        <Expand className="w-4 h-4 text-gray-600" />
      </button>

      {/* CC Button */}
      <button className="px-3 py-1 bg-emerald-400 text-white rounded-md text-sm font-medium">
        CC
      </button>

      {/* Input area */}
      <div className="flex-1 flex flex-wrap items-center gap-2 border rounded-lg px-3 py-2 bg-white shadow-sm">

        {emails.map((email, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-gray-100  text-sm border border-gray-200"
          >
            {email}
            <button onClick={() => removeEmail(email)}>
              <X className="w-3 h-3 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
        ))}

        <input
          type="text"
          placeholder="ادخل الاسم"
          className="flex-1 min-w-[120px] outline-none bg-transparent text-sm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
