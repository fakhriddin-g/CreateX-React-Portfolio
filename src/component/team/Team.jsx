import TeamCard from './team-card/TeamCard';
import './team.css'
import member_1 from './../../assets/image/card-img-1.jpg'
import member_2 from './../../assets/image/card-img-2.jpg'
import member_3 from './../../assets/image/card-img-3.jpg'
import member_4 from './../../assets/image/card-img-4.jpg'
import arrowIcon from './../../assets/icon/arrow.svg'



const Team = () => {
    return (<section className="team">
        <div className="container">
            <div className="team-row">
                <div className="top-row">
                    <div className="team-title">
                        <h3>Best tutors are all here</h3>
                        <h1>Meet our team</h1>
                    </div>
                    <div className="team-arrow">
                        <img className='left' src={arrowIcon} alt="" />
                        <img className='right' src={arrowIcon} alt="" />
                    </div>
                </div>
                <div className="team-members">
                    <TeamCard name='Dianne Russell' position='Founder and CEO' img={member_1} />
                    <TeamCard name='Jerome Bell' position='Founder and Program Director' img={member_2} />
                    <TeamCard name='Kristin Watson' position='Marketer, Curator of Marketing Course' img={member_3} />
                    <TeamCard name='Marvin McKinney' position='PM, Curator of Management Course' img={member_4} />
                </div>
            </div>
        </div>
    </section>);
}

export default Team;