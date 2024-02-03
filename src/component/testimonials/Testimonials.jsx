import './testimonials.css'
import arrowIcon from './../../assets/icon/arrow.svg'
import authorImg from './../../assets/image/author.jpg'

const Testimonials = () => {
    return (<section className="testimonials">
        <div className="container">
            <div className="testimonials-row">
                <div className="testimonials-title">
                    <h3>TESTIMONIALS</h3>
                    <h1>What our students say</h1>
                </div>
                <div className="testimonials-block">
                    <img className='left' src={arrowIcon} alt="" />
                    <div className="testimonials-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
                        <div className="testimonails-author">
                            <div className="author-img">
                                <img src={authorImg} alt="" />
                            </div>
                            <div className="author-info">
                                <h4 className="author-name">Eleanor Pena</h4>
                                <span className="author-position">Position, Course</span>
                            </div>
                        </div>
                    </div>
                    <img className='right' src={arrowIcon} alt="" />
                </div>
                <div className="testimonials-slide"></div>
            </div>
        </div>
    </section>);
}

export default Testimonials;