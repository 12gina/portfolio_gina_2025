import { useState } from 'react'
import introVideo from "./assets/intro.mp4"
import './styles/index.scss'
import { Title } from './constants/constants'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

      {/* 타이틀 */}
      <section>
        <video id={'intro-video'} autoPlay muted loop playsInline>
          <source
              src={introVideo}
              type="video/mp4"/>
        </video>
        <div>
          {Title.map((v, i)=>(
            <span key={i} id={`char_${i}`}>{v==="-"?<br/>:v}</span>
          ))}
        </div>
      </section>

      <section>
        자기소개
        이력서 다운로드
      </section>
    </main>
  )
}

export default App
