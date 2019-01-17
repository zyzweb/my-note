<template>
  <div>
    Centered
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Home"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
  </div>
</template>
 

<script>
export default {};
</script>

<style lang="scss" scoped>
.separator + .separator {
  margin-top: 24px;
}
.md-avatar {
  width: 20px;
  height: 200px;
}
</style>