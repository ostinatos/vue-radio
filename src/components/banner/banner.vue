<template>
    <div>
        <div class="logo-wrapper">
            <img class="logo" :src="bannerLogo"></img>
        </div>
        <div class="banner-text">FLUID RADIO – EXPERIMENTAL FREQUENCIES</div>
    </div>
</template>
<script>
let assetContext = require.context("@/assets/", true, /\.jpg$/)

export default {
    data() {
        return {
            bannerLogo: assetContext("./fluid.jpg")
        }
    }
}
</script>

<style scoped>
.logo {
    display: block;
    margin: 0 auto;
}

.banner-text {
    text-align: center;

    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: normal;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.24s ease-in-out;
    -moz-transition: opacity 0.24s ease-in-out;
    transition: opacity 0.24s ease-in-out;

    -webkit-font-smoothing: antialiased;

    color: #8c919b;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 1.5em;

    padding: 0;
}
</style>
