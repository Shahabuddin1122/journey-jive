import Image from "next/image";

const BlogCard = () => {
  return (
      <>
          <div className={"w-[250px] flex flex-col gap-2 border"}>
              <div className={"w-full h-[150px] relative"}>
                  <Image src={"/restaurant2.jpg"} alt={"hotel"} fill objectFit={"cover"}/>
              </div>
              <div
                  className={"w-full h-full flex flex-col p-2 "}>
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
export default BlogCard;