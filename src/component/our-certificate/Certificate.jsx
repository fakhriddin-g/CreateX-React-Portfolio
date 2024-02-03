import './certificate.css'
import org1 from './../../assets/image/del-mar-strategy-logo.jpg'
import org2 from './../../assets/image/sentinal-consulting.jpg'
import org3 from './../../assets/image/national.jpg'
import certificate from './../../assets/image/certificate.jpg'

const Certificate = () => {
    return ( <section className="certificate">
        <div className="container">
            <div className="certificate-row">
                <div className="certificate-text">
                    <h3>Createx Certificate</h3>
                    <h1>Your expertise will be confirmed</h1>
                    <p>We are accredited by international professional organizations and institutes:</p>
                    <div className="certificate-org">
                        <img src={org1} alt="org1" />
                        <img src={org2} alt="org2" />
                        <img src={org3} alt="org3" />
                    </div>
                </div>
                <div className="certificate-img">
                    <img src={certificate} alt="certificate" />
                </div>
            </div>
        </div>
    </section> );
}
 
export default Certificate;