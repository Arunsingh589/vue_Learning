<template>
    <div class="login">
        <h3 @click="goToLogin">Login</h3>
    </div>
<!-- <RouterView></RouterView> -->
    <div class="home">
          <h1>Home</h1>
    </div>
</template>

<script>
    export default {
        name: "Home" ,
        methods: {
            goToLogin(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style  scoped>

.login{
    background-color: rgb(240, 240, 35);
    justify-content: flex-end;
    display: flex;
    margin-right: 100px;
    width: 99.5vw;
    overflow-x: none;
}
.login h3{
    padding: 13px;
    border-radius: 8px;
    margin-right: 60px;
    background-color: #fff;
    cursor: pointer;
}
body::-webkit-scrollbar{
    display: none;
}

.home{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>