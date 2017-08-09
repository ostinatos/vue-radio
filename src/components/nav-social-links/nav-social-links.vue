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
    width: 15%;
    color: white;
    line-height: 50px;
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
    /* companion with transform to get the bump-out feeling  */
    transition: all 0.2s ease; 
}

.social-links a,
.social-links a:link,
.social-links a:visited,
.social-links a:focus {
    color: white;
}

.social-links a:hover {
    color: #c4c4c4;
    /*companion with transition to get the bump-out feeling  */
    transform: scale(1.1);
}

.social-links a:active {
    color: white;
}
</style>
