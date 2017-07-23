<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-content-wrapper">
                <nav class="main-nav">
                    <ul>
                        <li>
                            <a href="#">homepage</a>
                        </li>
                        <li>
                            <a href="">mailing list</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                        <li>
                            <a href="">store</a>
                        </li>
                        <li>
                            <a href="">record label</a>
                        </li>
                        <li>
                            <a href="">support us</a>
                        </li>
                    </ul>
                </nav>
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
    export default {
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

    .header a {
        text-decoration: none;
    }

    .header a,
    .header a:link,
    .header a:visited,
    .header a:focus,
    .header a:hover,
    .header a:active {
        color: white;
    }
    
    .header-content-wrapper {
        width: 960px;
        /*horizontally centered  */
        margin: 0 auto;
        line-height: 3em;
        overflow: auto;
        /* float: left; */
    }

/* style for navigation bar  */
    .main-nav{
        float: left;
        width: 75%;
    }

    .main-nav li {
        display: inline;
        cursor: pointer;
        /* line-height: 3em; */
    }

    .main-nav li a {

        font-family: 'Times New Roman', Times, serif;
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        /*space between letter  */
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0 15px;
        /*make font appear more slim  */
        /*it is said that this only works in mac OS: https://segmentfault.com/q/1010000000467910  */
        -webkit-font-smoothing: antialiased;
    }

    /*style for social links  */
    .social-links {
        float: right;
        width: 20%;
    }

    .social-links li{
        display: inline;
    }

    .social-links li a {
        letter-spacing: .5em;
    }
    
    
</style>