import './about.css'
import aboutImg from './../../assets/image/about-us.jpg'

const About = () => {
    return (<section className="about">
        <div className="container">
            <div className="about-row">
                <div className="about-img">
                    <img src={aboutImg} alt="About CreateX" />
                </div>
                <div className="about-text">
                    <h3>Who we are</h3>
                    <h1 className='about-title'>Why Createx?</h1>
                    <ul className='about-list'>
                        <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                        <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                        <li>Tincidunt sagittis neque sem ac eget.</li>
                        <li>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                    </ul>
                    <button className='about-btn'>More about us</button>
                </div>
            </div>
        </div>
    </section>);
}

export default About;