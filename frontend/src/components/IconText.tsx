import Image from "next/image";

const IconText = ({picture,text}:{picture:string,text:string}) => {
  return (
      <>
          <div className={"flex gap-2 items-center"}>
              <Image src={picture} alt={"search"} height={20} width={20}/>
              <p className={"text-slate-400"}>{text}</p>
          </div>
      </>
  )
}
export default IconText;