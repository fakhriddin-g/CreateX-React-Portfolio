import Card from './courses-card/Card';
import './courses.css'
// Images
import cardImg1 from './../../assets/image/card-img-1.jpg'
import cardImg2 from './../../assets/image/card-img-2.jpg'
import cardImg3 from './../../assets/image/card-img-3.jpg'
import cardImg4 from './../../assets/image/card-img-4.jpg'
import cardImg5 from './../../assets/image/card-img-5.jpg'
import cardImg6 from './../../assets/image/card-img-6.jpg'

const Courses = () => {
    return ( <section className="course">
        <div className="container">
            <div className="course-row">
                <div className="top-row">
                    <div className="top-row-title">
                        <h3>Ready to learn?</h3>
                        <h1>Featured Courses</h1>
                    </div>
                    <div className="top-row-btn">
                        <button>View all courses</button>
                    </div>
                </div>
                <div className="courses-row">
                    <Card title="The Ultimate Google Ads Training Course" img={cardImg1} />
                    <Card title="Prduct Management Fundamentals" img={cardImg2} />
                    <Card title="HR  Management and Analytics" img={cardImg3} />
                    <Card title="Brand Management & PR Communications" img={cardImg4} />
                    <Card title="Business Development Management" img={cardImg5} />
                    <Card title="Graphic Design Basic" img={cardImg6} />
                </div>
            </div>
        </div>
    </section> );
}
 
export default Courses;