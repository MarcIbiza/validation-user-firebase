<template>
    <div>
        <h1>Registro de usuarios.</h1>

        <form @submit.prevent="crearUsuario({email:email, pass: pass1})">

            <input type="email" 
            v-model="$v.email.$model" 
            class="form-control my-2" 
            placeholder="Ingresa un email">

            <small class="text-danger d-block"
            v-if="!$v.email.required">
            Campo requerido</small>
            <small class="text-danger d-block"
            v-if="!$v.email.email">
            Email no válido</small>

            <!-- {{$v}} -->

            <input type="password" 
            v-model="$v.pass1.$model" 
            class="form-control my-2" 
            placeholder="Ingresa la contraseña">
            <small class="text-danger d-block"
            v-if="!$v.pass1.minLength">
            Mínimo 6 carácteres</small>

            <input type="password" 
            v-model="pass2" 
            class="form-control my-2" 
            placeholder="Repite la contraseña">
            <small class="text-danger d-block"
            v-if="!$v.pass2.sameAs">
            La contraseña no coincide</small>
            
            <button type="submit" 
            class="btn btn-info mt-3" 
            :disabled="!desactivar">
            Crear Usuario
            </button>

        </form>

        <!-- <p>{{error}}</p> -->
        <p class="text-danger mt-3 b-block" v-if="error === 'auth/email-already-in-use'">El email ya está registrado!</p>

    </div>
</template>


<script>
import {mapActions, mapState} from "vuex";
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';


export default {
    name : 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed: {
        ...mapState(['error']),
        desactivar() {
            return this.pass1 === this.pass2 && this.pass1 != ''
        }
    },
    validations: {
        email : {email, required},
        pass1: {minLength: minLength(6)},
        pass2: {sameAs: sameAs('pass1')}
    }
}
</script>