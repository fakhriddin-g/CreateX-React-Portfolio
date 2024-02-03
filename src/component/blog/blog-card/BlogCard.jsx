import './blog-card.css'

const BlogCard = (props) => {
    return (<div className="blog-card">
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-info">
            <span>Marketing</span> | 
            <span> September 4, 2020</span> | 
            <span> 36 min</span>
        </div>
        <h2>What is traffic arbitrage and does it really make money?</h2>
        <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
        <a href="3" className="link">Listen</a>
    </div>);
}

export default BlogCard;