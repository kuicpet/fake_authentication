<template>
    <div class="form">
        <h1>Create your Account</h1>
        <form>
            <div>
                <label for="email">Email</label>
                <input type="email" placeholder="Email" v-model="email" required>
            </div>
            <div>
                <label for="username">Username</label>
                <input type="text" placeholder="Username" v-model="userName" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" placeholder="Password" v-model="password" required>
            </div>
            <div>
                <button @click="handleSignup" :disabled="!userName || !password || !email" >Sign up</button>
            </div>
        </form>
        <div>
            <p>Already have an account? <RouterLink to="/login">Login</RouterLink> </p>
        </div>
    </div>
</template>

<script>
    import {ref} from '@vue/reactivity'
    import { useRouter } from 'vue-router';

    export default {
        setup(){
            const userName = ref('')
            const password = ref('')
            const email = ref('')

            const router = useRouter()

            const dummyData = {
                userName: 'kuic',
                password: 'password',
                email: ''
            }

            const handleSignup = () => {
                if(
                    userName.value === dummyData.userName && password.value === dummyData.password && email.value === dummyData.email
                ){
                    localStorage.setItem('token', 'morenike')
                    alert('Signup successful!!!')
                    router.push({name: 'Login'})
                } else {
                    alert("Email or Username or Password is incorrect!!!");
                    return
                }
            }
            return {
                userName, 
                password, 
                handleSignup,
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
        }
    }
</style>