<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-content-wrapper">
                <main-nav></main-nav>
                <div class="social-links">
                    <ul>
                        <li>
                            <a href="" class="icon icon-facebook"></a>
                        </li>
                        <li>
                            <a href="" class="icon icon-twitter"></a>
                        </li>
                        <li>
                            <a href="" class="icon icon-vimeo"></a>
                        </li>
                        <li>
                            <a href="" class="icon icon-soundcloud"></a>
                        </li>
                    </ul>
                </div>
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

export default {
    components: {
        'main-nav': MainNav
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

/*style for social links  */

.social-links {
    float: right;
    width: 20%;
}

.social-links li {
    display: inline;
}

.social-links li a {
    letter-spacing: .5em;
}
</style>