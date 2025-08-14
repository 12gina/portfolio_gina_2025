import circle from "../assets/images/loading_circle.png"

export const Loading = ({isLoaded}) => (
    <div className={`loading ${isLoaded? "":""}`}>
        <span>Loading</span>
        <div><span/><span/><span/></div>
    </div>
)