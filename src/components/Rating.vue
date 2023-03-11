<template>
    <div class="rating">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= rating }">
            <svg v-if="i <= rating" fill="orange" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg v-else fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </span>
    </div>
</template>

<script>
    //import {StarIcon} from 'vue-feather-icons'
    // import StarIcon from '../assets/star.svg'
    export default {
        //components: {StarIcon},
        props: {
            rating: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>
.rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.star {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.star.filled svg {
  fill: orange;
}
.star.empty svg {
  fill: none;
  stroke: gray;
}
</style>