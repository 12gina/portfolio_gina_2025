export const SectionLayout = ({ref, id, title, children}) => {

    return (
        <section className={'section-layout'} ref={ref} id={id}>
          <div>
            <div>{title}</div>
            <div>
              {children}
            </div>
          </div>
        </section>
    )
}