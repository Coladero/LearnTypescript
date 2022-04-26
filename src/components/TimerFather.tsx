import { useState } from "react"
import { Timer } from "./Timer"


export const TimerFather = () => {

    const [miliseconds, setMiliseconds] = useState(1000)
  return (
    <div>
        <span>Miliseconds {miliseconds} </span>
        <br />
        <button
        onClick={() => setMiliseconds(1000)} 
        className="btn btn-outline-success">
            1000
        </button>
        <button
        onClick={() => setMiliseconds(2000)} 
        className="btn btn-outline-success">
            2000
        </button>
        <Timer miliseconds={miliseconds}/>
    </div>
  )
}
