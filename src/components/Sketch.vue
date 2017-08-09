<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-content-wrapper">
                <main-nav></main-nav>
                <search-panel/>
                <nav-social-links/>
            </div>
    
        </div>
        <div class="banner">
    
        </div>
        <div class="main-carousel">
    
        </div>
    </div>
</template>

<script>
import MainNav from '@/components/main-nav'
import NavSocialLinks from '@/components/nav-social-links'
import SearchPanel from '@/components/search-panel'

export default {
    components: {
        'main-nav': MainNav,
        'nav-social-links':NavSocialLinks,
        'search-panel':SearchPanel
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


</style>