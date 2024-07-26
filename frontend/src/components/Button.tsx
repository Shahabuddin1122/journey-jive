
const Button = ({text,route,submitData}:{text:string,route?:string,submitData?:() => void})=>{
    return (
        <>
            <button className={"px-5 py-2 bg-primary text-white rounded-md"} type={"submit"} onClick={submitData}>{text}</button>
        </>
    )
}
export default Button;