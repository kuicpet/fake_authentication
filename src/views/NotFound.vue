<template>
    <div class="container">
        <h1>The page you're looking for can't be found.</h1>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABuCAYAAABWSF80AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoHSURBVHgB7Z3/deO4Ece/zsv/56vAcxXEqSBIA1mnArGDdSoQt4J1KhC3Au81EGkrWKeBmNdA7GsgG82ROA5AQsQvUqS8n/fwRFEgSAwGMwOApK6wTuiY3h2TOqbb9rtN3abXYzoc05djesJ3erAA98f0LTI9H9N7DDfCm2SDcaG9wE+4nG+LN84d+kJ5aPeT45hrNJrNeSo0WjqkuYQ3CMEUyB6NwGJQ6JuPNynYAqYAYgUquYdpKnKVuxq+oq9ZOzRalwKbBinYj3gjsPZIgbLnfkQnDBbwJqCsAo0tfmyPtR0b4Q2g0FX4s/Vbgc7WnrKL7KikHWVBsvbv2iTt9QPeAGz7dIXvHXkKdILZiv13Yj8LsUTT5W0UTNNy8XA31RVWJ/Jx167afKx9WjP3GLe9fKw0A4QLR3ZbhUYAbFdvHfkfMK7ZY+cJOW6VSA2S2viC4RBIOh8Ff6SZ2SGRP2C5XKMT3KtILtie0jH9Gc1EytZRZoF+F5cTLa5ecBFw5bT2fBX77zBccR2/MlrzyMpTYVjTCWZ0cLHI8f7nkbyqzaeFTe33wspXwTQnEhmvJvFHLBcS2/VIXhYmm4anE2UwrMGs9f9G35TUIj9h/JxOLkWojLbBr+JYO+7k3/6JiVmyo7oR22Mz9vp3PQH9vv3+BXFc7OSKjB19PHIJ0y6WCEOe7x0uFDtG9UGhcU4xmlbhDQwA5g5xsg0AlmpTSWzXmAdptxUSWINQXzEPT9b5CZEsVajSJv6KedD3B2juEMkahFpjPn4W2x8RucTyvfubVNb3qCjgu6aacAN+QCJrEOrcs0YlzIYkBLJUocoh6lyOSiKHtwqBLHnsr5nTpmpkePUXXAhyHE6YH4I5oruICRaesssyYZyAbNgSF8AShCrnAlavrVtkXNpIwL4foMQK4UrILreEO0ZWra18sfbdffoOk3Mjr6vESnAJdCk3jCmsUFt36N96vrQZ+FVFArZTKmFqrcIyKLASbVXoC5Qw/zKKL7IHbbBACGYs+tjul972M5ZFiWU50B48+SvDJmr3S0EvbZnYjlsVFgTB7Pa6KylME59eI58A5P2vS4hMfqfC8FKwa38KhE67ckQSCgt0WARTS2lkfyoF8tvo0ehk7vnUUmxX6GbYldh/QL4llFur3BzIxcEtzgzBrY3SQeUMV6aIeeWzXWc3AQVMR1S06T2mc1CyEXOyF+UW9o9z3Z9KMLsKfx9yRjXcN9xqL35zTD8d0w/H9AsabRl6QcIUXV/zMzrN555VYUZYEDIm9UmsrdJTK/i9OOG5PRe1x5WYLvyxe8FsJoA15RnDld+JxAIbevkBC+gRYQ0iG0U2xBQDCVn+LBM/G/QryxehThxTYLgR7DIeYNrjyuM4Qn7ureuaFFugXGEVcHyFvlB2GL+b+g7Dwv2KaZgtCpDPPukKEcKwBRPatUr0G2QqJp+mJJgC4ROGtp7t1DaIQ9roKSdmJp8LqGB2eUIYhDQN1ciH2qaek1WY0MwQTIEohCO1PKXLPmYqx4esoRXbTva8rPI6LEqpSIE83pqQ3rihSLsaZWoUxgPxrwivTC4t3cI0QXOQZFflBfskFg55lKuQT0tl42wwD4U4Z9D0ooJZcf0GswJmEG6PjHwcVoU8Wlphfi1lKPa8UgPYEVyfOEGJvmCvPctWCGdofiG3lo45oOCnE2VA76N5+hifF2kpmNpPVlIicahUoGk07SBlg+TQ9iEKjCuHdFZjI7/fiH28UMGsbInTL9rKkSrkHy769KRK5CngQfABgj3yC24occU3yE9hncOFVLzSZ5L6B7Fdww/uAjvkfclLLT458QMWXFF+y8QB07AV2yX8uJli5p81phrY/4om5HhCI5AndA9J1FgeLFBqt+tj+jSQ5wqNSXgv9v0IDyp0qj02YiAMOw6FdUEwbWmJznn+1Ka/Ynia0msO4N4q/BR7hEcKS6RCmn0fRcGvFezJBcI6IYQJ8X8w77F9ufI8EQtTO52/Y3g4ptAtKxzQdI81InvYQexngek3CjHsD3gVl1dWa0SM4kr0g3QbOUjYY51sEdiNWwim9nrzbJ2QA3kF8w8MpOBnW7bNhJzcDjVfhEih2kPPsfQR64HQ9/ahx0cJVR8cKljCsiGkz+faC57ByAvgcfwejSNzCZvzb7BMc0Dom7WY61SIs8W/Iy+CHHlkbCtPxlqQc+iaAttQ+13/hDikPd4jAh+hAn0tsAWsHd3cGsznq9AfBRHiKUVZQbP/mlDbUcD9RJ+MFriFWdA8juaWZ43OKXDVlm+bqSrDeeQK7oNv8C+Rwgw5noWm2m0OnEMqUsOcpWJ+aT9ZSL+ie70ytft5dk2HekMNpF9CE7xYN4AcHP0DEYRqqsZeclDo/mFiTJNzJr6OEvl6gT08V3Npqn4GiWEN+dGR51Z83qDRsmvxGQuf8wmNvfuEvO9lUTCd09Vcd1JLj//kyMMVPbTbLmNP1qe2v0wNc86zbsusxfYU3IntAyKJ6f4F0oJrF8+i3A3OQ5b3AcQItcxxYosCiQF3BgimPH7rked4L1Wubig1s8R5kF2/RmvaQoUa6yxIbOcQKsFcovmC8yDXpj4hEkJc95fBsUI6Faax0SEomLIgREKIE+oeeYX6nLm8GGSdjIZ1hVQ6VmSbcdN+r2HGpa7QyFWepkYaCubS8QHzU8BszA+nMnPlt/CbMw3pdlKzUkcylSjrHvPDy9OyPiflQBh/HkmGMAR/YkyGi3P+yxmPBKWM/jN0Dbr78w97K8MBzciGJy7YY/+pLZQrFTvUS/X8Cp2mHzDvnS1c93/BlNEH1zVwJil93lbIByFfkF5h/q7PfoSX2+1eXJ46qEJ8tx6DYIYee6QhK0aYHtZO+4ZivnmiHDsw1/iZuyUHwzu4bXOKUOXiWqrGj8HCLNF32P+FZw+RB8V4ZoL/fag7xPOAfBo/BHdzlzBZO9me3voWJgvgShP8OXUvAGvT3kqEeJ4Hytf/PxXLFTqbyaO+obqwh98gkKGVz317Ej1fqQYunqyLeGmP4bypsajNLU73AL7eTZvvyiOxRrIgh9astGZyVy9j6qJHSHrBLQS5zlS3F1ljGip02lK3n+TIq2f59ZqVRI8UXceyQA9objqLDRsNWCNdXWAsEaZFTgRvrOv9lpi0VrKXV8jAlWO/bs0bNF3lBuZShryl8FQ5OSCY3p6HibX1uzqmv2FYC/W1fbP212g0kpPW7CzECkMu5DEFEuYTR6jQaecB4/e9yi7Oy9R6kbFuP58w7ZpVEhXMbrRFfsg6xztcOKwR3C3tMIe1ipDOLfrD51WQagsJ7viTuxkvc7Aw+FmnGu4/6ZY2moXJDXNn5bFt6cVTwH/aMDS9IPxJw4uiQHxY5grqvYeGS2HKUEihmYPVnvjU7TuvIrHZ4DncA86zVJLM/wEIscdVDITgawAAAABJRU5ErkJggg==" alt="">
        <RouterLink to="/">Okay</RouterLink>
    </div>
</template>
<script>
    export default {
        name: 'NotFound'
    }
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 75vh;
    }
    h1 {
        font-weight: 200;
        text-align: center;
    }
    img {
        object-fit: contain;
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
        margin: 2rem;
    }
    a:hover {
    color: white;
    background-color: black;
    /*transform: translateY(2px) ;*/
    box-shadow:0 0 0 ;
    
    }
    @media screen and (max-width: 400px) {
    .container {
        justify-content: flex-start;
    }
    a {
            width: auto;
            margin: 0 auto;
        }
        img {
            margin: 2rem 0;
        }
}
</style>