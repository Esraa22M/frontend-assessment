import React, { useState } from "react";
import { X } from "lucide-react";

const initialEmails = [
  "ahmed@example.com",
  "mona@example.com",
  "ali@example.com",
];

export default function EmailList() {
  const [emails, setEmails] = useState(initialEmails);

  const removeEmail = (indexToRemove) => {
    setEmails(emails.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-wrap gap-[8px]">
      {emails.map((email, index) => (
        <div
          key={index}
          className="flex items-center gap-[8px] w-max p-[8px] rounded-[20px] border border-[#B8BFCC] px-[12px] py-[4px] bg-white text-sm font-Rubik font-normal text-[#7A8699] bg-red-500"
        >
          <p className="m-0 inline-flex">{email}</p>
          <button
            onClick={() => removeEmail(index)}
            className=" inline-flex items-center justify-center cursor-pointer "
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
