import React, { useEffect,useState } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)


  const getData= async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    
  }

  useEffect(() => {
    
    getData(); 
    // eslint-disable-next-line
}, [])
  
  // const hanldePrevious = async () => {

    
  //   setPage(page-1)
  //   getData();
  // };
  // const hanldeNext = async () => {

    
  //   setPage(page+1)
  //   getData();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3bff3fe16d114f428be8c5c345cc203b&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    
  }
  
    return (
      <>
        {loading && (
          <p className="text-center">
            <Spiner />
          </p>
        )}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<p className="text-center"><Spiner /></p>}
        >
          <div className="container">


            <div className="row">
              {
                articles.map((element) => (
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


export default News;


News.defaultPorps = {
  country: "us",
  pageSize: 6,
  category: "business",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};