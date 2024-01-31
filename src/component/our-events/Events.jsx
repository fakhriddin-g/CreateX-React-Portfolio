import EventsCard from './events-card/EventsCard';
import './events.css'

const Events = () => {
    return ( <section className="events">
        <div className="container">
            <div className="events-row">
                <div className="events-title">
                    <h3>Our Events</h3>
                    <h1>Lectures & workshops</h1>
                </div>
                <div className="events-schedule">
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
                <div className="events-information">
                    <p>Do you want more?</p>
                    <button>Explore all events</button>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Events;