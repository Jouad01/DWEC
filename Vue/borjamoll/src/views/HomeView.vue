<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TablaJouad titulo="Usuarios">
      <fila>
        <columna>Jouad</columna>
        <columna>Elordi</columna>
      </fila>
    </TablaJouad>
    <TablaJouad titulo="Roles">
      <fila>
        <columna @click="changeBrand">{{brand}}</columna>
        <columna @click="changeBrand">{{brand}}</columna>
      </fila>
    </TablaJouad>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TablaJouad from '@/components/TablaJouad.vue'
import Fila from '@/components/Fila.vue'
import Columna from '@/components/Columna.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TablaJouad,
    Fila,
    Columna
  },
  data() {
    return {
      prueba: 'Hello VUE!!!',
      brand: 'Opel'
    }
  },

  method:{
    changeBrand(){
      this.brand = 'DAM'
    }
  }
}
</script>
