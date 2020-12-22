import React from 'react';

function List(){

    return (
        <div className="item mb-5">
            <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image"/>
                <div className="media-body">
                    <h3 className="title mb-1"><a href="blog-post.html">Why Every Developer Should Have A Blog</a></h3>
                    <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5 min read</span><span className="comment"><a href="#">8 comments</a></span></div>
                    <div className="intro">ㅇㅇㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
            </div>
        </div>
    );


}

export default List;