import Image from "next/image";
import IconButton from "@/components/iconbutton";

const Footer = () => {
  return (
      <>
        <div className={"w-full h-[400px] bg-secondary flex"}>
            <div className={"w-[44%] h-full flex justify-center items-center"}>
                <div className={"w-4/5 h-4/5"}>
                    <div className={"text-white font-extrabold text-2xl tracking-wider"}>
                        <h1>If you have any question</h1>
                        <h1>Let use help you!</h1>
                    </div>
                    <p className={"text-white text-xs pt-2"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className={"py-8 flex"}>
                        <input type={"text"} placeholder={"Enter your text"} className={"w-2/3 h-[30px] px-3 text-sm"}/>
                        <IconButton text={"/send.svg"}/>
                    </div>
                    <div className={"text-white text-xs pt-24"}>
                        <h1>Copyright Tanah Air Studio</h1>
                    </div>
                </div>
            </div>
            <div className={"w-[56%] h-full bg-tertiary flex items-center"}>
                <div className={"w-3/4 h-4/5 ml-12"}>
                    <Image src={"/logo.png"} alt={"logo"} width={50} height={50} className={""} />
                    <p className={"text-white py-5 text-sm"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className={"w-full h-1/2 my-8 flex"}>
                        <div className={"w-1/3 h-full text-white text-xs flex flex-col gap-y-4"}>
                            <p>Home</p>
                            <p>Room & Suites</p>
                            <p>Package</p>
                            <p>Voucher</p>
                            <p>Promo</p>
                        </div>
                        <div className={"w-1/3 h-full text-white text-xs flex flex-col gap-y-4"}>
                            <p>About us</p>
                            <p>Restaurant & Bar</p>
                            <p>Events</p>
                            <p>Gallery</p>
                        </div>
                        <div className={"w-1/3 h-full text-white text-xs flex flex-col gap-y-4"}>
                            <p>Our team</p>
                            <p>Blog</p>
                            <p>Contract us</p>
                            <p>Careers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}
export default Footer;