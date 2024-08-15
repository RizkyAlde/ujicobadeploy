import * as React from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { hour: "00:00", temperature: 25 },
  { hour: "01:00", temperature: 27 },
  // ... (rest of the data)
];

export default function MonitoringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ECEAE2]">
      {/* Header */}
      <div className="bg-white rounded-t-2xl p-4 shadow-md flex justify-between md:px-3 md:py-3 mt-10 mx-4">
        <select
          className="border border-green-200 rounded-xl p-2 cursor-pointer font-bold focus:outline-none focus:border-green-200 bg-[#AED260] text-black"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} className="bg-[#AED260] text-black">
              Green House {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Widgets */}
      <div className="bg-white p-4 shadow-md flex justify-between md:px-3 md:py-3 mx-4 mt-4">
        {[
          { title: "Suhu", icon: "/img/temperature.png", value: "30°C", color: "#FFA62F" },
          { title: "Kelembapan Udara", icon: "/img/humidity (2).png", value: "40.2%", color: "#AED260" },
          { title: "Intensitas Cahaya", icon: "/img/sunlight (1).png", value: "881lux", color: "#FFA62F" },
          { title: "Kelembapan Tanah", icon: "/img/watering.png", value: "60.8%", color: "#AED260" },
          { title: "pH Tanah", icon: "/img/ph-meter.png", value: "7 pH", color: "#FFA62F" },
        ].map((widget, idx) => (
          <div
            key={idx}
            className={`flex-1 rounded-2xl p-2 shadow mx-2 bg-[${widget.color}]`}
          >
            <p className="text-center text-black font-bold mb-2">{widget.title}</p>
            <Image
              src={widget.icon}
              alt={`icon ${widget.title.toLowerCase()}`}
              width={50}
              height={50}
              className="mx-auto mb-2"
            />
            <p className="text-center text-black font-bold mb-2">{widget.value}</p>
          </div>
        ))}
      </div>

      {/* Information */}
      <div className="bg-white rounded-b-2xl p-4 shadow-md mx-4 mt-4 mb-5">
        <p className="text-black font-bold mb-2">KETERANGAN:</p>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#AED260] mr-2"></div>
            <p className="text-black font-bold">Ideal</p>
          </div>
          <div className="flex items-center ml-5">
            <div className="w-8 h-8 rounded-full bg-[#FFA62F] mr-2"></div>
            <p className="text-black font-bold">Tidak Ideal</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="flex flex-col gap-3 md:flex-row md:gap-2 mb-5">
        <div className="px-6 py-4 bg-white w-full rounded-lg shadow-md mx-4">
          <div className="bg-lime-300 rounded-lg p-8 flex justify-center">
            <p className="text-xl font-bold text-black">LINE CHART TEMPERATURE</p>
          </div>
        </div>
      </div>

      {/* Pump Status and Scatter Plot */}
      <div className="flex gap-2 md:flex-row mb-5 mx-4">
        <div className="px-6 py-4 bg-white w-[30%] rounded-lg shadow-md">
          <div className="bg-lime-300 rounded-lg p-8 flex justify-center">
            <p className="text-xl font-bold text-black">STATUS POMPA</p>
          </div>
        </div>
        <div className="px-6 py-4 bg-white w-[70%] rounded-lg shadow-md">
          <div className="bg-lime-300 rounded-lg p-8 flex justify-center">
            <p className="text-xl font-bold text-black">SCATTER PLOT</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-black flex justify-center mb-2">
        © 2024 Politeknik Elektronika Negeri Surabaya
      </div>
    </div>
  );
}
