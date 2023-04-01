<template>
    <div class="container">
        <h1>Checkout</h1>
        <div class="wrapper">
            <div class="billing">
                <div class="title">
                    <h4><span>1</span> Billing Address</h4>
                </div>
                <div class="form">
                    <form >
            <div>
                <label for="username">First Name</label>
                <input type="text" placeholder="First name" v-model="userName" required>
            </div>
            <div>
                <label for="password">Last Name</label>
                <input type="text" placeholder="Last name" v-model="password" required>
            </div>
            <div>
                <label for="password">Email Address</label>
                <input type="email" placeholder="Email address" v-model="password" required>
            </div>
            <div>
                <label for="password">Address</label>
                <input type="text" placeholder="Last name" v-model="password" required>
            </div>
            <div>
                <label for="password">Zip/Postal Code</label>
                <input type="text" placeholder="Zip/Postal code" v-model="password" required>
            </div>
            <div>
                <label for="password">City</label>
                <input type="text" placeholder="City" v-model="password" required>
            </div>
        </form>
                </div>
            </div>
            <div class="logistics">
                <div class="methods">
                    <div class="shipping">
                        <div class="title">
                            <h4><span>2</span> Shipping Method</h4>
                        </div>
                    </div>
                    <div class="payment">
                        <div class="title">
                            <h4><span>3</span> Payment Method</h4>
                        </div>
                    </div>
                </div>
                <div class="review">
                    <div class="title">
                         <h4><span>4</span> Checkout review</h4>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>SubTotal</th>
                    </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.container {
    display: flex;
    margin: 1rem;
    flex-direction: column;
}
.wrapper {
    display: flex;
    width: 100%;
}
h1 {
    font-weight: 100;
    margin: 1rem;
}
.billing {
    width: 30%;
    height: auto;
    border: 2px solid black;
    margin: 1rem;
    border-radius: 10px;
    padding: 1rem;
}
form {
        height: 90%;
        border-radius: 0.375rem;
        padding: 1rem;
    }


    form div {
        display: flex;
        flex-direction: column;
        align-items: justify;
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
        border-radius: 0.375rem;
        padding: 0.75rem;
    }
.title {
    border-bottom: 2px solid black; 
}
.logistics {
    display: grid;
    width: 70%;
    margin: 1rem;
    border-radius: 10px;
    
}
.methods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
}

.shipping, .payment, .review {
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    padding: 0 1rem;
    margin: 1rem;
}
h4 {
    text-transform: uppercase;
    font-weight: 200;
    margin-bottom: 2px;
}
h4 span {
    background-color: orange;
    color: black;
    padding: 0.2rem 0.5rem;
    border: 2px solid black;
    font-weight: bold;
    border-radius: 0.35rem;
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
</style>