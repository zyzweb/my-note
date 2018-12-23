 <template>
  <div>
    <input type="checkbox" v-model="checked" id="checkbox">
    <label for="checkbox">{{checked}}</label>
  </div>
</template>

<script>
export default {
  data(){
    return {
      checked:true
    }
  }
}
</script>
 