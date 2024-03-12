

const FaceComponent = ({total}:{total:number}) => {


    if(total < 7)
    return <p className="text-2xl">😔 </p>

    if( total > 7  && total <=11)
    return <p className="text-2xl">👍</p>
     
    if( total > 11)
    return <p className="text-2xl">🥳 </p>
  
}

export default FaceComponent