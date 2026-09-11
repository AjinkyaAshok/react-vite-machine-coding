import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React from "react";

export default function TransferList() {
  
const list = ["React", "Next", "Tailwind", "Performance", "Core Web Vitals"];
  
  return (
    <div className="flex h-screen justify-center items-center mx-auto">
      TransferList
      <div className="flex justify-evenly w-100 h-100 border-2">
        <div>
          <h1>Available</h1>
          <div className="border-2 w-30 h-60"></div>
        </div>
        <button>
          <ArrowBigRight />
        </button>
        <button>
          <ArrowBigLeft />
        </button>
        <div>
          <h1>Selected</h1>
          <div className="border-2 w-30 h-60"></div>
        </div>
      </div>
    </div>
  );
}
