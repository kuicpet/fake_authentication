<template>
    <div class="welcome" >
        <div class="hero">
            <h1>
                    Shop for quality and value!
                </h1>
            <RouterLink to="/login">
                Shop NOW
            </RouterLink>
        </div>
        <div>
            <img src="../assets/background.jpg" alt="image" />

        </div>

            
                
        
    </div>

    
</template>

<style scoped>
    .welcome {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 75vh;
    }
    .hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
       margin: 4rem;
    }
    h1 {
        font-weight: 200;
    }
    img {
        width: 100%;
    }
    a {
  text-decoration: none;
  border: 2px solid gray;
  font-size: 1rem;
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
  text-transform: uppercase;
}
a:hover {
    color: white;
    background-color: black;
    /*transform: translateY(2px) ;*/
    box-shadow:0 0 0 ;
    
}

@media screen and (max-width: 400px) {
        .welcome {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        a {
            width: auto;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 800px) {
        .welcome {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
    }
</style>