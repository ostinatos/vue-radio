<template>
    <div class="search-panel">
        <div :class="inputWrapperClass">
            <input class="search-input" placeholder="search" @click.stop="handleInputActivated"></input>
        </div>
        <button class="search-button icon icon-search" />
    </div>
</template>
<script>
export default {
    inject: ['msgBus'],
    methods: {
        handleInputActivated() {
            this.inputWrapperClass["input-wrapper-extended"] = true;
        },
        handleAppClicked(){
            this.inputWrapperClass["input-wrapper-extended"] = false;
        }
    },
    data() {
        return {
            inputWrapperClass: { "input-wrapper": true, "input-wrapper-extended": false }
        }
    },
    mounted(){
        this.msgBus.$on("app-click", this.handleAppClicked)
    }
}
</script>
<style scoped>
.search-panel {
    float: right;
    /* assign width and height, so that it will got its own size, despite the children's positioning(eg: absolute)  */
    width: 10%;
    height: 50px;
    font-size: 16px;
    /* to achive take up 100% height of parent element  */
    /* display: flex; */
    /*create positioned context for child elements  */
    position: relative;
}

.input-wrapper {
    width: 70%;
    display: inline-block;
    /* to achive take up 100% height of parent element  */
    /* align-items: stretch; */
    position: absolute;
    transition: width 0.5s ease-in-out;
}


/* extended style for input wrapper  */

.input-wrapper-extended {
    left: -120%;
    width: 200%;
}

.search-input {
    display: inline-block;
    width: 100%;
    /* use tricky top/bottom padding value to achive vertical alignment  */
    padding: 16px 0;
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

.search-input:focus {
    outline: none;
}



.search-button {
    /* display: inline-block; */
    width: 20%;
    background-color: #282828;
    color: white;
    padding: 0;
    border-width: 0;
    cursor: pointer;
    line-height: 50px;
    font-size: 16px;
    align-items: stretch;
    /*make the button always stay on the right  */
    position: absolute;
    right: 0;
}
</style>
