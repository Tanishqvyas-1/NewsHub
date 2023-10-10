import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category: 'General'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes,
    category: PropTypes.string
  }
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: [],
      loading: true,
      page:1
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1439d2afd0374fc9a0a1bd3acfa5a77c&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults });
  }
  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1439d2afd0374fc9a0a1bd3acfa5a77c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handlenextclick = async () => {
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=1439d2afd0374fc9a0a1bd3acfa5a77c&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  }
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsHub Top Headlines</h2>
        <div className="row" style={{ padding: "10px" }}>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3">
                <NewsItem
                  url={element.url}
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handleprevclick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}
              className="btn btn-dark"
              onClick={this.handlenextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
