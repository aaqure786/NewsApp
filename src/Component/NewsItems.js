import React from "react";

const NewsItems = (props)=> {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'95%'}}>
              {!source? "Unknown": source}
              
            </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://www.kxan.com/wp-content/uploads/sites/40/2022/04/Image-from-iOS-1.jpg?w=1280"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} {date}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More ...
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItems;
