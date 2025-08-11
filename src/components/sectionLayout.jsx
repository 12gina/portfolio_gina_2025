export const SectionLayout = ({ref, id, title, children}) => {

    return (
        <section ref={ref} id={id} style={{width: '100%', height: '100vh', fontSize: "clamp(0.2vw, 1em, 1em)", display:'flex', justifyContent: 'center', padding:'6rem', boxSizing:'border-box'}}>
          <div style={{maxHeight: 'fit-contents', height: '100%', maxWidth:1220, width: '100%', margin: 'auto 0', alignItems:'center', display:'grid', gridTemplateColumns:'10rem 1fr'}}>
            <div>{title}</div>
            <div>
              {children}
            </div>
          </div>
        </section>
    )
}