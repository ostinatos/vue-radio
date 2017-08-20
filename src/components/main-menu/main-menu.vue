<template>
    <nav>
        <ul>
            <li v-for="item in menuData" :key="item.label">
                <a :href="item.link">{{item.label}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            "menuData": [
                {
                    "label": "tune in",
                    "link": "#"
                },
                {
                    "label": "film",
                    "link": "#"
                },
                {
                    "label": "reviews",
                    "link": "#"
                },
                {
                    "label": "news",
                    "link": "#"
                },
                {
                    "label": "interviews",
                    "link": "#"
                },
                {
                    "label": "photography",
                    "link": "#"
                },
            ]
        }
    }
}
</script>

<style scoped>
nav{
    border-top: 1px solid #000;
}

ul {
    display: block;
    margin: 0 auto;
    text-align: center;
}

li {
    display: inline-block;
    list-style-type: none;
    cursor: pointer;
    font-size: 16px;
    opacity: 1;
    visibility: visible;
    color: #000;
    transition: opacity 0.24s ease-in-out;
}

a,
a:link,
a:visited,
a:focus,
a:hover,
a:active {
    color: #000;
}

li a {
    /* set position as relative, so that the trailing "/" can use absolute positioning. */
    position: relative;
    /* set display to block, so that it can have its own size */
    display: block;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    /* remove the default style for link text  */
    text-decoration: none;

    display: block;
    float: left;
    height: 60px;
    line-height: 60px;
    padding-left: 15px;
    padding-right: 15px;
}

a::after {
    content: "/";
    font: normal 24px/24px Helvetica, Arial;
    position: absolute;
    top: 19px;
    right: -4px;
    z-index: 2;
}

/* hide the last trailing slash */
li:last-child > a::after{
    display: none;
}
</style>
