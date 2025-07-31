import { useEffect, useRef, useState } from 'react'
import introVideo from "./assets/intro.mp4"
import './styles/index.scss'
import { expData, projectData, skillData, slogan } from './constants/constants'
import { MenuModal } from './components/menuModal'
import { MenuButton } from './components/MenuButton'
import { SectionLayout } from './components/sectionLayout'
import { DownloadOutlined } from '@ant-design/icons'
import { ExpCard, ProjectCard, SkillCard } from './components/components'


function App() {
  
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isMenuButtonOn, setIsMenuButtonOn] = useState(false);
    const [colorChange, setColorChange] = useState(false)
    const [currentSection, setCurrentSection] = useState("aboutMe");
    
    const modalOpenTimerRef = useRef(null);
    const navOnTimerRef = useRef(null);

    const sectionRefs = useRef({
      aboutMe: null,
      experiences: null,
      projects: null,
      skills: null,
    });

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

      const handleScroll = () => {
        if (!sectionRefs?.current) return;
        const aboutMeTop = sectionRefs.current.aboutMe?.getBoundingClientRect().top;
        const experiencesTop = sectionRefs.current.experiences?.getBoundingClientRect().top;
        const projectsTop = sectionRefs.current.projects?.getBoundingClientRect().top;
        // const skillsTop = sectionRefs.current.getBoundingClientRect().top;
        
        if (aboutMeTop <= 200) {
          setCurrentSection(sectionRefs.current.aboutMe.id)
        }
        if (experiencesTop <= 200) {
          setCurrentSection(sectionRefs.current.experiences.id)
        }
        if (projectsTop <= 200) {
          setCurrentSection(sectionRefs.current.projects.id)
        }
      }
      window.addEventListener('scroll', handleScroll)

      return ()=>{
          clearTimeout(modalOpenTimerRef);
          clearTimeout(navOnTimerRef);
          // window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
      }
    }, [])

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
        <SectionLayout title={"About me"} id={"aboutMe"} ref={el => sectionRefs.current.aboutMe = el}>
          <div>
              <div className='slogan'>
                <span>{slogan.map((v, i)=>(
                  <span key={i} id={`char_${i}`}>{v}</span>
                ))}</span>
                는 마음으로 개발자의 꿈을 꾸게 되었습니다.
              </div>

              {`코딩하는 것이 즐거운 프론트엔드 개발자입니다.
                일정이 촉박하거나 업무 진척이 예정보다 늦어질 때에도 개인 시간을 투자해서라도 끈기 있게 해냈습니다.
                또, 다양한 자격증들도 단기간에 취득할 만큼 학습 능력도 자신 있습니다.`}

              <div>
                정보처리기사 <span>2024. 09 / 한국산업인력공단</span><br/>
                2종보통운전면허 <span>2015. 12 / 경찰청(운전면허시험관리단)</span><br/>
                ICDL ( International Computer Driving Licence) <span>2011. 07  (기본 office 활용 능력 인증 자격)</span>
              </div>

              <div>
                📞 010-8835-7380<br/>
                ✉️ 12cometome@naver.com<br/>
                🏠 서울 강남구 역삼동 거주<br/>
              </div>

              {/* <div>
                이력서 다운로드
                <DownloadOutlined style={{fontSize:22}}/>
              </div> */}
            </div>
        </SectionLayout>
        
        {/* 경력 */}
        <SectionLayout title={"Experiences"} id={"experiences"} ref={el => sectionRefs.current.experiences = el}>
          <div>
            {expData.map((v)=>(
              <ExpCard key={v.company} company={v.company} department={v.department} duration={v.duraiton} description={v.description}/>
            ))}
          </div>
        </SectionLayout>

        {/* 프로젝트 */}
        <SectionLayout title={"Projects"} id={"projects"} ref={el => sectionRefs.current.projects = el}>
          <div>
            {projectData.map((v)=>(
              <ProjectCard key={v.title} image={v.image} title={v.title} description={v.description} skills={v.skills} task={v.task}/>
            ))}
          </div>
        </SectionLayout>

        {/* 스킬 */}
        <SectionLayout title={"Skills"} id={"skills"} ref={el => sectionRefs.current.skills = el}>
          <div>
            {skillData.map((v, i)=>(
              <SkillCard key={i} description={v.description} skills={v.skills}/>
            ))}
          </div>
        </SectionLayout>



      </main>

      <MenuButton sectionRefs={sectionRefs} isMenuButtonOn={isMenuButtonOn} colorChange={colorChange} onClick={()=>!isMenuButtonOn?setIsMenuButtonOn(true):setIsMenuModalOpen(false)}/>
      <MenuModal sectionRefs={sectionRefs} isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} currentSection={currentSection} setCurrentSection={setCurrentSection}/>

    </>
  )
}

export default App
