<template>
        <div v-if="loading" class="loader">
            <Loader />
        </div>
        <div v-else>
            <div class="category">
               <RouterLink to="/products">Go Back</RouterLink>
                <p >Category - {{ product.category }}</p>
            </div>
            <div class="container">
                <div class="img_container">
                    <img  :src="product.thumbnail" alt="" >
                </div>
                <div class="details">
                    <h1>{{ product.title }}</h1>
                    <div class="price">
                        <h2 class="normal">${{ product.price }}</h2>
                        <h2 class="discounted">${{ product.price - product.price * product.discountPercentage / 100 }}</h2>
                    </div>
                    <Rating :rating="product.rating" />
                    <p>Brand : {{ product.brand }}</p>
                    <p><span>Product description</span> <br />{{ product.description }}</p>
                    <button @click="addToCart(product)" >Add to Cart - ${{ product.price - product.price * product.discountPercentage / 100 }} </button>
                </div>
            </div>
        </div>
</template>

<script>
    import {ref} from '@vue/reactivity'
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted } from 'vue';
    import Loader from '../components/Loader.vue';
    import Rating from '../components/Rating.vue';
    import store from '../store';

    export default {
        components: {Loader, Rating},
        setup(){
            const product = ref({})
            const route = useRoute()
            const router = useRouter()
            const loading = ref(true)

            const addToCart = (product) => {
                store.dispatch('addToCart', product).then(() => {
                    console.log(product)
                    router.push('/cart')
                })
            }
            const fetchProductDetails = () => {
                const {productId} = route.params
                const endpoint = `https://dummyjson.com/products/${productId}`;

                fetch(endpoint)
                    .then((response) => response.json())
                    .then((json) => (product.value = json))
                    .finally(() => (loading.value = false))
            }       
            onMounted(() => {
                fetchProductDetails()
            })
            
            return {
                product,
                loading,
                addToCart
            }
        }
    }
</script>

<style scoped>
.category {
    margin: 1rem 2rem;
    width: 15rem;
}
.category p {
    background-color: #caff04;
    border: 1px solid black;
    padding: 0.1rem 1rem;
    border-radius: 12px;
}
    .container {
        display: flex;   
        margin: 2rem 1rem;
        height: 100%;
    }
   .img_container {
    margin: 1rem;
    width: 55%;
   }
    img {
        object-fit: cover;
        width: 100%;
    }
    .details {
        display: flex;
        align-items: flex-start;
       flex-direction: column;
       padding: 0 1rem;
    }
    .price {
        display: flex;
        
    }
    h1 {
        color: #153a5b;
        font-weight: 200;
    }
    h2 {
        margin-right: 1rem;
        color: gray;
        font-weight: 100;
    }
    .discounted {
        color: black;
        font-weight: bold;
    }
    .normal {
        text-decoration: line-through;
    }
    button {    
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: orange;
    color: black;
    width: 80%;
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
a {
  text-decoration: none;
  border: 2px solid black;
  font-weight: 500;
  padding: 0.1rem 1rem;
  color: black;
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
span {
    font-weight: bold;
    color: black;
}
@media screen and (max-width: 800px ) {
    .container {
        flex-direction: column;
    }
    .img_container {
        width: 100%;
    }
}
@media screen and (max-width: 400px) {
    button {
        width: 100%;
    }
    .img_container {
        width: 100%;
    }
}
</style>