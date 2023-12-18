import { TypeAnimation } from "react-type-animation";

import gambr from "../img/gambar.png";

export default function Home() {

  const Bounce = ({ classes = "hidden" }) => {
    return (
      <div className={`w-[500px] ${classes} animate-bounce sm:static  xl:absolute top-[30%] text-primaryTextWhite`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4F4F4F"
            d="M42.8,-74.7C55.6,-66.8,66.1,-55.5,75.1,-42.5C84.1,-29.5,91.6,-14.8,92.7,0.6C93.7,16,88.4,31.9,79.6,45.5C70.9,59,58.9,70.1,45.1,77.9C31.2,85.7,15.6,90.3,-0.1,90.4C-15.8,90.6,-31.6,86.4,-45.5,78.6C-59.4,70.8,-71.3,59.4,-78.7,45.7C-86.1,32,-89,16,-87.9,0.7C-86.8,-14.7,-81.6,-29.4,-73.9,-42.6C-66.2,-55.9,-56.1,-67.7,-43.3,-75.6C-30.6,-83.5,-15.3,-87.6,-0.1,-87.4C15,-87.1,30,-82.6,42.8,-74.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="">
      <div className="flex lg:justify-around lg:h-[100vh] xl: sm:h-[120vh] h-[115vh] lg:flex-row items-center justify-center flex-col">
        <div className="font-Poppins left-[23%] top-[47%] z-0 sm:w-fit w-[80%] lg:mb-0 mb-5">
          <div data-aos="fade-right" className="flex xl:flex-col lg:flex-col sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-[15px] text-4xl sm:flex-row flex-col">
            <h1 className="sm:mr-4">ANDRI</h1>
            <h1>EFENDY</h1>
          </div>
          <div className="xl:text-2xl lg:text-xl">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Computer Engineering Student",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block", fontStyle: "bold", letterSpacing: "2px" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className=" z-10 w-[350px] border rounded-2xl xl:bottom-0 xl:w-[400px] lg:w-[340px] md:w-[350px] sm:w-[300px]">
          <Bounce classes="xl:w-[470px] lg:block lg:left-[60%] lg:w-[400px] lg:top-[30%] md:w-[300px] md:left-[34%] md:top-[40%] sm:absolute sm:-z-10 hidden "></Bounce>
          <img src={gambr} alt="me" />
        </div>
      </div>
    </div>
  );
}
