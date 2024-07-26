"use client"
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
const NewHeader = ({clickedItem}:{clickedItem?:number}) => {
    const {data:session} = useSession()
    const router = useRouter();
    return (
        <>
            <div className={"w-full top-0 flex py-2"}>
                <div className={"w-[57%] h-full px-10 flex justify-between items-center"}>
                    <Image src={"/logo.png"} alt={"Logo"} width={40} height={40}/>
                    <div className={""}>
                        <ul className={"flex justify-around items-center"}>
                            <li className={"lg:text-[15px] md:text-[10px] px-6 text-white"}><Link href={"/"}>Home</Link></li>
                            <li className={`lg:text-[15px] md:text-[10px] px-6 ${clickedItem == 1? "text-primary":"text-white"} `}><Link href={"/explore"}>Room & Suites</Link></li>
                            <li className={'lg:text-[15px] md:text-[10px] px-6 text-white'}>Restaurant & Bar</li>
                            <li className={`lg:text-[15px] md:text-[10px] px-6 ${clickedItem == 3? "text-primary":"text-white"} `}><Link href={"/blog"}>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={"w-[43%] pr-10 flex justify-end items-center"}>
                    <Image src={"/search.svg"} alt={"search"} height={20} width={20} className={"mr-4"}/>
                    {session ? <Button submitData={()=> router.push('/explore')} text={"Learn more"}/> : <Button submitData={()=> router.push('/login')} text={"Login"}/>}
                </div>
            </div>
        </>
    )
}
export default NewHeader;