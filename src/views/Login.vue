<template>
    <div class="form">
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder="Username" v-model="userName">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" placeholder="Password" v-model="password">
            </div>
            <div>
                <button @click="handleLogin">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {ref} from '@vue/reactivity'
    import { useRouter } from 'vue-router';

    export default {
        setup(){
            const userName = ref('')
            const password = ref('')

            const router = useRouter()

            const dummyData = {
                userName: 'kuic',
                password: 'password',
            }

            const handleLogin = () => {
                if(
                    userName.value === dummyData.userName && password.value === dummyData.password
                ){
                    localStorage.setItem('token', 'morenike')
                    alert('Login successful!!!')
                    router.push({name: 'Products'})
                } else {
                    alert("Username or Password is incorrect!!!");
                }
            }
            return {
                userName, 
                password, 
                handleLogin,
            }
        }
    }
</script>

<style>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 75vh;
        margin: 1rem;
    }
    form {
        border: 2px solid black;
        width: 35%;
        max-width: 48rem;
        height: 90%;
        border-radius: 0.375rem;
        padding: 1rem;
    }


    form div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }
    label {
        display: block;
        font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));

    }
    input {
        --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    border: 2px solid black;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: 100%;
    border-radius: 0.375rem;
    padding: 0.75rem;
    }
button {
    margin-top: 0.75rem;
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: black;
    color: white;
    width: 100%;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
}
    @media screen and (max-width: 1024px) {
        form {
            width: 50%;
        }
    }
</style>