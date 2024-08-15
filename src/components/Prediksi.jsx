import React from "react";
import Image from "next/image"; // Pastikan Anda mengimpor Image dari next/image
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from "react-vis";

// Data
const dataSuhu = [
  { x: "00:00", y: 25 },
  { x: "01:00", y: 26 },
  { x: "02:00", y: 27 },
  { x: "03:00", y: 28 },
  { x: "04:00", y: 29 },
  { x: "05:00", y: 30 },
  { x: "06:00", y: 31 },
  { x: "07:00", y: 32 },
  { x: "08:00", y: 33 },
  { x: "09:00", y: 34 },
  { x: "10:00", y: 35 },
  { x: "11:00", y: 36 },
  { x: "12:00", y: 37 },
  { x: "13:00", y: 38 },
  { x: "14:00", y: 39 },
  { x: "15:00", y: 38 },
  { x: "16:00", y: 37 },
  { x: "17:00", y: 36 },
  { x: "18:00", y: 35 },
  { x: "19:00", y: 34 },
  { x: "20:00", y: 33 },
  { x: "21:00", y: 32 },
  { x: "22:00", y: 31 },
  { x: "23:00", y: 30 },
];

const dataKelembapan = [
  { x: "00:00", y: 50 },
  { x: "01:00", y: 52 },
  { x: "02:00", y: 54 },
  { x: "03:00", y: 56 },
  { x: "04:00", y: 58 },
  { x: "05:00", y: 60 },
  { x: "06:00", y: 62 },
  { x: "07:00", y: 64 },
  { x: "08:00", y: 66 },
  { x: "09:00", y: 68 },
  { x: "10:00", y: 70 },
  { x: "11:00", y: 72 },
  { x: "12:00", y: 74 },
  { x: "13:00", y: 76 },
  { x: "14:00", y: 78 },
  { x: "15:00", y: 80 },
  { x: "16:00", y: 82 },
  { x: "17:00", y: 84 },
  { x: "18:00", y: 86 },
  { x: "19:00", y: 88 },
  { x: "20:00", y: 90 },
  { x: "21:00", y: 92 },
  { x: "22:00", y: 94 },
  { x: "23:00", y: 96 },
];

function PrediksiGrafik({ data, title }) {
  return (
    <div className="flex-1">
      <p className="text-center text-black font-bold mb-2">{title}</p>
      <XYPlot
        width={425}
        height={250}
        margin={{ bottom: 50 }}
        xType="ordinal"
        style={{ backgroundColor: "#AED260" }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="Waktu" />
        <YAxis title="Prediksi" />
        <LineSeries data={data} style={{ stroke: "blue" }} />
        <MarkSeries data={data} />
      </XYPlot>
    </div>
  );
}

function PrediksiPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#ECEAE2]"
    >
      <p className="text-black font-bold md:px-3 mt-5 md:py-3 mx-3">
        Prediksi Satu Hari Kedepan!
      </p>
      <div
        className="flex-2 rounded-tl-2xl rounded-tr-2xl p-4 shadow flex justify-between md:px-3 md:py-3 mt-1 mx-4 bg-white"
      >
        <select
          className="border border-green-200 rounded-xl p-2 pl-2 cursor-pointer focus:outline-none font-bold focus:border-green-200 bg-[#AED260] text-black"
        >
          {[...Array(12).keys()].map((i) => (
            <option key={i} className="bg-[#AED260] text-black">
              Green House {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div
        className="flex-2 bg-white p-4 shadow flex justify-between md:px-3 md:py-3 mx-4"
      >
        {/* Widget 1 */}
        <div
          className="flex-1 rounded-2xl p-2 shadow mr-2 bg-[#FFA62F]"
        >
          <p className="text-center text-black font-bold mb-2">Suhu</p>
          <Image
            src="/Image/temperature.png"
            alt="icon suhu"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">30 C</p>
        </div>
        {/* Widget 2 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2 bg-[#AED260]"
        >
          <p className="text-center text-black font-bold mb-2">Kelembapan Udara</p>
          <Image
            src="/Image/humidity (2).png"
            alt="icon kelembapan udara"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">40.2%</p>
        </div>
        {/* Widget 3 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2 bg-[#FFA62F]"
        >
          <p className="text-center text-black font-bold mb-2">Intensitas Cahaya</p>
          <Image
            src="/Image/sunlight (1).png"
            alt="icon intensitas cahaya"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">881lux</p>
        </div>
        {/* Widget 4 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow mx-2 bg-[#AED260]"
        >
          <p className="text-center text-black font-bold mb-2">Kelembapan Tanah</p>
          <Image
            src="/Image/watering.png"
            alt="icon kelembaban tanah"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">60.8%</p>
        </div>
        {/* Widget 5 */}
        <div
          className="flex-1 rounded-2xl p-1 shadow ml-2 bg-[#FFA62F]"
        >
          <p className="text-center text-black font-bold mb-2">pH Tanah</p>
          <Image
            src="/Image/ph-meter.png"
            alt="icon ph tanah"
            width={50}
            height={50}
            className="mx-auto mb-2"
          />
          <p className="text-center text-black font-bold mb-2">7 pH</p>
        </div>
      </div>
      <div
        className="rounded-bl-2xl rounded-br-2xl mb-4 md:px-3 md:py-3 mx-4 bg-white"
      >
        <div className="mb-2">
          <p className="text-black font-bold">KETERANGAN:</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2 bg-[#AED260]"
            ></div>
            <p className="text-black font-bold mr-5">Ideal</p>
          </div>
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2 ml-2 bg-[#FFA62F]"
            ></div>
            <p className="text-black font-bold">Tidak Ideal</p>
          </div>
        </div>
      </div>
      <p className="text-black font-bold md:px-3 md:py-3 mx-3">
        Prediksi Satu Hari Kedepan!
      </p>
      <div
        className="flex-1 rounded-2xl bg-white p-4 shadow mb-2 flex justify-between md:px-3 mb-5 md:py-3 mx-4"
      >
        <div
          className="flex-1 rounded-2xl bg-green-300 p-2 shadow mr-2 bg-[#AED260]"
        >
          {/* Grafik Prediksi Suhu */}
          <PrediksiGrafik data={dataSuhu} title="Grafik Prediksi Suhu" />
        </div>
        <div
          className="flex-1 rounded-2xl bg-green-300 p-2 shadow mr-2 bg-[#AED260]"
        >
          {/* Grafik Prediksi Kelembapan Udara */}
          <PrediksiGrafik
            data={dataKelembapan}
            title="Grafik Prediksi Kelembapan Udara"
          />
        </div>
      </div>
      <div className="text-sm leading-6 text-black flex justify-center mb-2">
        © 2024 Politeknik Elektronika Negeri Surabaya
      </div>
    </div>
  );
}

export default PrediksiPage;
