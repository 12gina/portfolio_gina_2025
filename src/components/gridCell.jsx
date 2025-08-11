export const GridCell = ({idx, hanCellOn, hanCellOff, isCellHover}) => {
    
    return (
        <div key={idx} id={`c${idx}`} className="cell" onMouseOver={()=>hanCellOn(idx)} onMouseLeave={()=>hanCellOff(idx)} style={{opacity:isCellHover[idx+1]? 0 : 1, transition: 'opacity 0.3s ease', width: '100%', aspectRatio:"1/1", cursor: 'pointer'}}>
            {idx===205? "A" : idx===206? "B": idx===207? "O": idx===208? "U" : idx===209? "T" : idx===211? "M" : idx===212? "E" : null}
        </div>
    )
}