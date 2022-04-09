import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {

     
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=1&pagesize=12";
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }
    hanldePrevious = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page - 1}&pagesize=12`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles: parseData.articles,
          page: this.state.page - 1
        })

    }
    hanldeNext = async () =>{
      if(this.state.page +1 > Math.ceil(this.state.totalResults/12))
      {
          console.log('Nothing to show')
      }
      else {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page + 1}&pagesize=12`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles: parseData.articles,
          page: this.state.page + 1
        })
      }
      

    }
    

  render() {
    return (                   
      <div className='container py-3'>
        <div className='row'>
            {this.state.articles.map((element)=>
                 <div className='col-md-4' key={element.url}>
                <NewsItems  title={element.title?element.title: ""} description={element.description? element.description:""} imgUrl= {element.urlToImage} newsUrl = {element.url} />
            </div>
            )}
         </div>
       <div className='container d-flex justify-content-between'>
       <button disabled={this.state.page <=1} type="button" className="btn btn-info" onClick={this.hanldePrevious}> &laquo; Previous</button>
       <button type="button" className="btn btn-info" onClick={this.hanldeNext}>Next &raquo;</button>
       </div>
      </div>
    )
  }
}

export default News
