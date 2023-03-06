<template>
    <div class="welcome">
        <h1>
            Shop for quality and value!
        </h1>
        <div>
            <RouterLink to="/login">
                Start Shopping
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 75vh;
    }
    h1 {
        font-weight: 200;
    }
    a {
  text-decoration: none;
  border: 2px solid gray;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 0.375rem;
  outline: none;
  background-color: orange;
  left: -4px;
  top: -4px;
  z-index: 2;
  box-shadow: 1px 3px black ;
  transition:0.1s ease-in-out ;
}
a:hover {
    color: white;
    background-color: black;
    /*transform: translateY(2px) ;*/
    box-shadow:0 0 0 ;
    
}
</style>