import React, { useRef, useState } from "react";

export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const handleChange = (value, index) => {
    setOtp((prev) => {
      const newOtp = [...prev];
      newOtp[index] = value;
      console.log(newOtp);
      return newOtp;
    });
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index>0) {
        inputRefs.current[index-1]?.focus()
    }
  };
  return (
    <div className="mx-auto  flex h-screen justify-center items-center">
      OTP
      {otp.map((value, index) => (
        <input
          onChange={(e) => handleChange(e.target.value, index)}
          type="text"
          ref={(el) => (inputRefs.current[index] = el)}
          required={true}
          key={index}
          value={value}
          maxLength={1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputMode="numeric"
          className="flex m-2 bg-amber-200 w-10 h-10 text-center text-lg rounded-md"
        />
      ))}
    </div>
  );
}

