<template>
    <header class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login" v-if="!isAuthenticated">Login</RouterLink>
        <RouterLink to="/signup" v-if="!isAuthenticated">Sign up</RouterLink>
        <RouterLink to="/products" v-else>Products</RouterLink>
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
</style>