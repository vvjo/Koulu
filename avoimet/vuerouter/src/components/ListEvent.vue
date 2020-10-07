<template>
  <div id="event-table">
    <ul id="lista">
      <li v-for="tekija of tyontekijat" :key="tekija.id">{{tekija.firstName+" "+tekija.lastName}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ListEvent",
  data() {    
      return{
        tyontekijat: [],
      }
  },
  computed: {},
  methods: { 
    async getAll(){
      try{
        const res = await this.$axios.get("http://localhost:3001")
        console.log(res)
        return res.data
      }catch(e){
        console.log("moi error")
      }
      return({tyontekijat: []})
    }
    
    },
    async mounted(){
      try{
        const res = await this.$axios.get("http://localhost:3001/tyontekijat")
        console.log(res)
        this.tyontekijat = res.data
      }catch(e){
        console.log(e)
      }
    }
}
</script>
<style scoped>
#lista {
  list-style-type: none;
}
.homeText {
  font-size: 35px;
  color: red;
  text-align: center;
  position: relative;
  top: 30px;
  text-shadow: 2px 2px 2px gray;
}
</style>