import Image from 'next/image';
import * as React from 'react';

function Pompa() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#ECEAE2" }}
    >
      <div className="self-center my-auto text-xl leading-5 text-black font-bold mt-10">
        STATUS POMPA 12 GREEN HOUSE
      </div>

      <div className="px-6 py-4 bg-white rounded-lg shadow-[0px_8px_24px_rgba(69,69,80,0.1)] md:px-3 md:py-3 mt-4 mb-5 mx-4">
        <div className="flex flex-col gap-3 md:flex-row md:gap-3">
          <div className="flex flex-col w-full md:w-3/12 mr-2">
            <div className="flex flex-col grow px-5 pt-4 w-full font-bold bg-gray-200 rounded-md">
              <Image
                src="/path/to/your/image.jpg" // Ganti dengan path gambar Anda
                alt="Deskripsi gambar"
                layout="responsive"
                width={500} // Lebar gambar
                height={300} // Tinggi gambar
              />
              <p>Informasi tambahan jika diperlukan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pompa;
