"use client";

import Pet, { IPet } from "@/models/Pet";
import { formatNumber } from "@/Utils/formatNumber";
import { useEffect, useState } from "react";

interface SummaryProps {
    pets: IPet[];
}

type SummaryDataType = {
  [key: string]: {
    label: string;
    digit: number;
  };
};

const Summary: React.FC<SummaryProps> = ({ pets }) => {
  const [summaryData, setSummaryData] = useState<SummaryDataType>({
    pets: {
      label: "Total Pets",
      digit: 0,
    },
  });

  useEffect(() => {
    setSummaryData((prev) => {
      let tempData = { ...prev };
      tempData.pets.digit = pets.length;
      return tempData;
    });
  }, [pets]);

  const summaryKeys = Object.keys(summaryData)

  return (
    <div className="max-w-[1150px] m-auto text-gray-900">
      <div className="mb-4 mt-8">
        <h1 className="flex text-center text-xl">Stats</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
      {
            summaryKeys && summaryKeys.map((key) => {
                return <div key={key} className="rounded-xl border-2 border-orange-300  p-4 flex flex-col items-center mb-2 gap-2 transition">
                    <div className="text-xl md:text-4xl font-bold">
                        {
                            summaryData[key].label === 'Total Pets Created' ? <></> : <>{formatNumber(summaryData[key].digit)}</>
                        }

                    </div>

                    <div>{summaryData[key].label}</div>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default Summary;
