<template>
    <div class="login">
        <h1>Crie uma nova Conta</h1>

        <input type="text" placeholder="Email">
        <br>
        <input type="text" placeholder="Senha">
        <br>

        <div class="btn-registrar">
            <button>Registrar</button>
        </div>

        <p> 
            ou retorne ao
            <span>
                <router-link to="login">login</router-link> 
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: "signUp",
    data(){
        return {}
    },
    methods: {}
}
</script>

<style>
.btn-registrar button{
    background-color: #2E5EAA;
    color: #FFF;
}
</style>