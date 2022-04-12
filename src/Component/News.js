import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      loading: true,
      page: 1,
      totalResults: 0
    }
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
  // hanldePrevious = async () => {

  //   this.setState({page: this.state.page - 1})
  //   this.getData();
  // };
  // hanldeNext = async () => {

  //   this.setState({page:this.state.page + 1})
  //   this.getData();
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  }
  render() {
    return (
      <>
        {this.state.loading && (
          <p className="text-center">
            <Spiner />
          </p>
        )}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<p className="text-center"><Spiner /></p>}
        >
          <div className="container">


            <div className="row">
              {
                this.state.articles.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}

                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>

      </>
    );
  }
}

export default News;
