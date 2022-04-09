import React, { Component } from 'react'

export class NewsItems extends Component {



  render() {
      let {title, description,imgUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={imgUrl?imgUrl:"https://www.kxan.com/wp-content/uploads/sites/40/2022/04/Image-from-iOS-1.jpg?w=1280"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More ...</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItems
