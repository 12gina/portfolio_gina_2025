import { useEffect, useRef, useState } from 'react'
import introVideo from "./assets/intro.mp4"
import photo from "./assets/images/photo.jpg"
import './styles/index.scss'
import { certiData, expData, projectData, skillData, slogan, title1, title2 } from './constants/constants'
import { MenuModal } from './components/menuModal'
import { MenuButton } from './components/menuButton'
import { SectionLayout } from './components/sectionLayout'
import { ExpCard, ProjectCard, SkillCard } from './components/components'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Loading } from './components/loading'

gsap.registerPlugin(ScrollTrigger);

function App() {
  
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const [isMenuButtonOn, setIsMenuButtonOn] = useState(false);
    const [currentSection, setCurrentSection] = useState("aboutMe");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const modalOpenTimerRef = useRef(null);
    const navOnTimerRef = useRef(null);
    const sectionRefs = useRef({
      aboutMe: null,
      experiences: null,
      projects: null,
      skills: null,
    });

    useGSAP(()=>{

      if (!isLoaded) return;
      
      let tl = gsap.timeline({
        paused: true,
      });

      title1.forEach((_, i)=>{
        tl.to(
          `#char1_${i}`,
          { duration: 0.5, y: 0, scale: 1, opacity: 1, ease: "power2.out" },
            i === 0 ? undefined : "<0.1")
      })
      title2.forEach((_, i)=>{
        tl.to(
          `#char2_${i}`,
          { duration: 0.5, y: 0, scale: 1, opacity: 1, ease: "power2.out" },
            i === 0 ? "<0.1" : "<0.1")
      })
      
      tl.to('#hr1', {duration: 0.5, x: 0, ease: "power2.out" },"<0.2")
      .to('#hr2', {duration: 0.5, x: 0, ease: "power2.out" }, "<")
      .to('.menu-button', {duration: 0.3, opacity: 1, ease: "power2.out" }, ">0.1")

      ScrollTrigger.create({
        animation: tl,
        trigger: "#page",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        // onEnter: ()=>tl.play(),
        // toggleActions: 'restart none restart none',
        // scrub: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },);

      ScrollTrigger.create({
        trigger: "#page",
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / 4,      // 구간 비율 (예: 섹션 4개면 1/4)
          duration: 0.3,      // 스냅 애니메이션 시간(초)
          delay: 0,           // 스냅 전 대기시간
          ease: "power1.inOut"
        }
      })

    },[isLoaded])

    useGSAP(()=>{

      // let tl2 = gsap.timeline();
      // tl2.to("#photo", {duration: 0.5,  scale: 1, rotate:360, ease: "power2.out"}, "<0.2")

      let tl3 = gsap.timeline();
      expData.forEach((_, i)=>{
        tl3.to(
          `#exp-card_${i}`,
          { duration: 0.3, opacity: 1, y: 0, ease: "power2.out" })})

      let tl4 = gsap.timeline();
        tl4.to('#project1', {duration: 0.5,  x: 0, ease: "power2.out"})
        .to('#project2', {duration: 0.5,  x: 0, ease: "power2.out" }, "<0.2") 
      
      let tl5 = gsap.timeline();
      skillData.forEach((item, idx)=>{
        item.skills.forEach((_, i)=>{
          tl5.to(
                  `#skill_${idx}_${i}`,
                  { duration: 0.3, opacity: 1, scale: 1.2, ease: "sine.in" },
                    i === 0 ? undefined : "<-0.25"
            ).to(
              `#skill_${idx}_${i}`,
                { duration: 0.2, scale: 1, ease: "sine.in" },
                ">"
          )
        })
      })
      
      // ScrollTrigger.create({
      //   animation: tl2,
      //   trigger: "#aboutMe",
      //   start: "top top",
      //   end: "+=150%",
      //   toggleActions: 'restart none restart none',
      //   onEnter: () => tl2.play(),
      //   invalidateOnRefresh: true,
      // },);

      ScrollTrigger.create({
        animation: tl3,
        trigger: "#experiences",
        start: "topc center",
        end: "center center",
        scrub: 1,
        toggleActions: 'restart none restart none',
        onEnter: () => tl3.restart(),
        invalidateOnRefresh: true,
        // markers: true
      },);

      ScrollTrigger.create({
        animation: tl4,
        trigger: "#projects",
        start: "top +=60%",
        toggleActions: 'restart none restart none',
        onEnter: () => tl4.play(),
        invalidateOnRefresh: true,
      },);

      ScrollTrigger.create({
        animation: tl5,
        trigger: "#skills",
        start: "top center",
        toggleActions: 'restart none restart none',
        onEnter: () => tl5.play(),
        invalidateOnRefresh: true,
      },);

    },[])

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
      
      const handleResize = () => {
        if (window.innerWidth <= 480) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };

      handleResize();

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
      window.addEventListener("resize", handleResize);

      return ()=>{
          setIsLoaded(false);
          clearTimeout(modalOpenTimerRef);
          clearTimeout(navOnTimerRef);
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
      }

    }, [])

  return (
    <>
      <main id={"page"}>

          <video id={'intro-video'} onCanPlayThrough={()=>setIsLoaded(true)} autoPlay muted loop playsInline>
            <source src={introVideo} type="video/mp4"/>
          </video>
        {/* 타이틀 */}
        <div className='title-wrap'>

        
        <section id={"title"}>


          <div>
            <div id={"title1"}>
              {title1.map((v, i)=>(
                <span key={i} id={`char1_${i}`}>{v}</span>
              ))}
            </div>

            <div>
              <div id={"hr1"}/>
              <div id={"hr2"}/>
            </div>

            <div id={"title2"}>
              {title2.map((v, i)=>(
                <span key={i} id={`char2_${i}`}>{v}</span>
              ))}
            </div>
          </div>

        </section>
        </div>

        {/* 자기소개 */}
        <SectionLayout title={"About me"} id={"aboutMe"} ref={el => sectionRefs.current.aboutMe = el}>
          <div>
            <span className='slogan'>
              <span>{slogan.map((v, i)=>(
                <span key={i} id={`char_${i}`}>{v}</span>
              ))}</span>
            </span> 는 마음으로 개발자의 꿈을 꾸게 되었습니다.
          </div>

          {`일정이 촉박하거나 업무 진척이 예정보다 늦어질 때에도 개인 시간을 투자해서라도 끈기 있게 해냈습니다.
            또, 다양한 자격증들도 단기간에 취득할 만큼 학습 능력도 자신 있습니다.`}

          <div>
            {certiData.map((v)=>(
              <div key={v.title}>
                {v.title} <span key={v.title}>{v.date} / {v.authority}</span><br/>
              </div>
            ))}
          </div>

          <div>
            <img id={"photo"} src={photo} alt='photo'/>
            <div id={"summary"}>
              📞 010-8835-7380<br/>
              ✉️ 12cometome@naver.com<br/>
              🏠 서울 강남구 역삼동 거주<br/>
              🏫 동덕여자대학교 국어국문학 졸업 <span>2008.03 - 2012.08</span>
            </div>
          </div>
        </SectionLayout>
        
        {/* 경력 */}
        <SectionLayout title={"Experiences"} id={"experiences"} ref={el => sectionRefs.current.experiences = el}>
            {expData.map((v, i)=>(
              <ExpCard key={v.company} company={v.company} department={v.department} duration={v.duraiton} description={v.description} idx={i}/>
            ))}
        </SectionLayout>

        {/* 프로젝트 */}
        <SectionLayout title={"Projects"} id={"projects"} ref={el => sectionRefs.current.projects = el}>
          <div id={`project1`}>
            {projectData.slice(0,3).map((v,i)=>(
              <ProjectCard key={v.title} image={v.image} title={v.title} description={v.description} skills={v.skills} task={v.task} device={v.device} href={v.href} idx={i}/>
            ))}
          </div>
          <div id={`project2`}>
            {projectData.slice(3, projectData.length).map((v,i)=>(
              <ProjectCard key={v.title} image={v.image} title={v.title} description={v.description} skills={v.skills} task={v.task} device={v.device} href={v.href} idx={i+3}/>
            ))}
          </div>
        </SectionLayout>

        {/* 스킬 */}
        <SectionLayout title={"Skills"} id={"skills"} ref={el => sectionRefs.current.skills = el}>
          {skillData.map((v, i)=>(
            <SkillCard key={i} description={v.description} skills={v.skills} idx={i}/>
          ))}
        </SectionLayout>

      </main>

      <Loading isLoaded={isLoaded}/>
      <MenuButton sectionRefs={sectionRefs} isMenuButtonOn={isMenuButtonOn} onClick={()=>!isMenuButtonOn?setIsMenuButtonOn(true):setIsMenuModalOpen(false)}/>
      <MenuModal sectionRefs={sectionRefs} isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} currentSection={currentSection} setCurrentSection={setCurrentSection}/>

    </>
  )
}

export default App
