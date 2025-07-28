import { useEffect, useRef, useState } from 'react'
import introVideo from "./assets/intro.mp4"
import './styles/index.scss'
import { slogan } from './constants/constants'
import { MenuModal } from './components/menuModal'
import { MenuButton } from './components/MenuButton'


function App() {
  
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isMenuButtonOn, setIsMenuButtonOn] = useState(false);
    const [colorChange, setColorChange] = useState(false)
    const [currentSection, setCurrentSection] = useState("aboutMe");
    
    const modalOpenTimerRef = useRef(null);
    const navOnTimerRef = useRef(null);

    const aboutMeRef = useRef(null);
    const experiencesRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    
    useEffect(()=>{
      const handleScroll = () => {
        
        if (!aboutMeRef?.current) return;
        const aboutMeTop = aboutMeRef.current.getBoundingClientRect().top;
        // const experiencesTop = experiencesRef.current.getBoundingClientRect().top;
        // const projectsTop = projectsRef.current.getBoundingClientRect().top;
        // const skillsTop = skillsRef.current.getBoundingClientRect().top;
        
        if (aboutMeTop <= 200) {
          console.log("dksljdlsjdl")
          setCurrentSection(aboutMeRef.current.id) // set 말고 ref 자체를 메뉴버튼에 전달해보자
        }
      }
        
      window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    useEffect(()=>{
        if (isMenuButtonOn) {
            modalOpenTimerRef.current = setTimeout(()=>setIsMenuModalOpen(true), 300)
        }
    }, [isMenuButtonOn])

    useEffect(()=>{
        if (!isMenuModalOpen) {
            modalOpenTimerRef.current = setTimeout(()=>setIsMenuButtonOn(false), 300)
        } 
    }, [isMenuModalOpen])
    
    useEffect(()=>{
      window.scrollTo(0, 0);
        // window.addEventListener("resize", handleResize);
        // handleResize(); // 최초 실행

      return ()=>{
          clearTimeout(modalOpenTimerRef);
          clearTimeout(navOnTimerRef);
          // window.removeEventListener('resize', handleResize);
          // window.removeEventListener('scroll', onScroll);
      }
    }, [])

    // const getDeviceType = () => {
    //     const width = window.innerWidth;
    //     if (width <= 1200)
    //         setDevice("tablet")
    //     else if (width <= 480)
    //         setDevice("mobile")
    //     else
    //         setDevice("desktop")
    // };

    // const handleResize = () => {
    //     getDeviceType();
    // };

  return (
    <>
      <main>
        {/* 타이틀 */}
        <section>
          <video id={'intro-video'} autoPlay muted loop playsInline>
            <source
                src={introVideo}
                type="video/mp4"/>
          </video>
          <div>
            <div>
              <span>성실함과 학습능력을 갖춘</span>
            </div>
            <div>
              <span>프론트엔드 개발자 <span>김진화</span> <span>ver.2025</span></span>
            </div>
          </div>
        </section>

        {/* 자기소개 */}
        <section ref={aboutMeRef} id={"aboutMe"}>
          <div>
            자기소개
          </div>
          <div>

            <div>
              {slogan.map((v, i)=>(
                <span key={i} id={`char_${i}`}>{v}</span>
              ))}
              <span>는 마음으로 개발자의 꿈을 꾸게 되었습니다.</span>
            </div>

            {`코딩하는 것이 즐거운 프론트엔드 개발자입니다.
              일정이 촉박하거나 업무 진척이 예정보다 늦어질 때에도 개인 시간을 투자해서라도 끈기 있게 해냈습니다. 
              또, 다양한 자격증들도 단기간에 취득할 만큼 학습 능력도 자신 있습니다.`}
            <div>
              📞 010-8835-7380
              ✉️ 12cometome@naver.com
              🏠 서울 강남구 역삼동 거주
            </div>

            <button>
              이력서 다운로드
            </button>
          </div>
        </section>
      </main>

      <MenuButton isMenuButtonOn={isMenuButtonOn} colorChange={colorChange} onClick={()=>!isMenuButtonOn?setIsMenuButtonOn(true):setIsMenuModalOpen(false)}/>
      <MenuModal isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} currentSection={currentSection}/>

    </>
  )
}

export default App
