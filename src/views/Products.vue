<template>
    <h1>Products</h1>
    <div class="container">
        <div v-if="loading" class="loader">
            <Loader />
        </div>
        <div 
            v-else 
            v-for="product in products"
            :key="product.id"
            class="products"
            @click="$event => $router.push(`/products/${product.id}`)"
            >
            <h2>{{ product.title }}</h2>
            <img :src="product.images[2] || product.images[0]" alt="">
            <button @click="$event => $router.push(`/products/${product.id}`)">Product Details</button>
        </div>
    </div>
</template>

<script>
    import {ref} from '@vue/reactivity'
    import { onMounted } from 'vue';
    import Loader from '../components/Loader.vue'

    export default {
        components: {Loader},
        setup(){
            const products = ref([])
            const loading = ref(true)

            const fetchProducts = () => {
                const endpoint = 'https://dummyjson.com/products'
                fetch(endpoint)
                    .then((response) => response.json())
                    .then((response) => (products.value = response.products))
                    .finally(() => (loading.value = false))
            }
            onMounted(() => {
                fetchProducts()
            })
            return {
                products,
                loading
            }
        }
    }
</script>

<style scoped>
.container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 3rem 1rem;
    margin: 2rem 1rem;
    min-height: 50vh;
}
h1 {
    font-weight: 200;
    margin: 1rem;
}
h2 {
    font-weight: 200;
    font-size: 1rem;
}
.products {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
}
img {
    width: 100%;
    object-fit: cover;
    margin: 1rem 0;
}
.loader {
    position: absolute;
    display: flex;
    z-index: 10;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    justify-content: center;
    align-items: center;
}
button {
    margin-top: auto;
    margin-bottom: 0;
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: orange;
    color: black;
    width: 100%;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    left: -2px;
    top: -2px;
    z-index: 2;
    box-shadow: 1px 3px black ;
    transition:0.1s ease-in-out ;
}

button:hover {
    background-color: black;
    color: white;
    transform: translateY(2px) ;
    box-shadow:0 0 0 ;
}
</style>