import './team-card.css'
// Socail Media
import linkedin from './../../../assets/icon/linkedin.svg'
import instagram from './../../../assets/icon/instagram.svg'
import facebook from './../../../assets/icon/facebook.svg'

const TeamCard = (props) => {
    return (<div className="team-card">
        <div className="img-shadow"></div>
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
        <span>{props.position}</span>

        <div className="social-media">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
        </div>
    </div>);
}

export default TeamCard;