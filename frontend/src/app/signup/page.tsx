"use client"

import Image from "next/image";
import Button from "@/components/Button";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";


const Signup = () => {
    const router = useRouter()
    const [data,setData] = useState<user>({
        email: '',
        password: ''
    })
    const submitData = async ()=>{
        axios.post('http://localhost:8000/user/register',data)
            .then((res)=>{
                console.log(res.data)
                router.push('/login')
            })
            .catch((error)=>{
                console.error(error)
        })
    }
    return (
        <>
            <div className={"w-full h-screen flex justify-center items-center"}>
                <div className={"w-2/3 h-4/5 border border-black flex"}>
                    <div className={"w-1/2 h-full flex justify-center items-center"}>
                        <div className={"w-11/12 h-[90%]"}>
                            <div className={"w-full h-[10%]"}>
                                <div className={"w-[10%] h-full relative float-right"}>
                                    <Image src={"/logo.png"} alt={"logo"} fill objectFit={"cover"}/>
                                </div>
                            </div>
                            <div className={"w-full h-[90%] flex justify-center items-center"}>
                                <div className={"w-4/5 h-4/5"}>
                                    <div className={"pb-4"}>
                                        <h1 className={"text-3xl font-bold text-center pb-6"}>Registration form</h1>
                                        <h2 className={"text-2xl font-bold"}>Welcome to JOURNEYJIVE</h2>
                                        <p className={"text-sm"}>Enter your details and get back to details</p>
                                    </div>
                                    <div className={"py-1 w-full"}>
                                        <p className={"py-1"}>Email</p>
                                        <input placeholder={"Enter your email"}
                                               type={'email'}
                                               name={'email'}
                                               value={data.email}
                                               onChange={(e)=>{
                                                   setData({
                                                       ...data,
                                                       email: e.target.value
                                                   })
                                               }}
                                               className={"w-full rounded-sm px-2 py-1 text-sm border"}/>
                                    </div>
                                    <div className={"py-1 w-full"}>
                                        <p className={"py-1"}>Password</p>
                                        <input placeholder={"Enter your password"}
                                               type={"password"}
                                               name={'password'}
                                               value={data.password}
                                               onChange={(e)=>{
                                                   setData({
                                                       ...data,
                                                       password:e.target.value
                                                   })
                                               }}
                                               className={"w-full rounded-sm px-2 py-1 text-sm border"}/>
                                    </div>
                                    <div className={"w-full flex flex-col my-4"}>
                                        <Button text={"Registration"} submitData={submitData}/>
                                    </div>
                                    <div className={" flex justify-center"}>
                                        <p>I have an account<span
                                            className={"text-primary pl-2"}>Sign in</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-1/2 h-full flex flex-wrap"}>
                        <div className={"w-1/3 h-1/4 bg-yellow-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-white"}></div>
                        <div className={"w-1/3 h-1/4 bg-green-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-pink-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-violet-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-yellow-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-green-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-white"}></div>
                        <div className={"w-1/3 h-1/4 bg-violet-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-violet-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-yellow-300 hover:bg-opacity-80"}></div>
                        <div className={"w-1/3 h-1/4 bg-pink-300 hover:bg-opacity-80"}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup;