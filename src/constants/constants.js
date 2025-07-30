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

export const title = ['성', '실', '함', '과', ' ', '학', '습', '능', '력', '을', ' ', '갖', '춘', '\n',
    '프', '론', '트', '엔', '드', '  ', '개', '발', '자', " ", '김', '진', '화', ' ', 'v', 'e', 'r', '.', '2', '0', '2', '5']

export const slogan = ['하', '고', '싶', '은', ' ', '것', '을', ' ', '하', '자']


export const expData = [
    {company:"엔조이소프트", department:"기술연구소", duraiton:"2025.03-2025.07", description:"- React, Next, Electron 등을 활용한 키오스크 앱, 관리자 웹, 신원인증 앱 개발"},
    {company:"프로지스트", department:"개발팀", duraiton:"2024.08-2025.02", description:"- React, Next, Electron 등을 활용한 웹 Front end 개발\n- 쇼핑몰, 홈페이지, ERP등 개발 참여\n- 고객사 파견 경험 有"},
]

export const projectData = [
    {image: img5, title:"이음프로퍼티 홈페이지", description:"회사(자산관리사) 홈페이지", task:"· 홈페이지 기획, 디자인, 전체 구현", skills:[sk_react, sk_vite, sk_gsap, sk_sass]},
    {image: img5, title:"키업 신원인증 앱", description:"앱카드 인증을 통한 신원인증 기능 지원 웹앱", task:"· 신규 앱 구현", skills:[sk_next, sk_typescript, sk_zustand, sk_gsap, sk_sass]},
    {image: img5, title:"키업패스 앱", description:"무인매장 운영을 위한 출입인증 기능 지원 키오스크 앱", task:"· 전체 유지 보수\n· 전체 코드 리팩토링\n· 신규 기능(앱카드 인증 기능 등) 구현", skills:[sk_react, sk_electron, sk_express, sk_typescript, sk_zustand, sk_socket, sk_sass, sk_pm2]},
    {image: img5, title:"키업패스 관리자웹", description:"출입인증 앱 관리자 사이트", task:"· 전체 유지 보수\n· 전체 코드 리팩토링\n· 신규 기능(키오스크 스크린 모니터링 등) 구현", skills:[sk_react, sk_typescript, sk_zustand, sk_tailwind, sk_socket, sk_sass, sk_pm2]},
    {image: img5, title:"시즌마켓(도매)", description:"제주 특산 농수산물 및 김치 도매 쇼핑몰", task:"· 신규 사이트 프론트엔드 전체 구현", skills:[sk_react, sk_sass,]},
    {image: img4, title:"시즌마켓(소매)", description:"제주 특산 농수산물 쇼핑몰", task:"· 신규 사이트 프론트엔드 전체 구현", skills:[sk_next, sk_typescript, sk_sass]},
    {image: img3, title:"프로지스트 홈페이지", description:"회사(IT, 웹/플랫폼 개발사) 홈페이지", task:"· 신규 사이트 전체 구현", skills:[sk_react, sk_sass, sk_gsap]},
    {image: img2, title:"만쿠무역 ERP 앱", description:"회사(무역) ERP 앱", task:"· 신규 앱 프론트 구현", skills:[sk_electron, sk_sass, sk_gsap]},
    {image: img1, title:"만쿠무역 홈페이지", description:"회사(무역) 홈페이지", task:"· 신규 사이트 전체 구현", skills:[sk_react, sk_sass, sk_gsap]},
    {image: img0, title:"Gimunity / medibot", description:"국비지원교육 프로젝트", task:"구글 드라이브 문서 참고", skills:[sk_react, sk_redux, sk_mysql, sk_java]},
]