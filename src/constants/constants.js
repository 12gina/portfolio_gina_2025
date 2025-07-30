import img0 from '../assets/images/project_0.png';
import img1 from '../assets/images/project_1.gif';
import img2 from '../assets/images/project_2.png';
import img3 from '../assets/images/project_3.gif';
import img4 from '../assets/images/project_4.gif';
import img5 from '../assets/images/project_5.gif';
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

export const menuList = [
    {menu:"ABOUT ME", id:"aboutMe"},
    {menu:"EXPERIENCES", id:"experiences"},
    {menu:"PROJECTS", id:"projects"},
    {menu:"SKILLS", id:"skills"},
]

export const skillIcons = {
    react: sk_react,
    typescript: sk_typescript,
    next: sk_next,
    tailwind: sk_tailwind,
    zustand: sk_zustand,
    electron: sk_electron,
    express: sk_express,
    socket: sk_socket,
    gsap: sk_gsap,
    antd: sk_antd,
    sass: sk_sass,
    vite: sk_vite,
}

export const title = ['성', '실', '함', '과', ' ', '학', '습', '능', '력', '을', ' ', '갖', '춘', '\n',
    '프', '론', '트', '엔', '드', '  ', '개', '발', '자', " ", '김', '진', '화', ' ', 'v', 'e', 'r', '.', '2', '0', '2', '5']

export const slogan = ['하', '고', '싶', '은', ' ', '것', '을', ' ', '하', '자']


export const expData = [
    {company:"엔조이소프트", department:"기술연구소", duraiton:"2025.03-2025.07", description:"- React, Next, Electron 등을 활용한 키오스크 앱, 관리자 웹, 신원인증 앱 개발"},
    {company:"프로지스트", department:"개발팀", duraiton:"2024.08-2025.02", description:"- React, Next, Electron 등을 활용한 웹 Front end 개발\n- 쇼핑몰, 홈페이지, ERP등 개발 참여\n- 고객사 파견 경험 有"},
]

export const projectData = [
    {image: img5, title:"이음프로퍼티 홈페이지", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[sk_react, sk_vite, sk_gsap]},
    {image: img5, title:"키업 신원인증", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img5, title:"키업패스 관리자 웹", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img5, title:"키업패스 앱", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img5, title:"시즌마켓(도매)", description:"제주 특산 농수산물 및 김치 도매 쇼핑몰", task:"", skills:[]},
    {image: img4, title:"시즌마켓(소매)", description:"제주 특산 농수산물 쇼핑몰", task:"", skills:[]},
    {image: img3, title:"프로지스트 홈페이지", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img2, title:"만쿠무역 ERP", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img1, title:"만쿠무역 홈페이지", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
    {image: img0, title:"Gimunity / medibot", description:"소속 회사 (IT, 웹/플랫폼 개발사) 홈페이지", task:"", skills:[]},
]