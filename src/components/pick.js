import React, { Component } from "react"
import { inject, observer } from "mobx-react"

@inject('fruit')
@observer
class Pick extends Component {
  state = {
    isLoading: false
  }
  
  // 获取水果
  pickFruit () {
    const { getFruit, filterFruit } = this.props.fruit
    let num = Math.floor(Math.random()*10 + 1)
    const fruit = {
      id: filterFruit,
      fruitName: `红苹果-${filterFruit}号`,
      fruitWeight: num*100,
      eated: false
    }
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      getFruit(fruit)
      this.setState({
        isLoading: false
      })
    },1000)
   
  }

  render () {
    return <button className={this.state.isLoading ? 'handleBtn loading' : 'handleBtn'} 
    onClick={this.pickFruit.bind(this)}>{this.state.isLoading ? 'loading...' : '摘苹果'}</button>
  }
}

export default Pick