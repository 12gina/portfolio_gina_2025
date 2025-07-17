import { useState } from 'react'
import introVideo from "./assets/intro.mp4"
import './styles/index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

      <video id={'intro-video'} autoPlay muted loop playsInline>
        <source
            src={introVideo}
            type="video/mp4"/>
      </video>

      <section>
        자기소개
        이력서 다운로드
      </section>
    </main>
  )
}

export default App
