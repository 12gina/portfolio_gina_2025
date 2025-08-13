import circle from "../assets/images/loading_circle.png"

export const Loading = ({isLoaded}) => (
    <div className={`loading ${isLoaded? "off":""}`}>
        <span>Loading</span>
        {/* <img src={circle} alt="loading" /> */}
    </div>
)