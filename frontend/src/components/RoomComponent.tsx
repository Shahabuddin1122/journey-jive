import Image from "next/image";
import Button from "@/components/Button";

const RoomComponent = ({image,text,price,guest,bed,washroom}:{image:string,text:string,price:string,guest:string,bed:string,washroom:string}) => {
  return (
      <>
          <div className={"w-[350px] h-[440px] border-2 my-2"}>
              <div className={"w-full h-1/2 relative"}>
                  <Image src={image} alt={"restaurant"} fill objectFit={"cover"}/>
              </div>
              <div className={"w-full h-1/2 flex flex-col gap-2 p-2"}>
                  <h1 className={"text-2xl font-semibold"}>{text}</h1>
                  <div className={"w-full flex justify-between"}>
                      <div className={"flex gap-2 justify-center items-center"}>
                          <Image src={"/persons.svg"} alt={"search"} height={20} width={20}/>
                          <p className={"text-slate-400"}>{guest} Guest</p>
                      </div>
                      <div className={"flex gap-2 justify-center items-center"}>
                          <Image src={"/bed.svg"} alt={"search"} height={20} width={20}/>
                          <p className={"text-slate-400"}>{bed} Bed</p>
                      </div>
                      <div className={"flex gap-2 justify-center items-center"}>
                          <Image src={"/washroom.svg"} alt={"search"} height={20} width={20}/>
                          <p className={"text-slate-400"}>{washroom} Washroom</p>
                      </div>
                  </div>
                  <div className={"w-full py-8 flex justify-between items-center"}>
                      <Button text={"Learn more"}/>
                      <div>
                          <p className={"text-secondary"}>Start From</p>
                          <p className={"text-2xl font-bold"}>{price}<span
                              className={"text-sm font-light text-secondary"}>/Night</span></p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default RoomComponent;