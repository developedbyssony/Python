import React, { Component } from 'react';

class category extends Component {
  state = {
    category : [
      {
        name : "제주",
        value : "category1"
      },
      {
        name : "서귀포",
        value : "category2"
      },
      {
        name : "북제주(동)",
        value : "category3"
      },
      {
        name : "북제주(서)",
        value : "category4"
      },
      {
        name : "남제주(동)",
        value : "category5"
      },
      {
        name : "남제주(서)",
        value : "category6"
      }
    ],
  };

  render() {
    return (
      <div className="category">
        <div className="category-menu">{this.state.category.map(cate => (
          <a href="#">카테고리</a>
        ))}
      </div>
      </div>
    );
  }
}

export default category;