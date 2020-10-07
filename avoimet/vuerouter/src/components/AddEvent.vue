<template>
    <div id="query-form">
      <form @submit.prevent="addNew"> <!--prevent default get post-->
        <label>Etunimi</label>
        <input ref="fst" v-model="tyontekija.firstName" type="text" autofocus />
        <br>
        <label>Sukunimi</label>
        <input v-model="tyontekija.lastName" type="text" />
        <br>
        <button>Lisää</button>
        <table id="event-table" v-bind:items=tyontekija></table>
    </form>
    </div>
</template>
<script>
export default {
  name: 'AddEvent',
  data(){
      return{
          tyontekija: {firstName: null, lastName: null}
      }
  },
  methods:{
      async addNew(){
          try{
              const res = await this.$axios.post("http://localhost:3001/tyontekijat", this.tyontekija)
              this.tyontekija= ""
              alert("Tiedot lähetetty")
              this.$refs.fst.focus()
              return res

          }catch(e){
              console.log(e)
          }
      }
  }
};
</script>
<style scoped>
    .homeText{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>