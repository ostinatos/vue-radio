<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-content-wrapper">
                <main-nav></main-nav>
                <nav-social-links/>
                <div class="search-panel">
    
                </div>
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

export default {
    components: {
        'main-nav': MainNav,
        'nav-social-links':NavSocialLinks
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
    width: 960px;
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