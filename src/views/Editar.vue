<template>
  <div class="editar">
    <h1>Editar</h1>
    {{id}} - {{tarea}}
    <form @submit.prevent="editarTarea(tarea)" class="form-inline">
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Nombre</div>
            </div>
             <input type="text" v-model="$v.tarea.nombre.$model" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary ml-2"
        :disabled="$v.tarea.$invalid">Editar</button>
    <!-- {{$v.tarea.nombre}}
    <br>
    {{$v}} -->
    </form>
    <small class="text-danger" v-if="!$v.tarea.nombre.required">Campo requerido</small>
  </div>
</template>


<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name : 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
       ...mapActions(['getTarea', 'editarTarea']) 
    },
    created() {
        this.getTarea(this.id)
    },
    computed: {
        ...mapState(['tarea'])
    },
    validations: {
      tarea : {
        nombre: {
          required
        }
      }
    }
}
</script>