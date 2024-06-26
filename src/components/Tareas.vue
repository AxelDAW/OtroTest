<template>

    <div class="container">

        <div class="row">

            <div class="col">
                
                <p>Lista de tareas: </p>

                <ul>

                    <li v-for="(tarea,index) in listaTareas[nombreUsu]" :key="index">{{ tarea }}

                        <button @click="$emit('borrarTarea', nombreUsu, index)">Eliminar</button>

                    </li>

                </ul>

            </div>

        </div>

    </div>




</template>

<script>

export default {

    name: 'Tareas',

    props: ['listaTareas', 'nombreUsu'],

    mounted(){

        console.log( this.listaTareas );

    }

}

</script>