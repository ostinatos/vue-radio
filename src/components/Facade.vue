<template>
    <div class="wrapper" @click="handlePageClicked">
        <div class="header">
            <div class="header-content-wrapper">
                <main-nav></main-nav>
                <search-panel/>
                <nav-social-links/>
            </div>
        </div>
        <div class="banner-wrapper">
            <banner></banner>
        </div>
        <div class="main-menu-wrapper">
            <main-menu></main-menu>
        </div>
        <div class="main-carousel">

        </div>
    </div>
</template>

<script>
import MainNav from '@/components/main-nav'
import NavSocialLinks from '@/components/nav-social-links'
import SearchPanel from '@/components/search-panel'
import Banner from '@/components/banner'
import MainMenu from '@/components/main-menu'
import Vue from "vue"

let msgBus = new Vue();

export default {
    components: {
        'main-nav': MainNav,
        'nav-social-links': NavSocialLinks,
        'search-panel': SearchPanel,
        'banner': Banner,
        'main-menu': MainMenu
    },
    methods: {
        handlePageClicked() {
            msgBus.$emit("app-click", {})
        }
    },
    provide: {
        msgBus
    }
}

</script>


<style scoped>
.header {
    background-color: #282828;
    color: white;
    /* float:left; */
    overflow: auto;
    width: 100%;
}



.header-content-wrapper {
    width: 1170px;
    /*horizontally centered  */
    margin: 0 auto;
    overflow: auto;
}

ul,
li,
a {
    margin: 0;
    /* box-sizing: border-box; */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
}

.banner-wrapper {
    padding: 30px 0;
}
</style>