"use client"
import { useRouter } from 'next/navigation';

const Button = ({text,route}:{text:string,route:string})=>{
    const router = useRouter();
    return (
        <>
            <button className={"px-5 py-2 bg-primary text-white rounded-md"} type={"submit"} onClick={()=> router.push(route)}>{text}</button>
        </>
    )
}
export default Button;