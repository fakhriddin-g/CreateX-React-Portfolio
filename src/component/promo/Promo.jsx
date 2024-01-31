import './promo.css';
import promoPlayImg from './../../assets/icon/play.svg';
import promoImg from './../../assets/image/mainImg.png';

const Promo = () => {
    return (<section className="promo">
        <div className="container">
            <div className="promo-main">
                <div className="promo-text">
                    <div className="promo-play">
                        <div className="promo-play-circle">
                            <img src={promoPlayImg} alt="Promo Play" />
                        </div>
                        <span>Play showreel</span>
                    </div>
                    <p className='title'>Enjoy studying with Createx Online Courses</p>
                    <div className="promo-btn">
                        <a href="#">About us</a>
                        <button>Explore courses</button>
                    </div>
                </div>
                <div className="promo-img">
                    <img src={promoImg} alt="" />
                </div>
            </div>
            <div className="promo-bottom">
                <ul>
                    <li><span>1200</span> Students graduated</li>
                    <li><span>84</span> Completed courses</li>
                    <li><span>16</span> Qualified tutors</li>
                    <li><span>5</span> Years of experience</li>
                </ul>
            </div>
        </div>
    </section>);
}

export default Promo;