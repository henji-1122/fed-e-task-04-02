import React, { Component } from 'react'
import { inject, observer} from 'mobx-react'

@inject('fruit')
@observer
class Header extends Component {
  render () {
    
    const { fruitLeft, fruitLeftWeight, fruitsEated, fruitsEatedWeight } = this.props.fruit
    return <ul className="block_number flex">
      <li>
        <p>当前</p>
        <p>{fruitLeft.length}个苹果，{fruitLeftWeight}克</p>
      </li>
      <li>
        <p>已吃掉</p>
        <p>{fruitsEated.length}个苹果，{fruitsEatedWeight}克</p>
      </li>
    </ul>
  }
}

export default Header