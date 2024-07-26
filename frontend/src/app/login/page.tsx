"use client"
import Image from "next/image";
import Button from "@/components/Button";
import {useState} from "react";
import {signIn} from "next-auth/react";

const Login = () => {
    const [data,setData] = useState<user>({
        email: '',
        password: ''
    })
    const submitData = async ()=>{
        console.log(data)
        await signIn('credentials',{
            email:data.email,
            password:data.password,
            redirect:true,
            callbackUrl:"/"
        })
    }
  return (
      <>
          <div className={"w-full h-screen flex justify-center items-center"}>
              <div className={"w-2/3 h-4/5 border border-black flex"}>
                  <div className={"w-1/2 h-full flex flex-wrap"}>
                      <div className={"w-1/3 h-1/4 bg-white"}></div>
                      <div className={"w-1/3 h-1/4 bg-yellow-300 hover:bg-opacity-80"}></div>
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
                  <div className={"w-1/2 h-full flex justify-center items-center"}>
                      <div className={"w-11/12 h-[90%]"}>
                          <div className={"w-full h-[10%]"}>
                              <div className={"w-[10%] h-full relative float-right"}>
                                  <Image src={"/logo.png"} alt={"logo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-full h-[90%] flex justify-center items-center"}>
                              <div className={"w-4/5 h-4/5"}>
                                  <div className={"pb-4"}>
                                      <h1 className={"text-2xl font-bold"}>Welcome to JOURNEYJIVE</h1>
                                      <p className={"text-sm"}>Enter your details and get back to details</p>
                                  </div>
                                  <div className={"py-1 w-full"}>
                                      <p className={"py-1"}>Email</p>
                                      <input placeholder={"Enter your email"}
                                             type={'email'}
                                             name={'email'}
                                             value={data.email}
                                             onChange={(e) => {
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
                                             onChange={(e) => {
                                                 setData({
                                                     ...data,
                                                     password: e.target.value
                                                 })
                                             }}
                                             className={"w-full rounded-sm px-2 py-1 text-sm border"}/>
                                  </div>
                                  <div className={"w-full py-1 flex justify-between items-center"}>
                                      <div className={"flex gap-1"}>
                                          <input type={"checkbox"} className={""}/>
                                          <p className={"text-sm"}>Remember me</p>
                                      </div>
                                      <div className={""}>
                                          <p className={"text-primary text-sm"}>Forgotten password?</p>
                                      </div>
                                  </div>
                                  <div className={"w-full flex flex-col my-4"}>
                                  <Button text={"Login"} submitData={submitData} />
                                  </div>
                                  <div className={" flex justify-center"}>
                                      <p>Don&apos;t have any account?<span className={"text-primary pl-2"}>Sign up</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default Login;