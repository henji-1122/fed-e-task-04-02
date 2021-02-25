import React, { Component } from "react"
import { inject, observer } from "mobx-react"

@inject('fruit')
@observer
class List extends Component {
  render () {
    const { fruitLeft, changeEated } = this.props.fruit
    return <div>
      {/* {JSON.stringify(fruitLeft)} */}
      <ul className="block_list">
        {
          fruitLeft.map((fruit, id) => {
            return (
              <li className="listItem flex" key={id}>
                <dl className="itemTitle flex">
                  <dt><img className="itemImg" src="apple.jpg" alt=""/></dt>  
                  <dd>
                    <p>{fruit.fruitName}</p>
                    <p>{fruit.fruitWeight}克</p>
                  </dd>
                </dl>
                <button className="itemBtn" onClick={(event) => changeEated(fruit.id, true)}>吃掉</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  }
}

export default List