import Image from "next/image";
import Button from "@/components/Button";

const signup = () => {
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
                                        <h1 className={"text-2xl font-bold"}>Welcome to JOURNEYJIVE</h1>
                                        <p className={"text-sm"}>Enter your details and get back to details</p>
                                    </div>
                                    <div className={"py-1 w-full"}>
                                        <p className={"py-1"}>Email</p>
                                        <input placeholder={"Enter your email"}
                                               className={"w-full rounded-sm px-2 py-1 text-sm border"}/>
                                    </div>
                                    <div className={"py-1 w-full"}>
                                        <p className={"py-1"}>Password</p>
                                        <input placeholder={"Enter your password"} type={"password"}
                                               className={"w-full rounded-sm px-2 py-1 text-sm border"}/>
                                    </div>
                                    <div className={"w-full flex flex-col my-4"}>
                                        <Button text={"Registration"} route={"/"}/>
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
export default signup;