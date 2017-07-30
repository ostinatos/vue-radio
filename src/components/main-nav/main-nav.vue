<template>
    <nav class="main-nav">
        <ul>
            <li v-for="item in navData" :key="item">
                <a :href="item.link">{{item.label}}</a>
                <ul class="sub-menu-list" v-if="item.childNavData && item.childNavData.length>0">
                    <li v-for="child in item.childNavData" :key="child">
                        <a :href="child.link">{{child.label}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            "navData": [
                {
                    "label": "homepage",
                    "link": "#",
                    "childNavData": []
                },
                {
                    "label": "mailing list",
                    "link": "#",
                    "childNavData": []
                },
                {
                    "label": "contact",
                    "link": "#",
                    "childNavData": [
                        {
                            "label": "music submission",
                            "link": "#"
                        }
                    ]
                },
                {
                    "label": "store",
                    "link": "#",
                    "childNavData": []
                },
                {
                    "label": "record label",
                    "link": "#",
                    "childNavData": []
                },
                {
                    "label": "support us",
                    "link": "#",
                    "childNavData": []
                },
            ]
        }
    }
}
</script>
<style scoped>
/* style for navigation bar  */

ul {
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
}

.main-nav {
    float: left;
    width: 75%;
}

.main-nav a {
    text-decoration: none;
    cursor: pointer;
}

.main-nav a,
.main-nav a:link,
.main-nav a:visited,
.main-nav a:focus {
    color: white;
}

.main-nav a:hover {
    color: #c4c4c4;
}

.main-nav a:active {
    color: white;
}

.main-nav li {
    display: inline-block;
    cursor: pointer;
    list-style-type: none;
    overflow: visible;
    box-sizing: border-box;
}


/* a simple style to enable on-hover sub-menu display  */

.main-nav li:hover ul.sub-menu-list {
    display: block;
}

.main-nav li a {
    display: block;
    line-height: 3em;
    box-sizing: border-box;
    float: left;
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


/*style for secondary level menu  */

.main-nav li ul.sub-menu-list {
    position: absolute;
    /*TODO: noticing about the margin here: make it 36px, so that it overlap with parent li a little bit, so it gets a smoother experience while doing the hovering actions.  */
    margin: 36px 0 0 0;
    float: left;
    width: 180px;
    padding: 0 0;
    z-index: 99999;
    background-color: #282828;
    -webkit-padding-start: 0px;
    white-space: nowrap;
    /*by default the sub-menu will not be displayed.  */
    display: none;
}


/*make sure to make sub-menu itself displayed while hovering on it.  */

ul.sub-menu-list:hover {
    display: block;
}

.sub-menu-list li {
    line-height: 3em;
    display: block;
}
</style>
