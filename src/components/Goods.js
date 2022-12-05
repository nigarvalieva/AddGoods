import React, { PureComponent } from "react";
import "../styles.css";
import store from "../redux/reducers/store";

import GoodsItem from './GoodsItem';



export default class Goods extends PureComponent {
  state = {
    goods: [],
  }
  componentDidMount() {
    const globalStore = store.getState();
    this.setState({ goods: globalStore.goods });
  }
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}