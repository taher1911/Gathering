"use client";
import { useState } from "react";

import Init_Data from "../public/init_data";
import Data from "../public/data";
// import axios from "axios";

export default function Home() {
  const [data, setData] = useState(Init_Data);
  const [finalData, setFinalData] = useState(Data);

  const formattingHandler = () => {
    const myData = Init_Data.map((el) => {
      return {
        Address: el.attributes.EZI_Address,
        Day: el.attributes.FOGO_Rate_Code == null ? "null" : el.attributes.Day,
      };
    });
    // setFinalData((prev: any) => [...prev, ...myData]);
    // setData(myData);
  };
  // console.log(data);
  // console.log(finalData);

  const fetchHandler = async () => {
    const res = await fetch(
      "https://merri-bek.vic.gov.au/gis/AddressDetails.svc/fourbins/?xPoint=321300.65768899734&yPoint=5824000.948095851&wasteDay=Friday&wasteRateCode=101&recycleRateCode=142&fogoRateCode=142&glassRateCode=170&zone=B&glassWeekNumber=1&address=1B+UNDERA+COURT+FAWKNER+3060&cpage=87999",
      {
        
        mode: "no-cors", // no-cors, *cors, same-origin
      }
    );
    const data = await res.json();

    console.log(data);

    // const data = JSON.stringify(res);
    // console.log(data);
  };
  return (
    <main>
      <h1 className="text-center"> Welcome to my app</h1>
      <button onClick={formattingHandler}>convert</button>
      <div>
        <button onClick={fetchHandler}>fetch data</button>
      </div>
    </main>
  );
}
