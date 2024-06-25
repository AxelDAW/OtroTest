<template>

    <nav class="navbar navbar-expand-md navbar-light navbar-light">

        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbar-toggler">

                <a class="navbar-brand" href="#">

                    <i class="bi bi-airplane"></i>

                </a>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <a :class="rutaAhora=='/' ? 'nav-link active' : 'nav-link'" class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Amigos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Perfil</a>
                    </li>

                </ul>

                <form class="d-flex">

                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>

                </form>

            </div>

        </div>

    </nav>

    <br>

    <!-- <div class="container text-center">
        <div class="row">
            <div class="col col-12 col-md-4">Hola</div>
            <div class="col col-12 col-md-8">Hola</div>
        </div>
        <div class="row">
            <div class="col">Hola</div>
            <div class="col">Hola</div>
            <div class="col">Hola</div>
        </div>
    </div> 

    <br>
    
    <div class="container bg-primary">
        .container
    </div>


    <div class="container-fluid bg-secondary">
        .container-fluid
    </div> 
    -->
    
    <br>

    <Tareas></Tareas>

    <div>

        <router-link to="/">Volver</router-link>

    </div>

</template>

<script>

import Tareas from '../components/Tareas.vue'

export default {

    name: 'Menu',

    components: { Tareas }

}

</script>

<style scoped>
.row {
    background-color: blue;
    border: 3px solid rgb(red, green, blue);
    padding: 5px;
    margin: 3px
}

.col {
    background-color: orange;
    color: white;
    font-size: 30px;
    border: 3px solid black;
}

i {

    width: 100px;

}


</style>