import React from 'react'
import "../css/Blog.css";
import d1 from "../assets/doodle1.png";

const Blog = () => {
    return (<section>
        <div className="blog-space">
            <a href="">
                <div className='container-blog'>
                    <div className="blog-img">
                        <img src={d1} alt="" />
                    </div>
                    <div className="blog-title">
                        <h1 className='btitle'>HII</h1>
                    </div>
                </div>
            </a>
        </div>
    </section>
    )
}

export default Blog
