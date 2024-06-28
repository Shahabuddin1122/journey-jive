import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Dropdown from "@/components/DropDown";
import LandingHeader from "@/components/landingHeader";
export default function Home() {
  return (
      <>
          <LandingHeader />
          <div className={"w-11/12 h-[600px] my-10 flex"}>
              <div className={"w-1/2 h-full bg-gray-200 relative"}>
                  <Image src={"/restaurant2.jpg"} alt={"restaurant"} fill objectFit={"cover"} />
              </div>
              <div className={"w-1/2 h-full flex justify-end items-center"}>
                  <div className={"w-4/5 h-4/5"}>
                      <h1 className={"text-3xl font-extrabold tracking-wide"}>Ordinary Best Western 5 Stars Hotel Since 1998</h1>
                      <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas fusce cras.   Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis </p>
                      <Button text={"Learn more"} />
                  </div>
              </div>
          </div>
          <div className={"w-full h-[200px] my-3 flex justify-center"}>
              <div className={"w-4/5 h-full flex justify-between"}>
                  <div className={"flex gap-2 flex-col justify-center items-center"}>
                      <Image src={"/day.svg"} alt={"Day"} width={50} height={50}/>
                      <p className={"text-gray-400"}>Today date</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>March 15,2021</h1>
                  </div>
                  <div className={"flex flex-col gap-2 justify-center items-center"}>
                      <Image src={"/time.svg"} alt={"Day"} width={55} height={55}/>
                      <p className={"text-gray-400"}>Current time</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>12:34 AM</h1>
                  </div>
                  <div className={"flex flex-col gap-2 justify-center items-center"}>
                      <Image src={"/temperature.svg"} alt={"Day"} width={36} height={36}/>
                      <p className={"text-gray-400"}>Temperature Weather</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>23°C</h1>
                  </div>
              </div>
          </div>
          <div className={"w-full px-[50px] border"}>
              <div className={"w-full flex justify-between items-center"}>
                  <div className={"w-1/3"}>
                      <p className={"font-extrabold text-xl pb-2"}>Our Room & Suites</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                  </div>
                  <div className={"flex gap-2"}>
                      <div className={"border-4 border-primary rounded px-3 py-2"}>
                          <Image src={"/left.svg"} alt={"left"} height={20} width={20}/>
                      </div>
                      <div className={"border-4 border-primary bg-primary rounded px-3 py-2"}>
                          <Image src={"/right.svg"} alt={"right"} height={20} width={20}/>
                      </div>
                  </div>
              </div>
              <div className={"w-full h-[200px] my-6 border border-primary"}>

              </div>

          </div>
      </>
  );
}
