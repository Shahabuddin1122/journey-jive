const Button = ({text}:{text:string})=>{
    return (
        <>
            <button className={"px-5 py-2 bg-primary text-white rounded-md"} type={"submit"}>{text}</button>
        </>
    )
}
export default Button;