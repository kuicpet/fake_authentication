<template>
    <div class="category">
        <div>
            <RouterLink to="/products">Go Back</RouterLink>
        </div>
    </div>
    <div class="container">
        <div v-if="cartTotal === 0" class="empty">
            <span class="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </span>
            <h1>Cart is Empty</h1>
            <button @click="$event => $router.push('/products')">Discover Products</button>
        </div>
        <ul v-else>
            <li v-for="(item,index) in cartItems" :key="index">
                {{ item.title }} - {{ item.price - item.price * item.discountPercentage / 100 }}
                <button @click="removeFromCart">Remove</button>
            </li>
        </ul>
        <p v-else>Total : $ {{ cartTotal }}</p>
    </div>
</template>

<script>
    import { computed } from 'vue';
     import Loader from '../components/Loader.vue';
     import store from '../store';

     export default {
        components: {Loader},
        setup(){
            const cartItems = computed(() => store.getters.cartItems)
            const cartTotal = computed(() => store.getters.cartTotal)
            const cartTotalItems = computed(() => store.getters.cartItemsCount)

            const removeFromCart = index => {
                store.dispatch('removeFromCart', index)
            }

            return {
                cartItems,
                cartTotal,
                cartTotalItems,
                removeFromCart
            }
        }

     }
</script>

<style scoped>
.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1 {
    font-weight: 100;
}

button {    
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
.category {
    margin: 1rem 2rem;
    width: 15rem;
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
.container {
    display: flex;
    min-height: 70vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>