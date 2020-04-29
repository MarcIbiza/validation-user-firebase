<template>
    <div>
        <div>
        <h1>Ingreso de usuario.</h1>
        <form @submit.prevent="ingresoUsuario({email: $v.email.$model, pass: $v.pass.$model})">
            <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="Ingresa un email">

            <small class="text-danger d-block" v-if="!$v.email.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="!$v.email.email">Email no valido</small>

            <input type="password" v-model="$v.pass.$model" class="form-control my-2" placeholder="Ingresa tu contraseña">

            <small class="text-danger d-block" v-if="!$v.pass.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="!$v.pass.minLength">Minimo 6 caracteres</small>

            <button type="submit" class="btn btn-info my-2" :disabled="$v.$invalid">Acceder</button>
        </form>
        <!-- <p>{{error}}</p> -->
        <!-- {{$v.email}} -->
        <p v-if="error === 'auth/user-not-found' ">Usuario incorrecto.</p>
        <p v-if="error === 'auth/wrong-password' ">Contraseña incorrecta.</p>
        </div>
        <!-- <div>
           <span v-if="!registro"> Ingreso </span>
           <span v-if="registro"> Registro </span>
        </div> -->
    </div>
</template>


<script>

import {mapActions, mapState} from "vuex"
import { required, minLength, email } from 'vuelidate/lib/validators'


export default {
    name : 'Ingreso',
    data() {
        return {
            email: '',
            pass: '', 
            registro: false
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario'])
    }, 
    computed: {
        ...mapState(['error'])
    },
    validations: {
        email: {
          required, 
          email
        },
        pass: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>