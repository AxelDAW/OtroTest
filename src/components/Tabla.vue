<template>

    <div class="container-fluid my-5">

        <div class="row">

            <div class="col-md-8 col-lg-6 text-center">

                <div class="p-4">

                    <p>Introduce lo que quieres buscar</p>
                    <input type="text" class="form-control mb-3" placeholder="Escribe aquí..." v-model="valor">
                    <button @click="buscarDatos" class="btn btn-primary">Buscar</button>

                </div>

            </div>

        </div>

    </div>

    <div class="container-fluid">

        <div class="row mt-5">

            <table class="table">

                <thead>

                    <tr class="table-secondary">
                        <th scope="col">id <span role="button" @click="ordenar('id')"><i class="bi bi-arrows-expand ms-2"></i></span></th>
                        <th scope="col">Usuario <span role="button" @click="ordenar('usuario')"><i class="bi bi-arrows-expand ms-2"></i></span></th>
                        <th scope="col">Contraseña <span role="button" @click="ordenar('contraseña')"><i class="bi bi-arrows-expand ms-2"></i></span></th>
                    </tr>

                </thead>

                <tbody>

                    <tr v-for="lista in listaFiltro" :key="lista.id">
                        <th scope="row">{{ lista.id }}</th>
                        <td>{{ lista.usuario }}</td>
                        <td>{{ lista.contraseña }}</td>
                    </tr>

                </tbody>

            </table>

        </div>  

    </div>

</template>

<script>

export default {

    name: 'Tabla',

    props: [ 'listaDatos' ],

    data(){

        return {

            orden: {},
            valor: '',
            listaFiltro: this.listaDatos,

        }

    },

    methods: {

        ordenar(campo) {

            if( !this.orden[campo] ){ this.orden[campo] = 1 };  // Compruebo si esto es falso, y si lo es, hago que sea 1

            this.listaDatos.sort((a, b) => {

                return (a[campo] < b[campo] ? 1 : -1) * this.orden[campo];

            });

            this.orden[campo] *= -1;                            // Con el codigo de arriba, ordenamos por ascendente o descendente y con el codigo de esta linea
                                                                // hacemos que se invierta el orden una vez se vuelva a clickar el boton
            this.listaFiltro.sort((a,b) => {

                if (a[campo] < b[campo]) { return -1 * this.orden[campo] };
                if (a[campo] > b[campo]) { return 1 * this.orden[campo] };
                return 0;
                                                                                // Sirve para ordenar igual que arriba pero la lista filtrada de los datos
            })

        },

        buscarDatos(){

            const filtro = this.valor.toLowerCase();                    // declaramos la variable filtro con esa funcion

            this.listaFiltro = this.listaDatos.filter(dato => {         // actualizamos la lista listaFiltro filtrando la listaDatos en minuscula

                return ( dato.id.toString().toLowerCase().includes(filtro) || 
                dato.usuario.toString().toLowerCase().includes(filtro) ||             // comparamos si dentro de cada objeto de listaDatos existe el mismo caracter String que convertimos
                dato.contraseña.toString().toLowerCase().includes(filtro))            // y si se incluye dentro del filtro que es lo que se a introducido en el filtro en minuscula

            })

        },

    },

    mounted(){

        console.log(this.listaDatos)
        console.log(this.listaFiltro)

    }

}



</script>
