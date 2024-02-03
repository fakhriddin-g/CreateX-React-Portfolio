import './card.css'

const Card = (props) => {
    return (<div className="card">
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-desc">
            <span className='course-title'>Marketing</span>
            <h2>{props.title}</h2>
            <div className="price">
                <span className='course-price'>$100</span> | <span className='lectore'>by Jerome Bell</span>
            </div>
        </div>
    </div>);
}

export default Card;