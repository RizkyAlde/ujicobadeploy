import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Widget = ({ title, imgSrc, value, bgColor }) => (
  <div
    className={`flex-1 rounded-2xl p-2 shadow mx-2`}
    style={{ backgroundColor: bgColor }}
  >
    <p className="text-center text-black font-bold mb-2">{title}</p>
    <img
      src={imgSrc}
      alt={`icon ${title}`}
      width="50px"
      height="50px"
      className="mx-auto mb-2"
    />
    <p className="text-center text-black font-bold mb-2">{value}</p>
  </div>
);

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <div className="flex-2 bg-white shadow flex justify-between rounded-tl-2xl rounded-tr-2xl mt-10 md:px-3 mx-4">
        <p
          className="font-bold text-2xl pl-3 pt-2"
          style={{ color: "#336600" }}
        >
          AVERAGE
        </p>
      </div>
      <div className="flex-2 bg-white p-4 shadow flex justify-between md:px-3 md:py-3 mx-4">
        <Widget
          title="Suhu"
          imgSrc="/img/temperature.png"
          value="30 C"
          bgColor="#FFA62F"
        />
        <Widget
          title="Kelembapan Udara"
          imgSrc="/img/humidity (2).png"
          value="40.2%"
          bgColor="#AED260"
        />
        <Widget
          title="Intensitas Cahaya"
          imgSrc="/img/sunlight (1).png"
          value="881lux"
          bgColor="#FFA62F"
        />
        <Widget
          title="Kelembapan Tanah"
          imgSrc="/img/watering.png"
          value="60.8%"
          bgColor="#AED260"
        />
        <Widget
          title="pH Tanah"
          imgSrc="/img/ph-meter.png"
          value="7 pH"
          bgColor="#FFA62F"
        />
      </div>
      <div
        className="rounded-bl-2xl rounded-br-2xl mb-5 md:px-3 md:pb-3 mx-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="mb-2">
          <p className="text-black font-bold">KETERANGAN:</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2"
              style={{ backgroundColor: "#AED260" }}
            ></div>
            <p className="text-black font-bold mr-5">Ideal</p>
          </div>
          <div className="flex items-center">
            <div
              className="rounded py-3 px-6 shadow mr-2 ml-2"
              style={{ backgroundColor: "#FFA62F" }}
            ></div>
            <p className="text-black font-bold">Tidak Ideal</p>
          </div>
        </div>
      </div>

      <div className="flex-2 bg-white shadow flex justify-between rounded-tl-2xl rounded-tr-2xl md:px-3 mx-4">
        <p
          className="font-bold text-2xl pl-3 pt-2"
          style={{ color: "#336600" }}
        >
          PERCENTAGE OF IDEAL
        </p>
      </div>
      <div className="flex-2 rounded-bl-2xl rounded-br-2xl bg-white p-4 shadow flex justify-between mb-5 md:px-3 md:py-3 mx-4">
        <Widget
          title="Suhu"
          imgSrc="/img/temperature.png"
          value="30%"
          bgColor="#FFA62F"
        />
        <Widget
          title="Kelembapan Udara"
          imgSrc="/img/humidity (2).png"
          value="40.2%"
          bgColor="#AED260"
        />
        <Widget
          title="Intensitas Cahaya"
          imgSrc="/img/sunlight (1).png"
          value="88.1%"
          bgColor="#FFA62F"
        />
        <Widget
          title="Kelembapan Tanah"
          imgSrc="/img/watering.png"
          value="60.8%"
          bgColor="#AED260"
        />
        <Widget
          title="pH Tanah"
          imgSrc="/img/ph-meter.png"
          value="70%"
          bgColor="#FFA62F"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:gap-2">
        <div className="px-6 py-4 bg-white w-[63%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mr-1 mt-1 mb-5 mx-4">
          <div className="flex flex-col h-[100%] px-8 py-4 bg-lime-300 rounded-lg shadow-lg">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold">
              GH Condition
            </div>
            <img
              loading="lazy"
              src="/img/table_suhu.png"
              alt="icon ph tanah"
              className="mt-3 w-full aspect-[1.45] mx-auto mb-2"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-white w-[37%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 ml-1 mt-1 mb-5 mx-4">
          <div className="flex flex-col h-[100%] px-2 py-4 bg-lime-300 rounded-lg shadow-lg">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold">
              Overall Condition
            </div>
            <img
              loading="lazy"
              src="/img/overall.png"
              alt="icon ph tanah"
              className="mt-3 w-full aspect-[0.91] mx-auto mb-2"
            />
          </div>
        </div>
      </div>
      <div className="text-sm leading-6 text-black flex justify-center mb-2">
        © 2024 Politeknik Elektronika Negeri Surabaya
      </div>
    </div>
  );
}
