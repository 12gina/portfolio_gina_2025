export const Loading = ({isLoaded}) => (
    <div className={`loading ${isLoaded? "off":""}`}>
        <span>Loading...</span>
        <div><span/><span/><span/></div>
    </div>
)