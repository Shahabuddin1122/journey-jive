import Image, {StaticImageData} from "next/image";

const RoomSuitesComponent = ({header,image}:{header:string,image: string | StaticImageData}) => {
  return (
      <>
          <div className={"w-[280px] mx-4"}>
              <div className={"w-full h-[200px] border relative"}>
                  <Image src={image} alt={"hotel"} fill objectFit={"cover"}/>
              </div>
              <div className={""}>
                  <p className={"py-2 text-xl font-bold tracking-wide"}>{header}</p>
                  <p className={"text-slate-400 text-sm pb-2"}>Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
              </div>
          </div>

      </>
  )
}
export default RoomSuitesComponent;