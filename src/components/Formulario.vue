<template>

    <div class="container-fluid">
        
        <div class="row justify-content-center mt-5">

            <div class="col-6">

                <h2 class="text-center">Introduce tus datos.</h2>

                <div v-if="error" class="alert alert-danger" role="alert">{{  error }}</div>

                <form @submit.prevent="login">

                    <div class="card p-1 mb-3">

                        <label>Usuario:</label>
                        <input type="text" id="usuario" v-model="usuario" required class="form-control" placeholder="Nombre de usuario...">

                    </div>

                    <div class="card p-1 mb-3">

                        <label>Contraseña:</label>
                        <input type="password" id="contraseña" v-model="contraseña" required class="form-control" placeholder="Contraseña...">

                    </div>

                    <div>

                        <button type="submit" class="btn btn-outline-primary">Enviar</button>

                    </div>

                </form>

            </div>

        </div>
    
    </div>

    <div class="container-fluid">

            <div class="row justify-content-center mt-3">

                <div class="col-6">

                    <p>Elige el usuario al que quieres añadir tareas: </p>

                    <select v-model="nuevaTarea.usuario">

                        <option value="" default disabled>Selecciona</option>
                        <option v-for="(usuario) in usuarios" :value="usuario" :key="usuario">{{ usuario }}</option>
                        
                    </select>

                    <br>

                    <div class="col mt-3">

                        <p>Añadir Tareas: </p>

                        <input type="text" v-model="nuevaTarea.tarea" class="me-2" placeholder="Escribe la tarea...">

                        <button @click="agregarTarea">Añadir tarea</button>

                    </div>

                    <button @click="mostrarTareas">Mostrar tareas</button>

                </div>

            </div>
    
    </div>

    <div class="container-fluid bg-secondary mt-5">

        <div>

            <h2>Sobre nosotros</h2>
            <a href="https://www.google.es/" class="text-warning">Ir a 
                <i class="bi bi-google"></i>
            </a>

        </div>

    </div>

</template>

<script>

import logins from '@/logins.json'

export default {

    name: 'Formulario',

    data(){

        return {

            usuario: '',
            contraseña: '',
            error: '',
            usuarios: [],
            tareas: {},

            nuevaTarea: {

                usuario: '',
                tarea: '',

            }

        }
    },

    methods: {

        encontrarUsuario(){

            return new Promise (( resolve) => {

                setTimeout(() => {

                    const encontrado = logins.find((e) => e.usuario === this.usuario && e.contraseña === this.contraseña);
                    resolve(encontrado)

                })

            })

        },

        async login (){

            this.error = '';
            let encontrado = await this.encontrarUsuario(this.usuario, this.contraseña);
            

            if (encontrado && this.encontrarUsuario) {

                localStorage.setItem('usuario', this.usuario);
                localStorage.setItem('contraseña', this.contraseña);
                this.$router.push('/Menu');

            } else {

                this.error = "Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo."

            }

        },

        agregarTarea: function(){

            if( this.nuevaTarea.tarea != '' && this.nuevaTarea.usuario != '' ){
                
                if( !this.tareas[ this.nuevaTarea.usuario ] ){ this.tareas[ this.nuevaTarea.usuario ] = []; }

                this.tareas[ this.nuevaTarea.usuario ].push( this.nuevaTarea.tarea );

                console.log( "Tareas de " + this.nuevaTarea.usuario, this.tareas[ this.nuevaTarea.usuario ] );

                this.$emit( 'actualizarTareas', this.tareas )

            }

        },

        mostrarTareas(){

            console.log(this.tareas)
            
        }
        

    },

    mounted(){ logins.map(login =>{ this.usuarios.push(login.usuario); }) }

}

</script>

<style scoped>

i {

    color: red;

}

</style>

