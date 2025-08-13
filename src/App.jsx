import { useEffect, useRef, useState } from 'react'
import introVideo from "./assets/intro.mp4"
import photo from "./assets/images/photo.jpg"
import './styles/index.scss'
import { certiData, expData, projectData, skillData, slogan, title1, title2 } from './constants/constants'
import { MenuModal } from './components/menuModal'
import { MenuButton } from './components/menuButton'
import { SectionLayout } from './components/sectionLayout'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Loading } from './components/loading'
import { GridCell } from './components/gridCell'
import { ExpCard, ProjectCard, SkillCard } from './components/components'
import { Subtitle } from './components/Subtitle'

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isMenuButtonOn, setIsMenuButtonOn] = useState(false);
  const [currentSection, setCurrentSection] = useState("title");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCellHover, setIsCellHover] = useState(Object.fromEntries(Array.from({ length: 576 }, (_, i) => [i + 1, false])));
  const [isMobile, setIsMobile] = useState(false);

  const modalOpenTimerRef = useRef(null);
  const navOnTimerRef = useRef(null);
  const sectionRefs = useRef({
    title: null,
    aboutMe: null,
    experiences: null,
    projects: null,
    skills: null,
  });

  const tlRef = useRef(null);
  const tl2Ref = useRef(null);
  const tl3Ref = useRef(null);
  const tl4Ref = useRef(null);

  useGSAP(()=>{

    if (!isLoaded) return;
    if (tlRef.current) return;

    tlRef.current = gsap.timeline({paused: true});

    title1.forEach((_, i)=>{
      tlRef.current.to(
        `#char1_${i}`,
        { duration: 2, y: "40%", scale: 1, opacity: 0.5, ease: "power2.out",
          rotate: i===0?"-10deg":i===1?"20deg":i===2?"-5deg":i===3?"10deg":"5deg"},
          i === 0 ? "<0.1" : "<0.3")
    })

    ScrollTrigger.create({
      animation: tlRef.current,
      trigger: '#title',
      start: "top top",
      end: "+=30%",
      pin: '#title',
      onEnter: () => tlRef.current.play(0),
      toggleActions: "complete reverse play reverse",
      // scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    },);
    
    let tl2 = gsap.timeline({delay:2.5})
    tl2.to(`#subtitle`, {duration: 0.3, opacity:1, ease: "power2.out"})
      .to(`.menu-button`, {duration: 0.3, opacity:1, ease: "power2.out"}, "<0.1")

  },{dependencies: [isLoaded]})


  useGSAP(()=>{

    tl2Ref.current=gsap.timeline();
    tl2Ref.current.to("#name", {duration: 0.3, opacity:1, y:0, ease: "power2.out"},)
      .to("#summary", {duration: 0.3,  opacity:1, y:0, ease: "power2.out"}, "<0.1")
      .to("#certification", {duration: 0.3,  opacity:1, y:0, ease: "power2.out"}, "<0.1")

    ScrollTrigger.create({
      animation: tl2Ref.current,
      trigger: "#aboutMe",
      start: "top 20%",
      end: "+=80%",
      // pin: "#aboutMe",
      onEnter: () => tl2Ref.current.play(),
      toggleActions: 'play none restart none',
      // scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });

    tl3Ref.current=gsap.timeline();
    expData.forEach((_, i)=>{
      tl3Ref.current.to(
        `#exp-card_${i}`,
        { duration: 1.5, x: 0, opacity: 1, ease: "power2.out"},
          i === 0 ? "" : "<0.2")
    })

    ScrollTrigger.create({
      animation: tl3Ref.current,
      trigger: "#experiences",
      start: "top top+=30%",
      end: "+=80%",
      onEnter: () => tl3Ref.current.play(),
      toggleActions: 'play reverse restart reverse',
      // scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });

    tl4Ref.current=gsap.timeline();
    projectData.forEach((_, i)=>{
      tl4Ref.current.to(
        `#project-card_${i}`,
        { duration: 1, y: 0, opacity: 1, ease: "power2.out"},
          i === 0 ? "" : ">-0.2")
    })

    ScrollTrigger.create({
      animation: tl4Ref.current,
      trigger: "#projects",
      start: "top top",
      end: "+=250%",
      pin: true,
      onEnter: () => tl4Ref.current.play(),
      toggleActions: 'play none restart none',
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    });

  },{})

  const hanCellOn = (idx) => {
    setIsCellHover( v => ({...v, [idx]: true}))
  }

  const hanCellOff = (idx) => {
    setTimeout(() => {
      setIsCellHover(v => ({ ...v, [idx]: false }));
    }, 5 * 1000);
  };

  useEffect(()=>{
      if (currentSection!=='aboutMe') {
          setIsCellHover(Object.fromEntries(Array.from({ length: 576 }, (_, i) => [i + 1, false])))
      }
  }, [currentSection])

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
      const titleTop = sectionRefs.current.title?.getBoundingClientRect().top;
      const aboutMeTop = sectionRefs.current.aboutMe?.getBoundingClientRect().top;
      const experiencesTop = sectionRefs.current.experiences?.getBoundingClientRect().top;
      const projectsTop = sectionRefs.current.projects?.getBoundingClientRect().top;
      const skillsTop = sectionRefs.current.skills?.getBoundingClientRect().top;
      
      if (titleTop <= 200) {
        setCurrentSection(sectionRefs.current.title.id)
      }
      if (aboutMeTop <= 200) {
        setCurrentSection(sectionRefs.current.aboutMe.id)
      }
      if (experiencesTop <= 200) {
        setCurrentSection(sectionRefs.current.experiences.id)
      }
      if (projectsTop <= 200) {
        setCurrentSection(sectionRefs.current.projects.id)
      }
      if (skillsTop <= 200) {
        setCurrentSection(sectionRefs.current.skills.id)
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

      <video id={'intro-video'} onCanPlayThrough={()=>setIsLoaded(true)} autoPlay muted loop playsInline
        style={{width: "100%", height: '100vh', position:"fixed", inset:0, color: "white", overflowX: "hidden", objectFit:'cover', zIndex: -1 }}>
        <source src={introVideo} type="video/mp4"/>
      </video>
      
      <main id={'main'} style={{width: "100vw", height: 'auto', overflowX:'hidden', color: "white", position: "relative", }}> 
      
      {/* 타이틀 */}
      <section id={"title"} ref={el => sectionRefs.current.title = el} style={{width: "100%", height: '100vh', paddingBottom:'25%', display: 'flex', flexDirection: "column", justifyContent: "flex-end", alignItems:"center",}}>
        
        <div id={"title1"} style={{width: "150%", display: 'flex', fontWeight: 900, textAlign: "center", justifyContent: "center", textShadow: "5px 5px 3px rgba(0, 0, 0, 0.5)", fontSize: 'clamp(3.8vw, 38vw, 38vw)', letterSpacing: "-5vw", margin: "auto 0"}}>
          {title1.map((v, i)=>(
            <span key={i} id={`char1_${i}`} style={{opacity: 0, scale:0.8, transform: "translateY(-200%)",
              }}>{v}</span>
          ))}
        </div>
      </section>

      {/* 자기소개 */}
      <section style={{backgroundColor: 'var(--color-blue-90)', width: '100%', height: '100vh', padding: '5rem', boxSizing:'border-box'}} id={"aboutMe"} ref={el => sectionRefs.current.aboutMe = el}>
        <div style={{margin: "auto", width: '100%', height: '100%', maxWidth: 1440, display:'grid', columnGap:'3em', gridTemplateColumns:"1fr 1fr",}}>

          <div style={{width: '100%', height: '100%', rowGap:'2em', display:'flex', flexDirection:"column", justifyContent:'center', alignItems:'flex-end'}}>
            
            <div id={"name"}>김 진 화</div>
            <div id={"summary"}>
              끈기 / 집요함 / 빠른 습득력<br/><br/>
              📞 010-8835-7380<br/>
              ✉️ 12cometome@naver.com<br/>
              🏠 서울 강남구 역삼동 거주<br/>
              🏫 동덕여자대학교 국어국문학 졸업 
              {/* <span>2008.03 - 2012.08</span> */}
            </div>
            
            <div id={"certification"}>
              {certiData.map((v)=>(
                <div key={v.title}>
                  {v.title} <span key={v.title}>{v.date} / {v.authority}</span><br/>
                </div>
              ))}
            </div>
            
          </div>

          <div style={{position:'relative', padding:'5rem', boxSizing:'border-box', width: '100%', height: '100%', display: 'flex', placeItems:'center'}}>
            <img id={"photo"} src={photo} style={{width: 'calc(100% - 5rem)', margin: 'auto', maxWidth:550, objectFit:'contain', }} alt='photo'/>
            <div style={{width: 'calc(100% - 5rem)', height: '100%', position: 'absolute', inset: 0, display:'grid', gridTemplateColumns:'repeat(8, 1fr)', gridTemplateRows:'repeat(10, 1fr)'}}>
              {Array.from({length:80}, (_, i)=>(
                <GridCell key={i} idx={i} hanCellOn={hanCellOn} hanCellOff={hanCellOff} isCellHover={isCellHover} />
              ))}
            </div>
          </div>

        </div>
      </section>
        
        {/* 경력 */}
        <section style={{width: '100%', height: '100vh', padding: '10rem', boxSizing:'border-box'}} id={"experiences"} ref={el => sectionRefs.current.experiences = el}>
          <div>
            {expData.map((v, i)=>(
              <ExpCard key={v.company} company={v.company} department={v.department} duration={v.duraiton} description={v.description} idx={i}/>
            ))}
          </div> 
        </section>

        {/* 프로젝트 */}
        <section style={{width: '100%', height: '100vh', padding: '10rem', boxSizing:'border-box'}} id={"projects"} ref={el => sectionRefs.current.projects = el}>
          <div>
            <div>
              {projectData.map((v,i)=>(
                <ProjectCard key={v.title} image={v.image} title={v.title} description={v.description} skills={v.skills} task={v.task} device={v.device} href={v.href} idx={i}/>
              ))}
            </div>
          </div>
        </section>

        {/* 스킬 */}
        <section style={{width: '100%', height: '100vh', padding: '10rem', boxSizing:'border-box'}} id={"projects"} ref={el => sectionRefs.current.projects = el}>
          {skillData.map((v, i)=>(
            <SkillCard key={i} description={v.description} skills={v.skills} idx={i}/>
          ))}
        </section>

      </main>

      <Loading isLoaded={isLoaded}/>
      <Subtitle currentSection={currentSection}/>
      <MenuButton sectionRefs={sectionRefs} isMenuButtonOn={isMenuButtonOn} onClick={()=>!isMenuButtonOn?setIsMenuButtonOn(true):setIsMenuModalOpen(false)}/>
      <MenuModal sectionRefs={sectionRefs} isMenuModalOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} currentSection={currentSection} setCurrentSection={setCurrentSection}/>

    </>
  )
}

export default App
