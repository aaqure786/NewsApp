import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spiner from './Spiner';

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
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles: parseData.articles, 
          totalResults: parseData.totalResults,
          loading:false
        })
    }
    hanldePrevious = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})  
      let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles: parseData.articles,
          page: this.state.page - 1,
          loading: false
        })

    }
    hanldeNext = async () =>{
      if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))
      {
          console.log('Nothing to show')
      }
      else {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          articles: parseData.articles,
          page: this.state.page + 1,
          loading:false
        })
      }                             
      

    }
    

  render() {
    return (                   
      <div className='container py-3'>
        {this.state.loading && <p className='text-center'><Spiner/></p>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>
                 <div className='col-md-4' key={element.url}>
                <NewsItems  title={element.title?element.title: ""} description={element.description? element.description:""} imgUrl= {element.urlToImage} newsUrl = {element.url} />
            </div>
            )}
         </div>
      {this.state.loading ? "" :
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page <=1} type="button" className="btn btn-info" onClick={this.hanldePrevious}> &laquo; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.hanldeNext}>Next &raquo;</button>
        </div>
      }
       
      </div>
    )
  }
}

export default News
