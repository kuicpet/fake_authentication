<template>
    <header class="nav">
        <RouterLink to="/">Home</RouterLink>
        <div class="links">
            <RouterLink to="/login" v-if="!isAuthenticated">Login</RouterLink>
            <RouterLink to="/signup" v-if="!isAuthenticated">Sign up</RouterLink>
            <RouterLink to="/products" v-else>Products</RouterLink>
        </div>
        <button @click="handleLogout" v-if="isAuthenticated">Logout</button>
    </header>
</template>

<script>
import { computed } from '@vue/reactivity';
    import { useRouter } from 'vue-router';

    export default {
        setup(){
            const router = useRouter()

            const handleLogout = () => {
                localStorage.removeItem('token')
                router.push('/login')
            }

            const isAuthenticated = computed(() => !!localStorage.getItem('token'))

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
    /*transform: translateY(2px) ;*/
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