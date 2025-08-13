import img0 from '../assets/images/project_0.png';
import img1 from '../assets/images/project_1.gif';
import img2 from '../assets/images/project_2.png';
import img3 from '../assets/images/project_3.gif';
import img4 from '../assets/images/project_4.gif';
import img5 from '../assets/images/project_5.gif';
// import img6 from '../assets/images/project_6.gif';
import img7 from '../assets/images/project_7.gif';
import img8 from '../assets/images/project_8.gif';
import img9 from '../assets/images/project_9.gif';
import img10 from '../assets/images/project_10.gif';
import sk_antd from '../assets/images/sk_antd.webp';
import sk_electron from '../assets/images/sk_electron.png';
import sk_express from '../assets/images/sk_express.png';
import sk_gsap from '../assets/images/sk_gsap.png';
import sk_next from '../assets/images/sk_next.webp';
import sk_react from '../assets/images/sk_react.webp';
import sk_sass from '../assets/images/sk_sass.webp';
import sk_socket from '../assets/images/sk_socket.png';
import sk_tailwind from '../assets/images/sk_tailwind.webp';
import sk_typescript from '../assets/images/sk_typescript.webp';
import sk_vite from '../assets/images/sk_vite.webp';
import sk_zustand from '../assets/images/sk_zustand.webp';
import sk_pm2 from '../assets/images/sk_pm2.png';
import sk_redux from '../assets/images/sk_redux.webp';
import sk_mysql from '../assets/images/sk_mysql.png';
import sk_java from '../assets/images/sk_java.png';
import sk_python from '../assets/images/sk_python.png';


export const menuList = [
    {menu:"ABOUT ME", id:"aboutMe"},
    {menu:"EXPERIENCES", id:"experiences"},
    {menu:"PROJECTS", id:"projects"},
    {menu:"SKILLS", id:"skills"},
]

// export const title = ['성', '실', '함', '과', ' ', '학', '습', '능', '력', '을', ' ', '갖', '춘', '\n',
//     '프', '론', '트', '엔', '드', '  ', '개', '발', '자', " ", '김', '진', '화', ' ', 'v', 'e', 'r', '.', '2', '0', '2', '5']

// export const title1 = ['F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D', '\u00A0', 'E', 'N', 'G', 'I', 'N', 'E', 'E', 'R']
export const title1 = ['F', 'R', 'O', 'N', 'T']
export const title2 = ['K', 'I', 'M', '\u00A0', 'J', 'I', 'N', 'H', 'W', 'A']

export const subtitles = [{id:"title", text:'Front-end Engineer KIM JINHWA\'s Stories'}, {id:"aboutMe", text:'About Me'}, {id:"experiences", text:'Experiences'}, {id:"projects", text: 'Projects'}, {id:"skills", text: 'Skills'}]
export const slogan = ['하', '고', '싶', '은', '\u00A0', '것', '을', '\u00A0', '하', '자']

export const certiData= [
    {title:"정보처리기사", date: "2024. 09", authority:"한국산업인력공단"},
    {title:"2종보통운전면허", date: "2015. 12", authority:"경찰청(운전면허시험관리단)"},
    {title:"공인중개사", date: "2015. 12", authority:"한국산업인력공단"},
    {title:"ICDL", date: "2011. 07", authority:"한국생산성본부 (MS office 활용 능력 인증 자격)"},
]

export const expData = [
    {company:"엔조이소프트", department:"기술연구소", duraiton:"2025.03-2025.07", description:"- React, Electron 등을 활용한 키오스크 앱, 관리자 웹 유지보수 및 신규 기능 개발\n- Next JS를 활용한 신원인증 앱 개발"},
    {company:"프로지스트", department:"개발팀", duraiton:"2024.08-2025.02", description:"- React, Next, Electron 등을 활용한 웹 Front end 개발\n- 쇼핑몰, 홈페이지, ERP등 개발 참여\n- 고객사 파견 경험 有"},
    {company:"웹서비스 풀스텍 개발\n(교육)", department:"이젠아카데미강남점", duraiton:"2023.11-2024.05", description:"- Java, Python을 활용한 AI 챗봇 개발\n- DBMS MySQL 데이터베이스 구축\n- Spring Boot Framework 활용 등"},
]

export const projectData = [
    {image: img10, device: "", title:"이음프로퍼티 홈페이지", description:"회사(부동산 컨설팅) 홈페이지", task:"· 홈페이지 기획, 디자인, 전체 구현", skills:[sk_react, sk_vite, sk_gsap, sk_sass], href:"https://jazzy-sugar-dbf.notion.site/247c230239808008b9aac5668498f673"},
    {image: img9, device: "mobile", title:"키업 신원인증 앱", description:"앱카드 인증을 통한 신원인증 기능 지원 웹앱", task:"· 신규 앱 구현", skills:[sk_next, sk_typescript, sk_zustand, sk_gsap, sk_sass], href:"https://jazzy-sugar-dbf.notion.site/247c23023980807f9bc5d2ce4663ca59"},
    {image: img8, device: "kiosk", title:"키업패스 앱", description:"무인매장 운영을 위한 출입인증 기능 지원 키오스크 앱", task:"· 유지 보수\n· 전체 코드 리팩토링\n· 신규 기능(앱카드 인증 기능 등) 구현", skills:[sk_react, sk_electron, sk_express, sk_typescript, sk_zustand, sk_socket, sk_sass, sk_pm2], href:"https://jazzy-sugar-dbf.notion.site/247c2302398080fda07ce96e488bafa3"},
    {image: img7, device: "", title:"키업패스 관리자웹", description:"출입인증 앱 관리자 사이트", task:"· 유지 보수\n· 전체 코드 리팩토링\n· 신규 기능(키오스크 스크린 모니터링 등) 구현", skills:[sk_react, sk_typescript, sk_zustand, sk_tailwind, sk_socket, sk_sass, sk_pm2], href: "https://jazzy-sugar-dbf.notion.site/247c2302398080e7b669cce8fbf881cb"},
    {image: img5, device: "", title:"시즌마켓(도매)", description:"제주 특산 농수산물 및 김치 도매 쇼핑몰", task:"· 신규 사이트 프론트엔드 전체 구현", skills:[sk_react, sk_sass,], href:"https://jazzy-sugar-dbf.notion.site/17ac230239808132b464ceb9b610416b"},
    {image: img4, device: "", title:"시즌마켓(소매)", description:"제주 특산 농수산물 쇼핑몰", task:"· 신규 사이트 프론트엔드 전체 구현", skills:[sk_next, sk_typescript, sk_sass], href:"https://jazzy-sugar-dbf.notion.site/17ac23023980815390b2d6f8e490dc87"},
    {image: "", device: "", title:"", description:"", task:"", skills:[]},
    {image: img3, device: "", title:"프로지스트 홈페이지", description:"회사(IT, 웹/플랫폼 개발사) 홈페이지", task:"· 신규 사이트 전체 구현", skills:[sk_react, sk_sass, sk_gsap], href:"https://jazzy-sugar-dbf.notion.site/17ac23023980813ea5ffc29ccea48d80"},
    {image: img2, device: "", title:"만쿠무역 ERP 앱", description:"회사(무역) ERP 앱", task:"· 신규 앱 프론트 구현", skills:[sk_electron, sk_sass, sk_gsap], href:"https://jazzy-sugar-dbf.notion.site/17ac2302398081f9aaaaf40bc8417830"},
    {image: img1, device: "", title:"만쿠무역 홈페이지", description:"회사(무역) 홈페이지", task:"· 신규 사이트 전체 구현", skills:[sk_react, sk_sass, sk_gsap], href:"https://jazzy-sugar-dbf.notion.site/17ac2302398081f1ab30db323f57fc3a"},
    {image: img0, device: "", title:"Gimunity / medibot", description:"국비지원교육 프로젝트", task:"구글 드라이브 문서 참고", skills:[sk_python, sk_react, sk_redux, sk_mysql, sk_java], href:"https://drive.google.com/file/d/18AePbZcXtHWM3nxMcX4ZF2m3AUGynmzV/view?pli=1"},
]

export const skillData = [
    {description: "능숙하게 사용할 수 있습니다.",
        skills:[{src:sk_react, tip:"React JS"}, {src:sk_sass, tip:"Sass"}]},
    {description: "주요 기능을 적절하게 활용할 수 있습니다.",
        skills:[{src:sk_electron, tip:"Electron JS"}, {src:sk_express, tip:"express"}, {src:sk_next, tip:"Next JS"}, {src:sk_vite, tip:"Vite"}, {src:sk_typescript, tip:"Typescript"}, {src:sk_java, tip:"Java"},
            {src:sk_zustand, tip:"Zustand"}, {src:sk_socket, tip:"Socket"}, {src:sk_tailwind, tip:"Tailwind"}, {src:sk_antd, tip:"Antd"}, {src:sk_gsap, tip:"GSAP"}, {src:sk_python, tip:"Python"}, {src:sk_mysql, tip:"Mysql"}]},
    {description: "사용해본 경험이 있습니다.",
        skills:[{src:sk_pm2, tip:"PM2"}, {src:sk_redux, tip:"Redux"}]},
]