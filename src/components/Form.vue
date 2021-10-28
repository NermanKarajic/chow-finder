<template>
  <div class="form">
    <div class="flex">
      <Input v-model="ime" placeholder="Unesite ime i prezime" outline />
      <Button class="ml-4" color="info" gradient>Confirm</Button>
    </div>
    {{ ime }}
  </div>
</template>

<script>
export default {
  props: {
    msg: Number
  },
  data() {
    return {
      ime: ''
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