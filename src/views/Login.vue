<template>
    <div class="login">
        <h1>Login</h1>

        <input type="text" placeholder="Email">
        <br>
        <input type="text" placeholder="Senha">
        <br>

        <div class="btn-login">
            <button>Login</button>
        </div>

        <p> 
            Você não tem conta?
            <span>
                <router-link to="registrar"> crie uma conta</router-link>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: "login",
    data(){
        return {}
    },
    methods: {}
}
</script>

<style>
input {
    height: 40px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
}

button{
    height: 40px;
    width: 100px;
    border: none;
    border-color: none;
    background-color: #55D6BE;
    cursor: pointer;  
    color: #FFF;
}
</style>