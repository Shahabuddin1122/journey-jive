"use client"
import Header from "@/components/header";
import Image from "next/image";
import Header2 from "@/components/header2";
import Dropdown from "@/components/DropDown";
import {useQuery} from "react-query";
import RoomComponent from "@/components/RoomComponent";
import Footer from "@/components/footer";
import fetcher from "@/utils/fetcher"

const Explore = () => {
    const { isLoading, data, error } = useQuery('products', fetcher);

    return (
        <>
            <div className={"w-full absolute"}>
                <div className={"w-full h-[500px] relative"}>
                    <Image src={"/hotel2.jpg"} alt={"hotel"} fill objectFit={"cover"}/>
                </div>

            </div>
            <div className={"w-full relative mx-auto"}>
                <Header2 clickedItem={1}/>
                <div className={" w-[95%]  mx-auto"}>
                    <div className={"w-[57%] h-[400px] flex flex-col justify-center"}>
                        <h1 className={"font-bold text-4xl text-white"}>Our Premium Room <br/> and Suites</h1>
                        <p className={"text-lg text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet, </p>
                    </div>
                    <div className={"w-full h-20 bg-white flex items-center"}>
                        <div className={"w-1/2 h-full flex items-center"}>
                            <div className={"w-11/12 h-1/2 flex items-center px-2 mx-auto border-2 border-gray-100 rounded"}>
                                <input placeholder={"Search activities or Destinations"} className={"w-full h-full px-2"}/>
                                <Image src={"/search.svg"} alt={"search"} height={20} width={20}/>
                            </div>
                        </div>
                        <div className={"w-1/2 h-full flex justify-between items-center"}>
                            <Dropdown text={"Type Room"} />
                            <Dropdown text={"Guest"} />
                            <Dropdown text={"Beds"} />
                            <Dropdown text={"Sort by"} />
                        </div>
                    </div>
                    <div className={"w-full flex flex-wrap justify-center gap-4 items-center py-3"}>
                        {!isLoading && !error && data && data.map((value,index)=>{
                            return <RoomComponent key={value.id} link={value.id} option={1} image={`data:image/jpeg;base64,${value.hotel_image.heroImage}`} text={value.name} price={value.price_per_room} bed={value.bed_per_room} guest={value.guest_per_room} washroom={value.guest_per_room} />
                        })}
                    </div>
                </div>
                <Footer/>
            </div>

        </>
    )
}
export default Explore;