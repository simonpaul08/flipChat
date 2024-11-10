import WarningIcon from "../../assets/icon_warning.svg";


const Warning = ({ text }) => {
    return (

        <div className="warning">
            <img src={WarningIcon} alt="warning icon" className="warning-icon" />
            <p className="warning-text">{text}</p>
        </div>
    )
}

export default Warning