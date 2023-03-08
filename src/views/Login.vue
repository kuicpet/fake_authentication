<template>
    <div class="form">
        <h1>Login to your Account</h1>
        <form >
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder="Username" v-model="userName" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" placeholder="Password" v-model="password" required>
            </div>
            <div>
                <button @click="handleLogin" :disabled="!userName || !password">Login</button>
            </div>
        </form>
        <div>
            <p>Don't have an account? <RouterLink to="/signup">Sign up</RouterLink> </p>
        </div>
    </div>
</template>

<script>
    import {ref} from '@vue/reactivity'
    import { useRouter } from 'vue-router';
    import store from '../store'

    export default {
        setup(){
            const userName = ref('')
            const password = ref('')

            const router = useRouter()

            

            const handleLogin = (e) => {
                e.preventDefault()
                //console.log(userName.value, password.value)
                store.dispatch('login', {userName: userName.value, password: password.value}).then(() => {
                    router.push('/products')
                }).catch((error) => console.log(error))
            }
            return {
                userName, 
                password, 
                handleLogin,
            }
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 75vh;
        margin: 1rem;
    }
    h1 {
        font-weight: 200;
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
    a {
        color: blue;
        border: none;
        text-decoration: underline;
    }
button {
    margin-top: 0.75rem;
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: black;
    color: white;
    width: 100%;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    left: -4px;
    top: -4px;
    z-index: 2;
    box-shadow: 1px 3px black ;
    transition:0.1s ease-in-out ;

}

button:disabled {
    background-color: lightgray;
    color: black;
    cursor: not-allowed;
}
  @media screen and (max-width: 768px) {
        form {
            width: 50%;
        }
    }
    @media screen and (max-width: 400px) {
        form {
            width: 90%;
            height: auto;
        }
        h1 {
            font-weight: 400;
        }
        .form {
            justify-content: flex-start;
        }
    }
</style>