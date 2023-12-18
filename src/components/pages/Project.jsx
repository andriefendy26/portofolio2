import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import ProjectPyqt from "../img/PythonProject.png";
import Ecommerce from "../img/Ecommerce.png";
import Monitoring from "../img/Monitoring.jpg";
import LogikaFuzzy from "../img/LogikaFuzzy.png";
import { useContext, useEffect, useState } from "react";
import { LightMode } from "../../Context/lightMode";

export default function ProjectPage() {
  const {isLight} = useContext(LightMode)

  const slides = [
    {
      img: ProjectPyqt,
      title: "Aplikasi Kasir Menggunakan PYQT5",
      desc: "aplikasi  kasir sederhana ini dirancang menggunakan Python dengan fungsi CRUD dan PyQT5 untuk Design Antarmuka",
    },
    {
      img: Ecommerce,
      title: "Web Ecommerce (ShoopePedia)",
      desc: "Web Prototype Ecommerce ini Menerapkan beberapa fungsi seperti Menggunakan API untuk menampilkan halaman detail produk yang dinamis dengan informasi terperinci dan gambar produk",
    },
    {
      img: Monitoring,
      title: "Monitoring Sensor Arduino",
      desc: "Monitoring Sensor Arduino Ini membaca sensor secara real time dan berfungsi memudahkan pengguna untuk memonitoring kelembapan tanah dan suhu di sekitar tanaman",
    },
    {
      img: LogikaFuzzy,
      title: "Web Perhitungan BMI menggunakan Logika Fuzzy",
      desc: "Web Perhitungan BMi sudah menggunakan logika fuzzy sehingga hasil yang di keluarkan lebih akurat",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Update slidesPerView based on window width
      if (window.innerWidth >= 1200) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 1200 && window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1)
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center w-[100%] h-[530px] overflow-hidden">
        <h1 data-aos="fade-down" className="text-4xl tracking-[5px] font-bold">Recent Project</h1>
        <div data-aos="fade-up">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper  px-16"
          >
            {slides.map((m, i) => (
              <SwiperSlide key={i} className="flex items-center p-10">
                <div className=" border h-[450px] w-full rounded-xl overflow-hidden">
                  <div className=" h-[250px] overflow-hidden bg-cover">
                    <img className="w-full h-full object-cover" src={m.img} alt="bg" />
                  </div>
                  <div className="py-2 px-5">
                    <h1 className="mb-5 text-xl font-semibold">{m.title}</h1>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx>
            {`
              .swiper-button-next,
              .swiper-button-prev {
                color: ${isLight ? 'black' : 'white'};
                font-size: 20px;
              }

              .swiper-button-next {
                right: 10px;
              }

              .swiper-button-prev {
                left: 10px;
              }

              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                color: #b1b1b1;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
}
