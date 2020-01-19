<template>
  <div>
    <!-- <p>{{ff}}</p>
    <slot-father></slot-father>
    <slot-zyy></slot-zyy>
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="666" ></el-input-number> -->
    <check></check>
    <!-- <swipeout/>> -->
    <!-- <vue-material @click="one">
      <span>666</span>
    </vue-material> -->
    <!-- <vue-easytable></vue-easytable> -->
    <!-- <div :style="{'background':bgc,'width':'100px','height':'100px'}"></div> -->
    
    
    <!-- <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">{{$t('Delete')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">{{$t('Ignore')}}</swipeout-button>
        </div>

        <div slot="left-menu">
          <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{$t('Fav')}}</swipeout-button>
          <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Delete')}}</swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">

        now <span v-if="disabled">{{ $t('disabled') }}</span>
        <span v-else="enabled">{{ $t('enabled') }}</span>
        </div>
      </swipeout-item> -->
      <slot-zyy></slot-zyy>
      
      
      
  
  </div>
</template>

<script>
import slotZyy from './slot-zyy-father.vue'
import check from './绑定checked值.vue'
import Swipeout from './vux-swipeout/swipeout'
import SwipeoutItem from './vux-swipeout/swipeout-item'
import SwipeoutButton from './vux-swipeout/swipeout-button'
import vueEasytable from './vue-easytable'

export default {
  components: {
    slotZyy,
    check,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    vueEasytable
  },
  data(){
    return {
      good:'这是父组件传给第二个子组件的值',
      ff:'这是父组件自己的值',
       num1: 1,
       value:'',
       disabled: false,
       bgc:'red'
    }
  },
  methods:{
    one(val){
      alert(val)
    },
    im(i){
      // alert(i)
      this.ff=i
    },
    handleChange(value) {
      console.log(value);
    },
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    },
    two(){
      console.log(666);
    }
  },
  mounted () {
    // console.log(666);
    // var a = document.body;
    // a.style.fontSize = '100px'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
  .demo-content {
  padding: 10px 10px;
}
.rp {
  width: 100px;
  height: 100px;
   
}
</style>
