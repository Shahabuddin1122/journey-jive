import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Dropdown from "@/components/DropDown";
import LandingHeader from "@/components/landingHeader";
import RoomSuitesComponent from "@/components/RoomSuitesComponent";
export default function Home() {
  return (
      <>
          <LandingHeader/>
          <div className={"w-11/12 h-[500px] my-10 flex"}>
              <div className={"w-1/2 h-full bg-gray-200 relative"}>
                  <Image src={"/restaurant2.jpg"} alt={"restaurant"} fill objectFit={"cover"}/>
              </div>
              <div className={"w-1/2 h-full flex justify-end items-center"}>
                  <div className={"w-4/5 h-4/5"}>
                      <h1 className={"text-3xl font-extrabold tracking-wide"}>Ordinary Best Western 5 Stars Hotel Since
                          1998</h1>
                      <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed
                          pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci
                          scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet,
                          egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas
                          fusce cras. Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis
                          sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis </p>
                      <Button route={'/explore'} text={"Learn more"}/>
                  </div>
              </div>
          </div>
          <div className={"w-full h-[200px] my-3 flex justify-center"}>
              <div className={"w-4/5 h-full flex justify-between"}>
                  <div className={"flex gap-2 flex-col justify-center items-center"}>
                      <Image src={"/day.svg"} alt={"Day"} width={50} height={50}/>
                      <p className={"text-gray-400"}>Today date</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>March 15,2021</h1>
                  </div>
                  <div className={"flex flex-col gap-2 justify-center items-center"}>
                      <Image src={"/time.svg"} alt={"Day"} width={55} height={55}/>
                      <p className={"text-gray-400"}>Current time</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>12:34 AM</h1>
                  </div>
                  <div className={"flex flex-col gap-2 justify-center items-center"}>
                      <Image src={"/temperature.svg"} alt={"Day"} width={36} height={36}/>
                      <p className={"text-gray-400"}>Temperature Weather</p>
                      <h1 className={"text-xl font-bold tracking-wide"}>23°C</h1>
                  </div>
              </div>
          </div>
          <div className={"w-full px-[50px]"}>
              <div className={"w-full flex justify-between items-center"}>
                  <div className={"w-1/3"}>
                      <p className={"font-extrabold text-xl pb-3"}>Our Room & Suites</p>
                      <p className={"pb-2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed
                          pretium, egestas sed sit.</p>
                  </div>
                  <div className={"flex gap-2"}>
                      <div className={"border-4 border-primary rounded px-3 py-2"}>
                          <Image src={"/left.svg"} alt={"left"} height={20} width={20}/>
                      </div>
                      <div className={"border-4 border-primary bg-primary rounded px-3 py-2"}>
                          <Image src={"/right.svg"} alt={"right"} height={20} width={20}/>
                      </div>
                  </div>
              </div>
              <div className={"my-6 relative overflow-hidden"}>
                  <div className={"flex flex-row overflow-x-auto no-scrollbar"}>
                      <div className={"flex"}>
                          <RoomSuitesComponent header={"Deluxe Room"} image={"/hotel.jpg"}/>
                          <RoomSuitesComponent header={"Standard Room"} image={"/room1.jpg"}/>
                          <RoomSuitesComponent header={"Premium Room"} image={"/room2.jpg"}/>
                          <RoomSuitesComponent header={"Family Room"} image={"/room3.jpg"}/>
                          <RoomSuitesComponent header={"Honeymoon Room"} image={"/room4.jpg"}/>
                      </div>
                  </div>
              </div>
          </div>
          <div className={"w-full h-[500px] my-10  flex justify-end"}>
              <div className={"w-11/12 h-full flex"}>
                  <div className={"w-1/2 h-full flex items-center"}>
                      <div className={"w-4/5 h-4/5"}>
                          <h1 className={"text-3xl font-bold tracking-wider py-5"}>La Vie Restaurant</h1>
                          <p className={"text-sm tracking-wide text-gray-400"}>Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus
                              viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper
                              aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu. Feugiat at dignissim
                              massa ornare. Platea eu orci enim est egestas fusce cras.</p>
                          <div className={"py-5 text-gray-400 flex flex-col gap-3"}>
                              <p>Vienna Bar</p>
                              <p>Rolio Club</p>
                              <p>In Room Dinning</p>
                          </div>
                          <Button route={'/explore'} text={"Learn more"}/>
                      </div>
                  </div>
                  <div className={"w-1/2 h-full bg-gray-400 relative"}>
                      <Image src={"/restaurant4.jpg"} alt={"restaurant"} fill objectFit={"cover"}/>
                  </div>
              </div>
          </div>
          <div className={"w-11/12 h-[500px] my-10 flex"}>
              <div className={"w-1/2 h-full relative"}>
                  <Image src={"/restaurant3.jpg"} alt={"restaurant"} fill objectFit={"cover"}/>
              </div>
              <div className={"w-1/2 h-full flex justify-end items-center"}>
                  <div className={"w-4/5 h-4/5"}>
                      <h1 className={"text-3xl font-extrabold tracking-wide"}>Jazucci Private Spa</h1>
                      <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed
                          pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci
                          scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet,
                          egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est egestas
                          fusce cras.</p>
                      <p className={"pb-3"}>Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida quis
                          sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis </p>
                      <Button route={'/explore'} text={"Learn more"}/>
                  </div>
              </div>
          </div>
          <div className={"w-full h-[500px] my-10  flex justify-end"}>
              <div className={"w-11/12 h-full flex"}>
                  <div className={"w-1/2 h-full flex items-center"}>
                      <div className={"w-4/5 h-4/5"}>
                          <h1 className={"text-3xl font-extrabold tracking-wide"}>Ocenia Waterpool</h1>
                          <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit
                              sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci
                              scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet,
                              egestas aliquam mi a arcu. Feugiat at dignissim massa ornare. Platea eu orci enim est
                              egestas fusce cras. </p>
                          <p className={"pb-3"}>Purus diam est vitae faucibus enim. Ultricies nunc vel magnis gravida
                              quis sodales. Lacus, elit pellentesque massa odio. Sed dictumst condimentum sit quis </p>
                          <Button route={'/explore'} text={"Learn more"}/>
                      </div>
                  </div>
                  <div className={"w-1/2 h-full bg-gray-400 relative"}>
                      <Image src={"/restaurant4.jpg"} alt={"restaurant"} fill objectFit={"cover"}/>
                  </div>
              </div>
          </div>
          <div className={"w-full h-[280px]"}></div>
          <div className={"w-full h-[320px] bg-secondary flex justify-center"}>
              <div className={"w-3/5 h-[500px] relative -top-[250px]"}>
                  <Image src={"/map.png"} alt={"hotel"} fill objectFit={"cover"} />
              </div>
          </div>
          <div className={"w-full h-[500px] py-10 bg-secondary flex gap-2 flex-col"}>
              <div className={"w-full flex  justify-center"}>
                  <div className={"w-11/12 h-1/4 flex justify-between items-center"}>
                      <div className={"w-1/2"}>
                          <h1 className={"text-white text-2xl font-bold tracking-widest pb-4"}>Our Gallery</h1>
                          <p className={"text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                              elit sed pretium, egestas sed sit.</p>
                      </div>
                      <Button route={'/explore'} text={"Open Instagram"}/>
                  </div>
              </div>
              <div className={"w-full h-full flex relative overflow-hidden"}>
                  <div className={"flex overflow-x-auto no-scrollbar"}>
                      <div className={"flex gap-3"}>
                          <div className={"w-[220px] h-full bg-slate-500 relative"}>
                              <Image src={"/gallery1.jpg"} alt={"photo"} fill objectFit={"cover"} />
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-1/3 bg-slate-500 relative"}>
                                  <Image src={"/gallery2.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-2/3 bg-slate-500 relative"}>
                                  <Image src={"/gallery3.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery4.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery5.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-[220px] h-full bg-slate-500 relative"}>
                              <Image src={"/gallery6.jpg"} alt={"photo"} fill objectFit={"cover"} />
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery2.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery11.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-3/4 bg-slate-500 relative"}>
                                  <Image src={"/gallery7.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-1/4 bg-slate-500 relative"}>
                                  <Image src={"/gallery3.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-1/5 bg-slate-500 relative"}>
                                  <Image src={"/gallery5.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-4/5 bg-slate-500 relative"}>
                                  <Image src={"/gallery8.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                          <div className={"w-[220px] h-full bg-slate-500 relative"}>
                              <Image src={"/gallery9.jpg"} alt={"photo"} fill objectFit={"cover"} />
                          </div>
                          <div className={"w-[220px] h-full flex flex-col gap-3"}>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery10.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                              <div className={"w-full h-1/2 bg-slate-500 relative"}>
                                  <Image src={"/gallery11.jpg"} alt={"photo"} fill objectFit={"cover"} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </>
  );
}
