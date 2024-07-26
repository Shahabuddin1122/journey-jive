
import Image from "next/image";
import Dropdown from "@/components/DropDown";
import Button from "@/components/Button";
import Header from "@/components/header";
import Header2 from "@/components/header2";
import {useSession} from "next-auth/react";

const LandingHeader = () => {

  return (
      <>
          <div className={"min-w-[820px]"}>
              <div className={"w-full h-[600px] relative flex"}>
                  <div className={"w-[57%] h-full flex justify-center items-center"}>
                      <div className={"w-4/5 h-4/5 mt-[10%] flex flex-col justify-between"}>
                          <div className={""}>
                              <h1 className={"text-5xl font-bold tracking-wider"}>The world&apos;s largest chain of
                                  hotels
                                  is
                                  Best Western</h1>
                              <p className={"text-sm py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Volutpat
                                  elit sed pretium, egestas sed sit orem ipsum dolor sit amet, lorem ghata udbjcbd hjdcj
                                  dkjhr nxn orem jxbi kxe</p>
                          </div>
                          <div className={"w-full relative flex justify-between"}>
                              <div className={"flex gap-1 items-center"}>
                                  <Image src={"/amazon.svg"} alt={"Amazon"} width={30} height={30}/>
                                  <p className={"text-lg text-slate-400"}>Amazon</p>
                              </div>
                              <div className={"flex gap-1 items-center"}>
                                  <Image src={"/pix.svg"} alt={"Pix"} width={30} height={30}/>
                                  <p className={"text-lg text-slate-400"}>Pix</p>
                              </div>
                              <div className={"flex gap-1 items-center"}>
                                  <Image src={"/compact.svg"} alt={"compact"} width={30} height={30}/>
                                  <p className={"text-lg text-slate-400"}>Compact</p>
                              </div>
                              <div className={"flex gap-1 items-center"}>
                                  <Image src={"/shape.svg"} alt={"shape"} width={30} height={30}/>
                                  <p className={"text-lg text-slate-400"}>Shape</p>
                              </div>

                          </div>
                      </div>

                  </div>
                  <div className={"w-[43%] h-full bg-slate-100 absolute right-0"}>
                      <Image src={"/hotel.jpg"} alt={"home"} fill objectFit={"cover"}/>
                  </div>
              </div>
              <div className={" md:w-[60%] lg:w-[55%] h-15 bg-white rounded-lg absolute md:top-[55%] left-[6%]"}>
                  <div className={"px-2.5 flex justify-between items-center"}>
                      <Dropdown text={"Guest"}/>
                      <Dropdown text={"Data"}/>
                      <Dropdown text={"Room type"}/>
                      <Button route={'/checkout'} text={"Booking Room"}/>
                  </div>
              </div>
              <Header clickedItem={0}/>
          </div>
      </>
  );
}
export default LandingHeader;