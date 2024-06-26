import Image from "next/image";

const IconButton = ({text}:{text:string}) => {
  return (
      <>
          <button className={"mx-2 px-4 bg-primary text-white rounded-sm"}
                  type={"submit"}>
              <Image src={text} alt={"Sent"} width={20} height={20}/>
          </button>
      </>
  )
}
export default IconButton;