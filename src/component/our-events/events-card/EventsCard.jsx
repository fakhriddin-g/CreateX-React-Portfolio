import './events-card.css'

const EventsCard = () => {
    return ( <div className="events-card-box">
        <div className="event-data">
            <span className="day">05</span>
            <div className="data-block">
                <span className="month">August </span>
                <span className="time">11:00 – 14:00</span>
            </div>
        </div>
        <div className="event-desc">
            <p>Formation of the organizational structure of the company in the face of uncertainty.</p>
            <span>Onine master-class</span>
        </div>
        <button className="events-btn">View more</button>
    </div> );
}
 
export default EventsCard;