<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
}

ul {
  /*browser will have default style for ul, eg:
        -webkit-margin-before: 1em;
        so we need to overwrite it, to avoid the strange space between top of page and body.
        this is also a form of margin collapsing.
          */
  margin: 0;
}


/* globally overwrite the default style provided by browser */

ul,
li {
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-padding-start: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
}

@font-face {
  font-family: 'icomoon';
  src: /* url('fonts/icomoon.eot?#iefix') format('embedded-opentype'), */
  /* url('fonts/icomoon.woff') format('woff'), */
  url('assets/fonts/IcoMoon-Free.ttf') format('truetype');
  /* url('fonts/icomoon.svg#icomoon') format('svg'); */
  font-weight: normal;
  font-style: normal;
}

.icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Enable Ligatures ================ */
  letter-spacing: 0;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga=1";
  -moz-font-feature-settings: "liga";
  -ms-font-feature-settings: "liga" 1;
  -o-font-feature-settings: "liga";
  font-feature-settings: "liga";

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-facebook:before {
  content: "\ea90";
}

.icon-vimeo:before {
  content: "\eaa0";
}

.icon-twitter:before {
  content: "\ea96";
}

.icon-soundcloud:before {
  content: "\eac3";
}

.icon-search::before {
  content: "\e986"
}
</style>
