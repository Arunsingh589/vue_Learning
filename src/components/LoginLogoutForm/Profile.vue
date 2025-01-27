<template>
     <div class="login">
        <h3 @click="logout">Log out</h3>
    </div>
    <div class="name">
         <p>{{ getUserName() }}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        methods: {
            logout(){
                localStorage.removeItem("username")
                this.$router.push("/")
            },
            getUserName(){
                return  localStorage.getItem("username");
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
.name{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>