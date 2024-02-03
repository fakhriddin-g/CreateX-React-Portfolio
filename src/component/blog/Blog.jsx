import './blog.css'
import blogImg1 from './../../assets/image/blog-1.jpg'
import blogImg2 from './../../assets/image/blog-2.jpg'
import blogImg3 from './../../assets/image/blog-3.jpg'
import BlogCard from './blog-card/BlogCard'

const Blog = () => {
    return (<section className="blog">
        <div className="container">
            <div className="blog-row">
                <div className="top-row">
                    <div className="blog-title">
                        <h3>Our blog</h3>
                        <h1>Latest posts</h1>
                    </div>
                    <button>Go to blog</button>
                </div>
                <div className="blog-block">
                    <BlogCard img={blogImg1} />
                    <BlogCard img={blogImg2} />
                    <BlogCard img={blogImg3} />
                </div>
            </div>
        </div>
    </section>);
}

export default Blog;