<template>

    <div class="container-fluid">
        
        <div class="row justify-content-center mt-5">

            <div class="col-6">

                <h2 class="text-center">Introduce tus datos.</h2>

                <div v-if="error" class="alert alert-danger" role="alert">{{  error }}</div>

                <form @submit.prevent="login">

                    <div class="card mb-3">

                        <label>Usuario:</label>
                        <input type="text" id="usuario" v-model="usuario" required class="form-control" placeholder="Nombre de usuario...">

                    </div>

                    <div class="card mb-3">

                        <label>Contraseña:</label>
                        <input type="password" id="contraseña" v-model="contraseña" required class="form-control" placeholder="Contraseña...">

                    </div>

                    <div>

                        <button type="submit" class="btn btn-outline-primary">Enviar</button>

                    </div>

                </form>

            </div>

            <div class="col">

                <p>Elige el usuario al que quieres añadir tareas: </p>

                <!-- Preguntar mañana como hacer
                <select v-model="mostrarUsuarios" name="select">

                    <option value="usuarios" v-for="(usuario) in usuarios" :key="usuario">{{ usuario }}</option>
                    
                </select>
                -->   
                <select>

                    <option value=""></option>
                    <option value="Axel">Axel</option>
                    <option value="Plamen">Plamen</option>
                    <option value="Pepe">Pepe</option>
                    <option value="Adri">Adri</option>

                </select>

            </div>

            <br>

            <div class="col">

                <p>Añadir Tareas: </p>

                <input type="text" v-model="nuevaTarea" class="me-2">

                <button @click="mostrarTareas()">Añadir tarea</button>

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

    },

    mounted(){
        /*
        const usu = logins.map(login => login.usuario)
        this.usuarios.push(usu)
        console.log(this.usuarios)
        */
    }

}

</script>

<style scoped>

i {

    color: red;

}

</style>

