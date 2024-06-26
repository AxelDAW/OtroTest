<template>

  <router-view @borrarTarea="(usuario,index)=>{tareas[usuario].splice(index,1)}" @actualizarTareas="(t)=>{ tareas = t; }" :tareas="tareas"/>

</template>

<script>

export default {

  name: 'App',

  data(){

    return({

      tareas: [],

    })

  }

}

</script>