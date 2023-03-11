<template>
    <header class="nav">
        <RouterLink to="/">Home</RouterLink>
        <div class="links">
            <button class="logout" v-if="isAuthenticated" @click="handleLogout" >Logout</button>
            <RouterLink v-if="!isAuthenticated" to="/login" >Login</RouterLink>
            <RouterLink v-if="!isAuthenticated" to="/signup" >Sign up</RouterLink>
        </div>
    </header>
</template>

<script>
    import { computed } from '@vue/reactivity';
    import { useRouter } from 'vue-router';
    import store from '../store';

    export default {
        setup(){
            const router = useRouter()

            const handleLogout = () => {
                store.dispatch('logout').then(() => {
                    
                    router.push('/login')
                })
            }

            const isAuthenticated = computed(() => {
                return store.state.loggedIn
            })

            return {
                isAuthenticated,
                handleLogout
            }
        }
    }
</script>
<style scoped>
    .nav {
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: white;
    }
    .links {
        display: flex;
        margin-left: auto;
        justify-content: space-between;
        width: 25%;
        align-items: center;
    }
    .cart {  
        padding: 0.5rem;
    }
    a {
        text-decoration: none;
        border: 2px solid gray;
        font-weight: 500;
        padding: 0.5rem 1rem;
        color: gray;
        border-radius: 0.375rem;
        outline: none;
        left: -4px;
        top: -4px;
        z-index: 2;
        box-shadow: 1px 3px gray ;
        transition:0.1s ease-in-out ;
    }
    a:hover {
        color: white;
        background-color: black;
        /*transform: translateY(2px) ;*/
        box-shadow:0 0 0 ;
    }

    .router-link-active {
        color: white;
        background-color: black;
        transform: translateY(-2px) ;
        box-shadow:0 0 0 ;
    }

    button {
    margin-top: 0.75rem;
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: black;
    color: white;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    margin-left: auto;
}
    .logout:hover {
        background-color: red;
        border: 2px solid red;
    }
    @media screen and (max-width: 1024px) {
        .links {
            width: 50%;
        }
    }
    @media screen and (max-width: 400px) {
        .links {
            width: 60%;
        }
         a {
            left: 0;
            top: 0;
            z-index: 2;
             box-shadow: none;
         }
    }
</style>