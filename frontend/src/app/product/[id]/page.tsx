"use client"
import Image from "next/image";
import Header from "@/components/header";
import Button from "@/components/Button";
import IconText from "@/components/IconText";
import Footer from "@/components/footer";
import Dropdown from "@/components/DropDown";
import RoomComponent from "@/components/RoomComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import Calender from "@/components/calender";
import fetcher from "@/utils/fetcher"
import {useQuery} from "react-query";

const fetchHotel = async (productId) => {
    const response = await axios.get(`http://localhost:8000/hotel/get-indivisual-hotel/${productId}`);
    return response.data;
};

const Product = ({params}) => {
    const productId = params.id;
    const [selectedDate,setSelectedDate] = useState<string>('')

    const dateSelector = (date)=>{
        setSelectedDate(date);
    }
    const { isLoading, data, error } = useQuery(['product', productId], () => fetchHotel(productId), {
        enabled: !!productId,
    });

    return (
        <>
            <div>
                <div className={"w-full h-[600px] relative flex"}>
                    <div className={"w-[57%] h-full flex justify-center items-center"}>
                        <div className={"w-4/5 h-1/2 my-auto flex flex-col justify-between"}>
                            <div className={"w-full h-full flex flex-col justify-around"}>
                                <div>
                                    <h1 className={"text-5xl font-bold tracking-wide"}>{data && data.name}</h1>
                                    <p className={"text-sm py-4"}>{data && data.short_description}</p>
                                </div>
                                <div className={"flex gap-16"}>
                                    <div className={"flex gap-2 justify-center items-center"}>
                                        <Image src={"/persons.svg"} alt={"search"} height={20} width={20}/>
                                        <p className={"text-slate-400"}>{data && data.guest_per_room} Guest</p>
                                    </div>
                                    <div className={"flex gap-2 justify-center items-center"}>
                                    <Image src={"/bed.svg"} alt={"search"} height={20} width={20}/>
                                        <p className={"text-slate-400"}>{data && data.bed_per_room} Bed</p>
                                    </div>
                                    <div className={"flex gap-2 justify-center items-center"}>
                                        <Image src={"/washroom.svg"} alt={"search"} height={20} width={20}/>
                                        <p className={"text-slate-400"}>{data && data.washroom_per_room} Washroom</p>
                                    </div>
                                </div>
                                <div className={"pt-10"}>
                                    <p className={"text-secondary"}>Start From</p>
                                    <p className={"text-4xl font-bold"}>${data && data.price_per_room}<span
                                        className={"text-lg font-light text-secondary"}>/Night</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"w-[43%] h-full bg-slate-100 absolute right-0"}>
                        <Image src={`data:image/jpeg;base64,${data && data.hotel_image.heroImage}`} alt={"home"} fill objectFit={"cover"}/>
                    </div>
                </div>
                <Header clickedItem={1}/>
                <div className={"w-11/12 h-[500px] my-10 flex"}>
                    <div className={"w-1/2 h-full bg-gray-200 relative"}>
                        <Image src={`data:image/jpeg;base64,${data && data.hotel_image.additionalImage}`} alt={"restaurant"} fill objectFit={"cover"}/>
                    </div>
                    <div className={"w-1/2 h-full flex justify-end items-center"}>
                        <div className={"w-4/5 h-4/5"}>
                            <h1 className={"text-3xl font-extrabold tracking-wide"}>About {data && data.name}</h1>
                            <p className={"pt-2"}>{data && data.about}</p>
                        </div>
                    </div>
                </div>
                <div className={"w-[94%] float-right flex flex-col gap-2"}>
                    <div>
                        <h1 className={"text-2xl font-semibold"}>Hotels Facilities</h1>
                    </div>
                    <div className={"w-1/3"}>
                        <p>Our hotel, {data && data.name} provide many more facilities including</p>
                    </div>
                    <div className={"w-full h-full my-5 flex flex-wrap"}>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/insurance.svg"} text={"Insurance"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/wifi.svg"} text={"Wifi"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/message.svg"} text={"24 Hours Front Desk"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/airbnb.svg"} text={"AC"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/cleaning.svg"} text={"Cleaning Services"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/parking.svg"} text={"Parking Area"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/spa.svg"} text={"Spa"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/wheel.svg"} text={"Wheelchair Access"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/swim.svg"} text={"Swimming Pool"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/restaurant.svg"} text={"Restaurant"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/elevator.svg"} text={"Elevator"}/>
                        </div>
                        <div className={"w-1/3 h-10"}>
                            <IconText picture={"/meeting.svg"} text={"Meeting Facilities"}/>
                        </div>
                    </div>
                </div>
                <div className={"w-[94%] float-right"}>
                    <h1 className={"text-2xl font-semibold pb-4"}>Room Gallery</h1>
                    <div className={"w-full flex overflow-hidden relative"}>
                        <div className={"flex flex-nowrap overflow-x-auto no-scrollbar"}>
                            <div className={"flex gap-3"}>
                                <div className={"w-[400px] h-[200px] bg-slate-500 relative"}>
                                    <Image src={"/gallery1.jpg"} alt={"photo"} fill objectFit={"cover"} />
                                </div>
                                <div className={"w-[400px] h-[200px] bg-slate-500 relative"}>
                                    <Image src={"/gallery10.jpg"} alt={"photo"} fill objectFit={"cover"} />
                                </div>
                                <div className={"w-[400px] h-[200px] bg-slate-500 relative"}>
                                    <Image src={"/gallery11.jpg"} alt={"photo"} fill objectFit={"cover"} />
                                </div>
                                <div className={"w-[400px] h-[200px] bg-slate-500 relative"}>
                                    <Image src={"/gallery9.jpg"} alt={"photo"} fill objectFit={"cover"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-[94%] h-[400px] my-5 float-right flex justify-center"}>
                    <div className={"w-1/2 h-full flex justify-center flex-col"}>
                        <div className={"w-4/5 flex gap-4 flex-col justify-center"}>
                            <h1 className={"text-2xl font-semibold pb-4"}>Additional Information</h1>
                            <p className={"text-sm"}>{data && data.additional_info}</p>
                            <h2 className={"text-lg font-semibold"}>Check in {data && data.check_in}</h2>
                            <h2 className={"text-lg font-semibold"}>Check Out {data && data.check_out}</h2>
                        </div>
                    </div>
                    <div className={"w-1/2 h-full flex justify-center items-center"}>
                        <div className={"w-4/5 h-4/5 flex flex-col justify-center"}>
                            <div className={"w-full border my-3"}><Dropdown /></div>
                            <div className={"w-full border my-3"}><Dropdown /></div>
                            <div className={"w-full border my-3"}><Dropdown /></div>
                            <div className={"w-full border my-3"}><Dropdown /></div>
                            <div className={"w-full border my-3"}><Dropdown /></div>
                        </div>
                    </div>
                </div>
                <div className={"w-[94%] mb-5 float-right "}>
                    <div className={"w-1/2 flex flex-col gap-4"}>
                        <h1 className={"text-2xl font-semibold"}>Room Availability</h1>
                        <p>Please select date from calender and additional information of your bookings.</p>
                    </div>
                    <div className={"w-full my-5 flex justify-center items-center gap-4"}>
                        <div className={"w-1/2 h-[340px] border-2 rounded-xl flex justify-center items-center"}>
                            {/*/* calender*/}
                            <Calender dateSelector={dateSelector}/>

                        </div>
                        <div className={"w-1/2 h-full border-2 rounded-xl flex justify-center items-center "}>
                            <div className={"w-[95%] pt-10 pb-5"}>
                                <p className={"border-b-2 pb-2"}>Sellected Date : <span className={"font-semibold"}>{selectedDate}</span>
                                </p>
                                <h1 className={"text-xl font-semibold py-2"}>{data && data.name}</h1>
                                <p>Room left</p>
                                <p className={"text-primary text-xl"}>{data && data.total_rooms} Room Left</p>
                                <div className={"py-5"}>
                                    <p className={"text-secondary"}>Start From</p>
                                    <p className={"text-4xl font-bold"}>${data && data.price_per_room}<span
                                        className={"text-lg font-light text-secondary"}>/Night</span></p>
                                </div>
                                <Button route={'/checkout'} text={"Booking now"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-[94%] mb-5 float-right "}>
                    <div className={"w-1/2 flex flex-col gap-4"}>
                        <h1 className={"text-2xl font-semibold"}>Similiar Rooms</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.</p>
                    </div>
                    <div className={"w-full my-5 flex justify-center items-center gap-4"}>
                        <RoomComponent option={1} image={"/restaurant4.jpg"} text={"Deluxe Double with New York City View"} price={67} bed={2} guest={3} washroom={2} />
                        <RoomComponent option={1} image={"/restaurant2.jpg"} text={"Deluxe Double with New York City View"} price={59} bed={2} guest={2} washroom={1} />
                        <RoomComponent option={1} image={"/restaurant3.jpg"} text={"Deluxe Double with New York City View"} price={20} bed={1} guest={1} washroom={1} />
                        <RoomComponent option={1} image={"/restaurant3.jpg"} text={"Deluxe Double with New York City View"} price={102} bed={3} guest={5} washroom={2} />
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default Product;