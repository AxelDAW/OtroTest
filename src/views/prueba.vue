<template>

    <Tabla :listaDatos="listaDatos"/>

</template>

<script>

import Tabla from '../components/Tabla.vue'
import logins from '@/logins.json'

export default {

    name: 'prueba',

    components: { Tabla },

    data(){

        return({

            listaDatos: [],

        })

    },

    mounted(){

        this.listaDatos = logins;

    }

}

</script>