<template>
  <div id="app">
    <!-- <div id="nav">
      
      <router-link :to="{name:'inicio'}" v-if="existeUsuario" 
      class="btn btn-primary mx-2">Inicio </router-link>
      
      <router-link :to="{name:'registro'}" v-if="!existeUsuario" class="btn btn-primary mx-2">Registro </router-link> 
      
      <router-link :to="{name:'ingreso'}" v-if="!existeUsuario" class="btn btn-primary mx-2">Ingreso </router-link>  
      
      <a @click="cerrarSesion" v-if="existeUsuario" class="btn btn-danger mx-2">Cerrar sesion</a>
     
    </div> -->

    <b-navbar toggleable="md" type="dark" variant="info">
      <b-container>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Menu</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        <b-nav-item :to="{name:'inicio'}" v-if="existeUsuario" 
        class="btn btn-primary mx-2" exact>Inicio </b-nav-item>
        
        <b-nav-item :to="{name:'registro'}" v-if="!existeUsuario" class="btn btn-primary mx-2">Registro </b-nav-item>

        <!-- <b-nav-item :to="{name:'grid'}" class="btn btn-primary mx-2">Grid </b-nav-item> -->

        <!-- <b-nav-item :to="{name:'cards'}" class="btn btn-primary mx-2">Card </b-nav-item> -->

        <!-- <b-nav-item :to="{name:'form'}" class="btn btn-primary mx-2">Form </b-nav-item> -->

        <!-- <b-nav-item :to="{name:'validaciones'}" class="btn btn-primary mx-2">Validaciones </b-nav-item> -->
        
        <b-nav-item :to="{name:'ingreso'}" v-if="!existeUsuario" class="btn btn-primary mx-2">Ingreso </b-nav-item>

        <b-nav-item @click="cerrarSesion" v-if="existeUsuario" class="btn btn-danger mx-2">Cerrar sesion </b-nav-item>
        
        <!-- <a @click="cerrarSesion" v-if="existeUsuario" class="btn btn-danger mx-2">Cerrar sesion</a> -->

      </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Idioma" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

      </b-container>
    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>

  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['cerrarSesion'])
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  }
  
}


</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
