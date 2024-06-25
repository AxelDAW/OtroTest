<template>

    <div class="container">

        <div class="row">

            <!--<div class="col">
                
                <p>Lista de tareas: </p>

                <ul>

                    <li v-for="(tarea,index) in tareas" :key="index">{{ tarea }}</li>

                </ul>

            </div>-->

        </div>

    </div>

    <div class="container">

        <Formulario @filtrar="recibirTareas"/>

    </div>


</template>

<script>

import Formulario from './Formulario.vue';

export default {

    name: 'Tareas',

    data(){

        return {

            nuevaTarea: '',
            tareas: [],

        }

    },

    methods: {

        mostrarTareas(){

            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';

        },

        recibirTareas(){

            

        }

    },

    mounted(){

        console.log(this.tareas)
    
    }

}

</script>