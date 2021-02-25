import { observable, action, computed } from 'mobx'

class FruitStore {
  // 水果列表
  @observable fruits = [
    {id: 0, fruitName: '红苹果-0号', fruitWeight: 100, eated: false},
    {id: 1, fruitName: '红苹果-1号', fruitWeight: 200, eated: false},
    {id: 2, fruitName: '红苹果-2号', fruitWeight: 300, eated: false}
  ]
  @observable count = 2

  // 获取水果
  @action.bound getFruit (fruit) {
    this.fruits.push(fruit)
  }

  // 计算新获取水果的编号
  @computed get filterFruit () {
    return this.count = this.count + 1
  }

  // 吃掉水果
  @action.bound changeEated (id, flag) {
    this.fruits[id].eated = flag
  }

  // 剩余水果
  @computed get fruitLeft () {
    return this.fruits.filter(fruit => fruit.eated === false)
  }
  // 剩余计算克数
  @computed get fruitLeftWeight () {
    return totalNum(this.fruitLeft)
  }

  // 已吃水果
  @computed get fruitsEated () {
    return this.fruits.filter(fruit => fruit.eated === true)
  }
  // 已吃克数
  @computed get fruitsEatedWeight () {
    return totalNum(this.fruitsEated)
  }
}

// 计算克数
function totalNum (params) {
  const total = params.reduce((total, next) => {
    return total + next.fruitWeight
  },0)
  return total
}

const fruit = new FruitStore()

export default fruit
