import pointer from "../assets/images/icon_mouse_over.png" 
export const GridCell = ({idx, hanCellOn, hanCellOff, isCellHover}) => {
    
    return (
        <div key={idx} id={`c${idx}`} className="cell" onMouseOver={()=>hanCellOn(idx)} onMouseLeave={()=>hanCellOff(idx)} style={{opacity:isCellHover[idx+1]? 0 : 1, transition: 'opacity 0.3s ease', width: '100%', height:'100%', cursor: 'pointer'}}>
            {idx===44 && <img src={pointer} alt="pointer"/>}
        </div>
    )
}