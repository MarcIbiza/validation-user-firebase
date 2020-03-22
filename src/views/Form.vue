<template>
<div class="mt-5"> 

    <h1>Formulario</h1>

    <b-row>
        <b-col md="3">
            <b-form-input type="text" placeholder="Introduce tu nombre" v-model="texto" :state="comprobar"></b-form-input>
            <small>Mínimo 3 carácteres</small>   
            <p>{{texto}}</p>
        </b-col>

        <b-col md="3">
            <b-form-select v-model="selected" :options="animales">

            </b-form-select>    
            <p>Seleccion: {{selected}}</p>
        </b-col>

        
        <b-col md="3">
            <b-form-radio-group v-model="selectedRadio" :options="animalesRadio">

            </b-form-radio-group>    
            <p>Radio: {{selectedRadio}}</p>
        </b-col>

        <b-col md="3">
           <b-form-checkbox-group v-model="selectedCheckbox" :options="animalesCheckbox">

            </b-form-checkbox-group>    
            <p>Radio: {{selectedCheckbox}}</p>
        </b-col>

    </b-row>


</div>
</template>


<script>
export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            selected: null,
            animales: [
                {value: null, text: 'Seleccione un animal'},
                {value: 'perro', text: 'Guau Guau'},
                {value: 'gato', text: 'Miau Miau'},
                {value: 'pato', text: 'Cuack Cuack'},
            
            ],
            selectedRadio: null,
            animalesRadio: [
               {value: 'perro', text: 'Guau Guau'},
               {value: 'gato', text: 'Miau Miau'},
               {value: 'pato', text: 'Cuack Cuack'},
            ],
            selectedCheckbox: [],
            animalesCheckbox: [
               {value: 'perro', text: 'Guau Guau'},
               {value: 'gato', text: 'Miau Miau'},
               {value: 'pato', text: 'Cuack Cuack'},
            ]
        }
    },
    computed: {
        comprobar() {
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>