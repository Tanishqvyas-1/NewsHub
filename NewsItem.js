import React, { Component } from "react";
import {Link} from "react-router-dom";
export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author, Date}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
          <img src={!imageUrl?"https://gumlet.assettype.com/bloombergquint%2F2023-09%2Fe07bc00e-5c53-4262-99aa-eaa7574e1d82%2FTill_up_Exterior_front_view_of_NSE_signage__logo_at_office_building_in_BKC__Bandra_Kurla_Complex___S.jpeg?w=1200&auto=format%2Ccompress&ogImage=true": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p class="card-text"><small class="text-body-secondary">by {!author?"unknown":author} on {Date}</small></p>
            <a href={newsUrl }target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
