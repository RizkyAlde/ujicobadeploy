import * as React from "react";

function Produksi() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <div class="px-6 py-4 bg-white rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-10 mb-5 mx-4">
        <div class="flex flex-col gap-3 md:flex-row md:gap-3">
          <div class="flex flex-col w-full md:w-6/12 mr-2">
            <div class="flex flex-col grow px-5 pt-4 pb-0 w-full font-bold bg-lime-300 rounded-lg shadow-lg aspect-[5/3]">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Rata-rata
                  <br />
                  Suhu
                </div>
                <div className="justify-center px-2 py-1 text-lg text-center text-yellow-500 bg-lime-800 rounded-lg">
                  34.6 °C
                </div>
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col grow px-5 pt-4 pb-20 w-full font-bold bg-lime-300 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div className="my-auto text-xl leading-5 text-black">
                  Rata-rata
                  <br />
                  Intensitas Cahaya
                </div>
                <div className="justify-center px-2 py-1 text-lg text-center text-yellow-500 bg-lime-800 rounded-lg">
                  117.5 lux
                </div>
              </div>
              <div className="shrink-0 h-0.5 mt-2 bg-lime-800 border-2 border-lime-800 border-solid" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-2 mb-4">
        <div
          className="flex-2 rounded-2xl shadow flex justify-between md:px-2 md:py-2 mt-2 mx-2"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <select
            style={{
              backgroundColor: "#AED260",
              color: "black",
              paddingRight: "0.5px",
            }}
            className="border border-green-200 rounded-xl p-2 pl-2 cursor-pointer focus:outline-none font-bold focus:border-green-200 "
          >
            <option
              className="focus:font-bold"
              style={{
                backgroundColor: "#AED260",
                color: "black",
              }}
            >
              Green House 1
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 2
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 3
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 4
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 5
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 6
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 7
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 8
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 9
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 10
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 11
            </option>
            <option style={{ backgroundColor: "#AED260", color: "black" }}>
              Green House 12
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:gap-2">
        <div className="px-6 py-4 bg-white w-[63%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mr-2 mt-1 mb-5 mx-4 mb-2">
          <div className="flex flex-col h-[100%]  px-8 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold">
              PREDIKSI JUMLAH PRODUKSI
            </div>
            <Image
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8c3000b412ab0f2b352b838ffa02d70ec58b5bf2a8f3953014a23b4b5e64b6?apiKey=56720a43f79840e1abfb6fc8af490491&"
              className="mt-6 w-full aspect-[1.45] max-md:max-w-full"
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-white w-[37%] rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 ml-2 mt-1 mb-5 mx-4 mb-2">
          <div className="flex flex-col h-full aspect-w-5 aspect-h-3 px-2 py-4 bg-lime-300 rounded-lg shadow-lg max-md:max-h-full max-md:max-w-full">
            <div className="self-center my-auto text-xl leading-5 text-black font-bold">
              PREDIKSI JUMLAH PRODUKSI
            </div>
            <Image
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01351868f4dcf0df931bb34ad729e6e938a55dba41d54f95b98f7a87b9dd1671?apiKey=56720a43f79840e1abfb6fc8af490491&"
              className="mt-6 w-full aspect-[0.91] max-md:max-w-full"
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

export default Produksi;
