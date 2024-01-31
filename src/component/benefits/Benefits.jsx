import './benefits.css'
import star from './../../assets/icon/star.svg'
import feedback from './../../assets/icon/feedback.svg'
import online from './../../assets/icon/online.svg'
import community from './../../assets/icon/community.svg'
import benefitsImg from './../../assets/image/benefits-img.jpg'

const Benefits = () => {
    return ( <section className="benefits">
        <div className="container">
            <div className="benefits-row">
                <div className="benefits-title">
                    <h3>Our benefits</h3>
                    <h1>That’s how we do it</h1>
                </div>
                <div className="benefits-features">
                    <ul>
                        <li className='active'><img src={star} alt="" />Experienced Tutors</li>
                        <li><img src={feedback} alt="" />Feedback & Support</li>
                        <li><img src={online} alt="" />24/7 Online Library</li>
                        <li><img src={community} alt="" />Community</li>
                    </ul>
                </div>
                <div className="benefits-main">
                    <div className="benefits-text">
                        <h2>Only practicing tutors</h2>
                        <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                    </div>
                    <div className="benefits-img">
                        <img src={benefitsImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Benefits;