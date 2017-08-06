<template>
    <div class="social-links">
        <ul>
            <li v-for="(item, index) in socialLinks" :key="item.name">
                <a :href="item.link" v-bind:class="iconClass(index)"></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            socialLinks: [
                {
                    "link": "#",
                    "name": "facebook"
                },
                {
                    "link": "#",
                    "name": "twitter"
                },
                {
                    "link": "#",
                    "name": "vimeo"
                },
                {
                    "link": "#",
                    "name": "soundcloud"
                },
            ]
        }
    },
    methods:{
        iconClass(index){
            return ["icon", `icon-${this.socialLinks[index].name}`]
        } 
    }
}
</script>

<style scoped>
/*style for social links  */

.social-links {
    float: right;
    width: 20%;
    color: white;
}

.social-links li {
    list-style: none;
    display: inline-block;
}

.social-links li a {
    letter-spacing: .5em;
}

.social-links a {
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 18px;
}

.social-links a,
.social-links a:link,
.social-links a:visited,
.social-links a:focus {
    color: white;
}

.social-links a:hover {
    color: #c4c4c4;
}

.social-links a:active {
    color: white;
}
</style>
