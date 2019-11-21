<template>
 <div>
    <h1>{{$route.params.userId}}</h1>
    <b-button>B1</b-button>
    <h1>{{ userName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyVue',
  data () {
    return {
      userName: null
    }
  },
  created () {
    this.axios.get('http://127.0.0.1:8000/Example/1/')
    .then((response) => {
      console.log(response.data)
      this.userName = response.data.name
    })
  }
}
</script>

<style scoped>
</style>