import Header2 from "@/components/header2";
import Image from "next/image";
import Dropdown from "@/components/DropDown";
import RoomComponent from "@/components/RoomComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HorizontalCard from "@/components/HorizontalCard";
import BlogCard from "@/components/blogCard";

const blog = () => {
  return (
      <>
          <div className={"w-full absolute"}>
              <div className={"w-full h-[500px] relative"}>
                  <Image src={"/hotel2.jpg"} alt={"hotel"} fill objectFit={"cover"} />
              </div>
          </div>
          <div className={"w-full relative"}>
              <Header2 clickedItem={3}/>
              <div className={"w-[95%] mx-auto"}>
                  <div className={"w-[57%] h-[400px] flex flex-col justify-center"}>
                      <h1 className={"font-bold text-4xl text-white"}>Find interesting <br/> information around us</h1>
                      <p className={"text-lg text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
                  </div>
              </div>
          </div>
          <div className={"w-full mt-20 "}>
              <div className={"w-[95%] mx-auto"}>
                  <div className={"w-full py-10"}>
                      <h1 className={"text-2xl font-semibold py-2"}>Popular</h1>
                      <div className={"w-full flex justify-between gap-10"}>
                          <div className={"w-1/2"}>
                              <div className={"w-full h-[400px] relative"}>
                                  <Image src={"/restaurant2.jpg"} alt={"hotel"} fill objectFit={"cover"}/>
                                  <div
                                      className={"absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white"}>
                                      <p>Health</p>
                                      <p>Coronavirus: Warning over easing lockdown measures too quickly</p>
                                      <div className={"flex gap-4"}>
                                          <p>2 Hours</p>
                                          <p>Author hula hula</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className={"w-1/2 h-full"}>
                              <HorizontalCard/>
                              <HorizontalCard/>
                              <HorizontalCard/>
                          </div>
                      </div>
                  </div>
                  <div className={"w-full my-10"}>
                      <h1 className={"text-2xl font-semibold py-2"}>Latest Post</h1>
                      <div className={"w-full flex flex-wrap justify-between gap-4 items-center py-3"}>
                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>
                          <BlogCard/>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>

      </>
  )
}
export default blog;