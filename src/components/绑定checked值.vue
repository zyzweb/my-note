 <template>
  <div >
  <input type="text" value="111">
  <input type="checkbox" id="one" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label><br>
  <span>Checked names: {{ checkedNames }}</span>
  
</div>
</template>
<script>
export default {
  data(){
    return {
      checkedNames: []
    }
  }
}
</script>
 