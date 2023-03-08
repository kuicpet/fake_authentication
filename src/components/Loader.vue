<template>
    <div class="spinner"></div>
</template>

<style>
      .spinner {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid #000;
        border-top: 3px solid orange;
        animation: spin 0.8s linear infinite;

      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
</style>