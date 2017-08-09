<template>
    <div class="search-panel">
        <input class="search-input" placeholder="search"></input>
        <button class="search-button icon icon-search" />
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.search-panel {
    float: right;
    width: 10%;
    font-size: 16px;
    /* line-height: 1.5; */
}

.search-input {
    display: inline-block;
    width: 70%;
    padding: 0;
    border-width: 0;
    background-color: #282828;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.05em;
    margin: 0 2px;
}

.search-input:focus{
    outline: none;
}

.search-button {
    display: inline-block;
    width: 20%;
    background-color: #282828;
    color: white;
    padding: 0;
    border-width: 0;
    cursor: pointer;
    line-height: 50px;
    font-size: 16px;
}
</style>
