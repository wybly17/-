import jsx from "babel-plugin-syntax-jsx"

/*
包含多个基于state的getter计算属性的对象
 */
export default {

  //购物车商品数目计算，0为初始值，猜测proTotal是food.count的集合
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count , 0)
  },
  //购物车商品价格计算
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count*food.price , 0)
  },

  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType===0?1:0) , 0)
  }
}