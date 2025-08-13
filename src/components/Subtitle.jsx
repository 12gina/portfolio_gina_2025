import { useRef } from "react"
import { subtitles } from "../constants/constants"

export const Subtitle = ({currentSection}) => {

    return (
        <article id={`subtitle`} >
            <div className={`${currentSection}`}>
                {subtitles.map((v, i)=>(
                    <span key={i} >{v.text}</span>
                ))}
            </div>
        </article>
    )
}