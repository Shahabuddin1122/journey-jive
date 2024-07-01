import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
const newHeader = () => {
    return (
        <>
            <div className={"w-full top-0 flex py-2"}>
                <div className={"w-[57%] h-full px-10 flex justify-between items-center"}>
                    <Image src={"/logo.png"} alt={"Logo"} width={40} height={40}/>
                    <div className={""}>
                        <ul className={"flex justify-around items-center"}>
                            <li className={"lg:text-[15px] md:text-[10px] px-6 text-gray-500"}><Link href={"/"}>Home</Link></li>
                            <li className={'lg:text-[15px] md:text-[10px] px-6 text-primary'}><Link href={"/explore"}>Room & Suites</Link></li>
                            <li className={'lg:text-[15px] md:text-[10px] px-6 text-gray-500'}>Restaurant & Bar</li>
                            <li className={'lg:text-[15px] md:text-[10px] px-6 text-gray-500'}>Blog</li>
                        </ul>
                    </div>
                </div>
                <div className={"w-[43%] pr-10 flex justify-end items-center"}>
                    <Image src={"/search.svg"} alt={"search"} height={20} width={20} className={"mr-4"}/>
                    <Button route={'/explore'} text={'Booking Room'}/>
                </div>
            </div>
        </>
    )
}
export default newHeader;