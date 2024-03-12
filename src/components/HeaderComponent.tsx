import { useQuestionContext } from "../Context/QuestionContext";

const HeaderComponent = () => {

    
    const {seconds} = useQuestionContext()

    const formatTime = (time:number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };

  return (
    <div className="flex justify-end px-4 my-10">
    <p className={`${ seconds <= 15 && "text-red-500 animate-pulse text-xl"  } mr-10`}>Timer: {formatTime(seconds)}</p>
</div>
  )
}

export default HeaderComponent