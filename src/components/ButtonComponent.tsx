import { btnProps } from "../@types"
 



const ButtonComponent = ({label, onclick, isDisabled}: btnProps) => {
 
   
 
    return (
    <button
    disabled={isDisabled && isDisabled}
    className={` ${isDisabled ? "text-gray-500 border border-gray-500" : "text-blue-500 border border-blue-500"}  px-2 py-1 
     rounded-md`}
    onClick={onclick}
    >{label}</button>
  )
}

export default ButtonComponent