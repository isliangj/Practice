<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

 <script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    props: {
      // 从父级传入food数据
      food: {
        type: Object
      }
    },
    created () {
    },
    methods: {
      addCart (event) {
        // 去除网页端的点击出现两次情况
        // 如果不是自己派生的话就return
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          // count是原先不存在的属性
          // 通过Vue.set给 food添加 count 属性
          Vue.set(this.food, 'count', 1)
          this.food.count = 1
        } else {
          this.food.count++
        }
      },
      decreaseCart (event) {
        if (!event._constructed) {
          return
        }
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transition all 0.4s linear
        transform rotate(0)
      &.move-enter-active
        transition all 0.4s linear
        transform translate3d(0, 0, 0)
        opacity 1
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(24px, 0, 0)
        .inner
          transform rotate(180deg)
      &.move-leave-active
        transition: all 0.4s linear
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
</style>
