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


</template>

<script>

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

        }

    },

    mounted(){

        console.log(this.tareas)
    
    }

}

</script>