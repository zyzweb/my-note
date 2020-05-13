<template>
  <div class="lang">
    <el-radio-group v-model="language" size="mini">
        <el-radio v-for="item of lang" :label="item.value" :Captcha="item.value" border :key="item.value">{{item.Captcha}}</el-radio>
    </el-radio-group>
</div>
</template>

<script>
import Vue from 'vue'
  export default {
    mounted() {
      this.$i18n.locale === 'zh' ? this.language = 0 : this.language = 1   //数据加载时判断当前属于哪种语言，为其单选按钮赋值
    },
    data() {
      return {
        language: 0,
        lang: [{
          label: this.$t('message.zh'),       //模板语法的一种
          Captcha: this.$t('message.Captcha'),
          value: 0
        }, {
          label: this.$t('message.en'),
          value: 1
        }],
      }
    },
    watch: {    //侦听器
      language: function (val) {       //侦听单选按钮的变化，从而进行切换语言
        val === 0 ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en';
        Vue.set(this.lang, 0, {label: this.$t('message.zh'), value: 0});
        Vue.set(this.lang, 1, {label: this.$t('message.en'), value: 1})
        /**
        this.lang: [{
          label: this.$t('message.zh'),       //如果不使用Vue.set，也可以使用更新数据的方法
          value: 0
        }, {
          label: this.$t('message.en'),
          value: 1
        }]
        **/
      }
    },
  }

</script>

<style>

</style>