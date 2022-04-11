import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultPorps = {
    country: "us",
    pageSize: 6,
    category: "business",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async getData() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.getData();
  }
  hanldePrevious = async () => {
    
    this.setState({page: this.state.page - 1})
    this.getData();
  };
  hanldeNext = async () => {
    
    this.setState({page:this.state.page + 1})
    this.getData();
  };

  render() {
    return (
      <div className="container py-3">
        {this.state.loading && (
          <p className="text-center">
            <Spiner />
          </p>
        )}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source = {element.source.name}
                  
                />
              </div>
            ))}
        </div>
        {this.state.loading ? (
          ""
        ) : (
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-info"
              onClick={this.hanldePrevious}
            >
              {" "}
              &laquo; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-info"
              onClick={this.hanldeNext}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
