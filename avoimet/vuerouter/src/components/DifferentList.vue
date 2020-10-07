<template>
  <!--p class="homeText">Listaa tapahtumia</p-->
  <div id="query-form">
    <form @submit.prevent="handleSubmit"> <!--prevent default get post-->
      <button>Hae</button>
      <!--table id="event-table" v-bind:items=items></table-->
    </form>
  </div>
</template>
<script>
export default {
  name: "ListEvent",
  data: function() {
    return{
      items: []
    }
  },
  computed: {},
  methods: { 
    async handleSubmit(){console.log("handlesubmit")},
    async getAll(){
      try{
        const items = await axios.get("http://localhost:3001/tyontekijat")
        this.items = res.data
      }
    }
    
    

    /*import axios from 'axios'
const baseUrl = 'http://api.citybik.es/v2/networks/citybikes-helsinki'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }
    useEffect(async () => {
    const res = await tyontekijaService.getAll()
    setTyontekijat(res)
   }, []);*/
    
    }
}
</script>
<style scoped>
.homeText {
  font-size: 35px;
  color: red;
  text-align: center;
  position: relative;
  top: 30px;
  text-shadow: 2px 2px 2px gray;
}
</style>