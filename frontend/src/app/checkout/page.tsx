import Header from "@/components/header";
import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import Button from "@/components/Button";
import RoomComponent from "@/components/RoomComponent";

const Checkout = () => {
  return (
      <>
          <div className={"w-full mx-auto"}>
              <Header2/>
              <div className={"w-[95%] mx-auto pt-20"}>
                  <div className={"w-1/2 py-3"}>
                      <h1 className={"text-4xl font-semibold py-2"}>Booking Now</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium,
                          egestas sed sit orem ipsum dolor sit amet, </p>
                  </div>
                  <div className={"w-full flex gap-6"}>
                      <div className={"w-3/5 flex flex-col gap-10"}>
                          <div className={"w-full flex justify-center border py-4"}>
                              <div className={"w-11/12"}>
                                  <h1 className={"text-2xl pb-4 font-semibold"}>Billing Details</h1>
                                  <div className={"w-full flex gap-2"}>
                                      <div className={"w-1/2"}>
                                          <h1 className={"text-xl"}>First Name</h1>
                                          <input placeholder={"Input your First Name in Here"}
                                                 className={"w-full border p-2 my-2"}/>
                                      </div>
                                      <div className={"w-1/2"}>
                                          <h1 className={"text-xl"}>Last Name</h1>
                                          <input placeholder={"Input your First Name in Here"}
                                                 className={"w-full border p-2 my-2"}/>
                                      </div>
                                  </div>
                                  <div className={"w-full"}>
                                      <h1 className={"text-xl"}>Email Address</h1>
                                      <input placeholder={"Input your Email Address in Here"}
                                             className={"w-full border p-2 my-2"}/>
                                  </div>
                                  <div className={"w-full"}>
                                      <h1 className={"text-xl"}>Phone Number</h1>
                                      <input placeholder={"Input your Phone Number in Here"}
                                             className={"w-full border p-2 my-2"}/>
                                  </div>
                                  <div className={"w-full"}>
                                      <h1 className={"text-xl"}>Passport Number</h1>
                                      <input placeholder={"Input your Passport number in Here"}
                                             className={"w-full border p-2 my-2"}/>
                                  </div>
                                  <div className={"w-full"}>
                                      <h1 className={"text-xl"}>Address</h1>
                                      <input placeholder={"Input your Address in Here"}
                                             className={"w-full border p-2 my-2"}/>
                                  </div>
                              </div>
                          </div>
                          <div className={"w-full flex justify-center border"}>
                              <div className={"w-11/12 py-3"}>
                                  <h1 className={"text-2xl py-4 font-semibold"}>Extra Facilitation</h1>
                                  <div className={"w-full"}>
                                      <div className={" w-full py-2 flex justify-between"}>
                                          <div className={"flex items-center gap-3"}>
                                              <input type="checkbox"
                                                     className="p-2 border border-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"/>
                                              <p className={"text-gray-500"}>Airport Pickup</p>
                                          </div>
                                          <div>
                                              <p>+ Rp. 230.000</p>
                                          </div>
                                      </div>
                                      <div className={" w-full py-2 flex justify-between"}>
                                          <div className={"flex items-center gap-3"}>
                                              <input type="checkbox"
                                                     className="p-2 border border-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"/>
                                              <p className={"text-gray-500"}>Activity</p>
                                          </div>
                                          <div>
                                              <p>+ Rp. 230.000</p>
                                          </div>
                                      </div>
                                      <div className={" w-full py-2 flex justify-between"}>
                                          <div className={"flex items-center gap-3"}>
                                              <input type="checkbox"
                                                     className="p-2 border border-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"/>
                                              <p className={"text-gray-500"}>Massage and Spa</p>
                                          </div>
                                          <div>
                                              <p>+ Rp. 230.000</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={"w-full py-4"}>
                                      <h1 className={"text-xl"}>Special Request</h1>
                                      <input placeholder={"Input your Special Request in Here"}
                                             className={"w-full h-[100px] border p-2 my-2"}/>
                                  </div>
                              </div>
                          </div>
                          <div className={"w-full mb-10 flex flex-col gap-10"}>
                              <div className={"flex items-center gap-3"}>
                                  <input type="checkbox"
                                         className="p-2 border border-primary appearance-none checked:bg-primary checked:border-transparent focus:outline-none"/>
                                  <p className={"text-gray-500"}>I have agree to the rules, Terms and Conditions.</p>
                              </div>
                              <Button route={'/'} text={"Continue to Payment"} />
                          </div>
                      </div>
                      <div className={"w-2/5"}>
                          <RoomComponent option={false} image={"/restaurant3.jpg"} text={"Deluxe Double with New York City View"} price={'$102'} bed={"3"} guest={"5"} washroom={"2"} />
                      </div>
                  </div>

              </div>
          </div>
          <Footer/>
      </>
  )
}
export default Checkout;