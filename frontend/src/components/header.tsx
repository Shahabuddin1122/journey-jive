import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
      <>
          <div className={"w-full flex my-2"}>
              <div className={"w-2/3 h-full px-10 flex justify-between items-center"}>
                  <Image src={"/logo.png"} alt={"Logo"} width={40} height={40}/>
                  <div className={""}>
                      <ul className={"flex justify-around items-center"}>
                          <li className={"lg:text-[15px] sm:text-xs px-6 text-primary"}>Home</li>
                          <li className={'lg:text-[15px] sm:text-xs px-6 text-gray-500'}>Room & Suites</li>
                          <li className={'lg:text-[15px] sm:text-xs px-6 text-gray-500'}>Restaurant & Bar</li>
                          <li className={'lg:text-[15px] sm:text-xs px-6 text-gray-500'}>Blog</li>
                      </ul>
                  </div>
              </div>
              <div className={"w-1/3 pr-5 flex justify-end items-center"}>
                  <Image src={"/search.svg"} alt={"search"} height={20} width={20} className={"mr-4"}/>
                  <Button text={'Booking Room'}/>
              </div>
          </div>
      </>
  )
}
export default Header;