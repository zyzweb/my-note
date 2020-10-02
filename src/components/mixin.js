/*
 * @Description:
 * @Author: zhuyuanzheng
 * @Date: 2020-09-03 10:17:17
 * @LastEditors: zhuyuanzheng
 * @LastEditTime: 2020-09-26 11:28:09
 */
export default  {
  data () {
    return {
      gg: 2,
      mm: 1,
      ss: 3
    }
  },
  created: function () {
    console.log('混入对象的钩子被调用')
  },
   methods: {
    good() {
      debugger
        this.gg = 1
        this.mm = 3
        this.ss = 54
    }
   }
}
