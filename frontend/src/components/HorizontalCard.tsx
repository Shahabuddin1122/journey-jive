import Image from "next/image";

const HorizontalCard = () => {
  return (
      <>
          <div className={"w-11/12 mb-2 p-2 border rounded flex gap-5"}>
              <div className={"w-1/4 h-[100px] relative"}>
                  <Image src={"/restaurant2.jpg"} alt={"hotel"} fill objectFit={"cover"}/>
              </div>
              <div className={""}>
                  <p className={"text-sm font-semibold"}>Health</p>
                  <p className={"text-lg font-bold"}>Coronavirus: Warning over easing lockdown measures too quickly</p>
                  <div className={"flex gap-4 text-gray-500 text-xs pt-2"}>
                      <p>2 Hours</p>
                      <p>Author hula hula</p>
                  </div>
              </div>
          </div>
      </>
  )
}
export default HorizontalCard;