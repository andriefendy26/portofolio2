import { useContext, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import thanks from "../img/thanks.png"
import { LightMode } from "../../Context/lightMode";


export default function ContactPage() {
  const [state, handleSubmit] = useForm("xrgnzzgy");
  const { isLight } = useContext(LightMode);

  if (state.succeeded) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold tracking-[2px]">Terimakasi Telah Menghubungi</h1>
            <p className="text-5xl my-5">✔️</p>
            <img src={thanks} width={200} alt="" />
        </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-2xl font-semibold tracking-[4px]">CONTACT ME</h1>
      <form data-aos="fade-left" className="w-[50%] text-center mt-5" onSubmit={handleSubmit}>
          <input className={` ${isLight ? 'bg-primaryTextWhite' : 'bg-PrimaryBg'} w-full border rounded-lg  p-2`} placeholder="Name" name="name" id="full-name" type="text" />
          <ValidationError prefix="Name" field="full-name" errors={state.errors} />
          <input className={`${isLight ? 'bg-primaryTextWhite' : 'bg-PrimaryBg'} w-full my-5 border rounded-lg p-2`}  placeholder="Email" id="email" type="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea className={`${isLight ? 'bg-primaryTextWhite' : 'bg-PrimaryBg'} w-full border rounded-lg p-2 mb-5`} rows={10} placeholder="Massage" id="massage" name="massage" />
        <input className={` ${isLight ? 'bg-cyan hover:bg-cyan2 ring text-primaryTextWhite' : 'bg-primaryBgBtn hover:bg-primaryBtnHover'} w-full border rounded-lg border-primaryTextWhite p-2 hover:bg-primaryBtnHover cursor-pointer`} type="submit" disabled={state.submitting} />
      </form>
    </div>
  );
}
