<template>

    <Tareas @borrarTarea="(usuario, index)=>{$emit('borrarTarea', usuario, index)}" :listaTareas="tareas" :nombreUsu="usuario"/>

    <hr>

    <div class="container-fluid">

        <h1 class="text-center my-4">Consulta API tiempo</h1>

        <div class="row"> 
            
            <div class="col md-6"> 
                <div class="form-group">

                    <input type="text" v-model="ciudad" placeholder="Escribe la ciudad..." class="form-control">

                </div>

                <button @click="consulta" class="btn btn-primary">Buscar</button>

            </div>

            <div class="col md-6">

                <div class="text-center mb-3" v-if="cargar">Cargando...</div>

                <div v-if="data">
                    
                    <p class="text-center">Ciudad: {{ data.name ?? '' }}.</p>
                    <p class="text-center">Viento: {{ data.wind.speed ?? '' }} m/s.</p>
                    <p class="text-center">Temperatura: {{ total }} °C.</p>
                    <p class="text-center">Tiempo: {{ data.weather[0].main }} - <img :src="'https://openweathermap.org/img/wn/'+data.weather[0].icon + '@4x.png'" alt=""></p>
                    <p class="text-center">Humedad: {{ data.main.humidity}} %</p>


                </div>

            </div>

        </div>

    </div>

    <hr>

    <div>

        <router-link to="/">Volver</router-link>

    </div>

</template>

<script>

import Tareas from '../components/Tareas.vue'

export default {

    name: 'Menu',

    props: [ 'tareas' ],

    data(){

        return({

            usuario: localStorage.getItem('usuario') != null ? localStorage.getItem('usuario') : '',
            data: null,
            error: '',
            ciudad: '',
            cargar: false,
            total: 0,

        })

    },

    components: { Tareas },

    methods: {

        async consulta(){

            this.cargar = true;

            if( !this.ciudad ){ this.cargar = false; return; }
            
            // await fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ this.ciudad.replace(' ', '%20') +'&limit=5&appid=6e0bc62550b3021a67531aff80f352d3')
            await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.ciudad.replace(' ', '%20')+'&appid=6e0bc62550b3021a67531aff80f352d3')
                .then(response => {

                    if (!response.ok) {

                        this.cargar = false;

                        throw new Error('Error');

                    }

                    return response.json();

                })
                .then (result => {

                    setTimeout(() => {

                        this.data = result;
                        this.cargar = false;
                        this.total = (this.data.main.temp - 273.15).toFixed(2);


                    }, 2000)

                })

        },

    },

    mounted(){

        this.consulta();
        
    }

}

</script>

<style scoped>

.row {
    
    background-color:aqua;
    border: 3px solid rgb(red, green, blue);
    padding: 5px;
    margin: 3px
}

i {

    width: 100px;

}

</style>