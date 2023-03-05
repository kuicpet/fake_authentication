<template>
    <div class="footer">
        <small> Made with <span class='heart'>❤</span> by <a href='https://github.com/kuicpet' target='_blank'>Kingsley Umujeyan</a> &copy; {{ date }}</small>
        
    </div>
</template>
<script>
export default {
    setup(){

        const date = new Date().getFullYear()
        return {
            date
        }
    }
}

</script>
<style>
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem;
    }
    small {
        margin: 0 1rem;
    }
    .heart {
        color: red;
    }
</style>