export const CircularText = ({className}) => (
    <svg className={className}
    width="150"
    height="150"
    viewBox="0 0 180 180"  // x, y, width, height
    xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* 중심(75,95), 반지름 60짜리 원형 경로 정의 */}
            <path
            id="circlePath"
            d="
                M75,95
                m-60,0
                a25,25 0 1,1 150,0
                a25,25 0 1,1 -150,0
            "
            />
        </defs>

        <text
            fill="white"
            fontSize="16"
            fontWeight="700"
            letterSpacing="5"
        >
            <textPath
                href="#circlePath"
                startOffset="50%"      /* 텍스트 중앙 정렬 */
                textAnchor="middle"    /* 중앙 기준 정렬 */
            >
            - Kim Jinhwa – Front-end Engineer
            </textPath>
        </text>
    </svg>
);

export const ExpCard = ({company, idx, department, duration, description}) => (
    <article className='exp-card' id={`exp-card_${idx}`}>
        <div>
        {company}<br/>
        <span>
            {department}<br/>
            {duration}<br/>
            </span>
        </div>
        <div>
            {description}
        </div>
    </article>
)

export const ProjectCard = ({title, image, skills, description, idx, href, task, device=""}) => (
    <article className={`project-card`} id={`project-card_${idx}`}>
        <a className={`${"image"} ${device}`} href={href} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="image"/>
            <div>
                <div>{title}</div>
                {/* <div>{description}</div> */}
                <div className={`${device==="kiosk"? "wrap":""}`}>{task}</div>
                <div>{skills.map((v, i)=>(
                    <img key={i} src={v} alt="skill icon"/>))}
                </div>
            </div>
        </a>
    </article>
)

export const SkillCard = ({skills, description, idx}) => (
    <article className='skill-card'>
        <div>{description}</div>
        <div>{skills.map((v, i)=>(
            <div key={i} id={`skill_${idx}_${i}`}>
                <img src={v.src} alt="skill icon"/>
                <span>{v.tip}</span>
            </div>))}
        </div>
    </article>
)

export const Alert = ({on}) => (
    <article className={`alert ${on? "on" : "off"}`}>
        copied!
    </article>
)