<template>
  <div class="form">
    <div class="flex">
      <Input v-model="ime" placeholder="Unesite ime i prezime" outline />
      <Button @click="clickMe">Confirm</Button>
    </div>
    {{ ime }}
  </div>
</template>

<script>
  export default {
    methods: {
      clickMe() {
        alert('Clicked!')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  padding: 25px;
}

.flex {
  border: 1px solid darkgray;
  width: 330px;
  padding: 60px;
  display: flex;
}
</style>