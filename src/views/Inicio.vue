<template>
  <div>
    <h1 class="text-center mt-5">Lista de tareas.</h1>
   
    <div v-if="carga" class="text-center mt-5">
        <h3>Cargando contenido...</h3>
        <pulse-loader :loading="carga"></pulse-loader>
    </div>
    
    <ul class="list-group" v-if="!carga">

        <form @submit.prevent="buscador(textoBuscador)">
        <input type="text" placeholder="Buscar.." class="form-control mt-4 mb-3" v-model="textoBuscador" v-on:keyup="buscador(textoBuscador)">
        </form>

        <li class="list-group-item"
         v-for="item of arrayFiltrado" :key="item.id">
            <!-- {{item.id}} -  -->
            {{item.nombre}}
        <div class="float-right">
             <router-link :to="{name: 'editar', params: {id: item.id}}" class="btn btn-warning btn-sm mr-2">
               Editar
            </router-link>
            <button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
        </li>

        <p class="mt-4">Agregar una tarea</p>
    <router-link :to="{name: 'agregar'}"> 
        <button class="btn btn-success btn-block mt-4 mb-2">Agregar</button>
    </router-link>
    
    </ul>
  </div>
</template>


<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


export default {
    name : 'Inicio',
    data() {
        return {
            textoBuscador: ""
        };
    },
    computed : {
        ...mapState(['usuario', 'tareas', 'carga']),
        ...mapGetters(['arrayFiltrado'])
    },
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea', 'buscador'])
    },
    created() {
        this.getTareas()
    },
    components: {
    PulseLoader
  } 
}
</script>