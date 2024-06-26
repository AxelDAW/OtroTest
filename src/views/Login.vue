<template>

    <Formulario @actualizarTareas="(tareas)=>{ $emit('actualizarTareas', tareas) }"></Formulario>
    <!-- <p>{{ tareas['Axel'] ?? '' }}</p> -->

</template>

<script>

import Formulario from '../components/Formulario.vue';

export default {

    name: 'Login',

    props: [ 'tareas' ],

    components: { Formulario }

}

</script>

