<template>
    <header class="nav">
        <RouterLink to="/">Home</RouterLink>
        
        <div class="links">
            
            <div class="user">
                <span v-if="isAuthenticated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
            </div>
            <div class="cart">
                <span v-if="isAuthenticated && (cartTotalItems > 0)">{{ cartTotalItems  }}</span>
                <svg v-if="isAuthenticated" @click="viewCart"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <button class="logout" v-if="isAuthenticated" @click="handleLogout" >Logout</button>
            <RouterLink v-if="!isAuthenticated" to="/login" >Login</RouterLink>
            <RouterLink v-if="!isAuthenticated" to="/signup" >Sign up</RouterLink>
        </div>
    </header>
</template>

<script>
    import store from '../store';
    import { computed } from '@vue/reactivity';
    import { useRouter } from 'vue-router';
    import currentUser from '../composables/current-user';

    export default {
        setup(){
            const router = useRouter()

            const viewCart = () => {
                router.push('/cart')
            }
            
            const cartTotalItems = computed(() => store.getters.getCartItemsCount)
            
            const handleLogout = () => {
                store.dispatch('logout').then(() => {
                    router.push('/login')
                })
            }

            const isAuthenticated = computed(() => {
                return currentUser()
            })

            return {
                isAuthenticated,
                handleLogout,
                viewCart,
                cartTotalItems 
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cart span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 15px;
        width: 0.75rem;
        height: 0.75rem;
        background-color: orange;
        color: black;
        padding: 3px;
        border-radius: 100%;
        font-size: 12px;
        border: 2px solid black;
        font-weight: bold;
        z-index: 10;
    }
    .user {
        margin-right: auto;
    }
    a {
        text-decoration: none;
        border: 2px solid gray;
        font-weight: 500;
        padding: 0.5rem 1rem;
        color: gray;
        border-radius: 0.375rem;
        outline: none;
        margin: 0 1rem;
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
        /*transform: translateY(-2px) ;*/
        box-shadow:0 0 0 ;
    }

    button {
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: transparent;
    color: black;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    margin-left: auto;
}
    .logout:hover {
        background-color: red;
        border: 2px solid red;
        color: white;
    }
    svg {
        background-color: none;
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
            margin: 0;
         }
    }
</style>