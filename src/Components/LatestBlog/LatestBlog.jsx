import React from "react";
import "./latestBlog.css";
const LatestBlog = () => {
  const blogPosts = [
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b1.jpg",
      imgAlt: "Man wearing a pink blazer",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b2.jpg",
      imgAlt: "Woman wearing blue jeans",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
    {
      imgSrc: "https://themewagon.github.io/eiser/img/b3.jpg",
      imgAlt: "Woman wearing a watch",
      author: "By Admin",
      comments: "2 Comments",
      title: "Ford clever bed stops your sleeping partner hogging the whole",
      description:
        "Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light Forth.",
      link: "#",
    },
  ];
  return (
    <>
      <div className="blog-container">
        <div className="blog-title">LATEST BLOG</div>
        <div className="divider"></div>
        <div className="blog-subtitle">
          Bring called seed first of third give itself now ment
        </div>
        <div className="blog-posts">
          <div className="blog-post">
            <img
              src="https://themewagon.github.io/eiser/img/b1.jpg"
              alt="Man wearing a pink blazer"
            />
            <div className="blog-post-info">
              <div className="blog-post-author">By Admin</div>
              <div className="blog-post-comments">2 Comments</div>
              <div className="blog-post-title">
                Ford clever bed stops your sleeping partner hogging the whole
              </div>
              <div className="blog-post-description">
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </div>
              <a href="#" className="blog-post-button">
                LEARN MORE →
              </a>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://themewagon.github.io/eiser/img/b2.jpg"
              alt="Woman wearing blue jeans"
            />
            <div className="blog-post-info">
              <div className="blog-post-author">By Admin</div>
              <div className="blog-post-comments">2 Comments</div>
              <div className="blog-post-title">
                Ford clever bed stops your sleeping partner hogging the whole
              </div>
              <div className="blog-post-description">
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </div>
              <a href="#" className="blog-post-button">
                LEARN MORE →
              </a>
            </div>
          </div>
          <div className="blog-post">
            <img
              src="https://themewagon.github.io/eiser/img/b3.jpg"
              alt="Woman wearing a watch"
            />
            <div className="blog-post-info">
              <div className="blog-post-author">By Admin</div>
              <div className="blog-post-comments">2 Comments</div>
              <div className="blog-post-title">
                Ford clever bed stops your sleeping partner hogging the whole
              </div>
              <div className="blog-post-description">
                Let one fifth i bring fly to divided face for bearing the divide
                unto seed winged divided light Forth.
              </div>
              <a href="#" className="blog-post-button">
                LEARN MORE →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
