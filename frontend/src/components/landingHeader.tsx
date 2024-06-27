import Image from "next/image";
import Dropdown from "@/components/DropDown";
import Button from "@/components/Button";
import Header from "@/components/header";

const landingHeader = () => {
  return (
      <>
          <div className={""}>
              <div className={"w-full h-[600px] absolute flex"}>
                  <div className={"w-[57%] h-full flex justify-center items-center"}>
                      <div className={"w-4/5 h-3/5"}>
                          <h1 className={"text-5xl font-bold tracking-wider"}>The world&apos;s largest chain of hotels
                              is
                              Best Western</h1>
                          <p className={"text-sm py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Volutpat
                              elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
                      </div>
                  </div>
                  <div className={"w-[43%] h-full bg-slate-100 absolute right-0"}>
                      <Image src={"/hotel.jpg"} alt={"home"} fill objectFit={"cover"}/>
                  </div>
              </div>
              <div className={"w-[60%] h-15 bg-white rounded-lg absolute top-[420px] left-[6%]"}>
                  <div className={"flex justify-between items-center"}>
                      <Dropdown text={"Guest"}/>
                      <Dropdown text={"Data"}/>
                      <Dropdown text={"Room type"}/>
                      <Button text={"Booking Room"}/>
                  </div>
              </div>
              <Header/>
          </div>
      </>
  );
}
export default landingHeader;