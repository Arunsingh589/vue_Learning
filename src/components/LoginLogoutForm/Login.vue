<template>
    <div class="login">
        <h3>Login</h3>
    </div>
    <div class="Login_name">
      <h2>Login Page</h2>
    </div>
    <form class="login_filed" @submit.prevent="handleLogin">
        <label for="">Username</label>
        <input type="text" class="input1" v-model="user.username" placeholder="Enter your name">
        <label for="">Password</label>
        <input type="password" class="input2" v-model="user.password" placeholder="Enter your password">
        <p v-if="error">{{ error }}</p>
        <div class="button_setup">
            <button class="button_tag" type="submit">Login</button>

        </div>
    </form>

   
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                user: {
                username: '',
                password: '',
                },
                error: ''   
            }
        },
        methods: {
            handleLogin(){
                if(this.user.username.trim().length < 4  || this.user.password.trim().length <4  ){
                     this.error = "Username and password must be at least 4 characters Long";
                        return;
                }
                 localStorage.setItem("username", this.user.username)
                this.$router.push("/profile")  
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
.Login_name{
    background-color: rgb(119, 45, 119);
    justify-content: center;
    display: flex;
    align-items: center;
    color: white;
    margin-right: 100px;
    width: 99.5vw;
    height: 140px;
    overflow-x: none;
}
.login h3{
    padding: 13px;
    border-radius: 8px;
    margin-right: 60px;
    background-color: #fff;
    cursor: pointer;
}

.login_filed{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
label{
    display: flex;
    align-items: flex-start;
    width: 400px;
    margin-bottom: 10px;
    font-size: 20px;

}
.input1{
    width: 400px;
    height: 34px;
    margin-bottom: 50px;
    border-radius: 6px;
    border: 1px solid lightgray;

    /* padding: 10px; */
}
.input2{
    width: 400px;
    height: 34px;
    margin-bottom: 20px;
    border-radius: 6px;
    border: 1px solid lightgray;


    /* padding: 10px; */
}
.button_setup{
    width: 400px;
   
}
button{
    background: #fff;
    color: black;
    border: 1px solid lightgray;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    /* justify-content: flex-start; */
    align-items: flex-start;
    cursor: pointer;

}

body::-webkit-scrollbar{
    display: none;
}


</style>