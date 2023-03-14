<template>
    <div class="container">
        <h1>Cart {{ cartTotalItems ? `(${cartTotalItems})` : 'is Empty' }}</h1>
        <div v-if="cartTotal === 0" class="empty">
            <span class="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </span>
            <p class="noItems">You have no Items in your cart</p>
            <button @click="() => $router.push('/products')">Continue Shopping</button>
        </div>
        <div v-else class="table">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in cartItems" :key="index">
                    <tr>
                        <td></td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.price - item.price * item.discountPercentage / 100 }}</td>
                        <td @click="removeFromCart" class="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 v-if="cartTotal > 0">SubTotal : $ {{ cartTotal.toFixed(2) }}</h4>
        <span v-if="cartTotal">
           <button class="checkout">Proceed to Checkout</button> 
           <button class="continue" @click="$event => $router.push('/products')">Continue Shopping</button> 
        </span>
    </div>
</template>

<script>
    import { computed } from 'vue';
     import Loader from '../components/Loader.vue';
     import store from '../store';

     export default {
        components: {Loader},
        setup(){
            const cartItems = computed(() => {
                return store.getters.getCartItems
            })
            const cartTotal = computed(() => store.getters.getCartTotal)
            const cartTotalItems = computed(() => store.getters.getCartItemsCount)

            
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
.checkout {
    margin: 1rem 0;
    background-color: #caff04;
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
    margin: 1rem;
}
.table {
    border: 2px solid black;
    width: 60%;
    margin: 1rem 0;
    border-radius: 6px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
thead {
    color: rgb(63, 61, 61);
    border-bottom: 2px solid black; 
}
th {
    font-weight: 100;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
     border-bottom: 1px solid black;
    text-align: justify;
    cursor: pointer;
}
td {
    border-bottom: 1px solid black;
     padding: 0.5rem;
     text-align: justify;   
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
    font-weight: bold;
 }
.noitems {
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: orange;
    color: black;
    width: 50%;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    font-weight: bold;
}
h4 {
    border: 2px solid black;
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: #ffa50045;
    color: black;
    width: 20%;
    padding: 0.5rem 1.25rem;
    text-align: center;
    cursor: pointer;
    outline: none;
    font-weight: bold;
}
.delete svg {
    cursor: pointer;
    color: red;
}
svg:hover {
    fill: red;
}

@media screen and (max-width: 800px) {
    h4 {
        width: 50%;
    }
}
 @media screen and (max-width: 400px) {
    .table {
        width: 100%;
    }
    p {
        width: 100%;
    }
    .noitems {
        width: 100%;
    }
    h4 {
        width: 50%;
    }
    th {
        font-weight: bold;
    }
 }
</style>