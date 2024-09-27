// Creates a navigation bar. 
// Best placed at the start of body. 

const navStr = `
<a href="https://onlyahuman7926.github.io/wlsa-sh/" class="left">
    <img src="./assets/website/logo.png">
    <span>WLSA School House</span>
</a>
<div class="right">
    <div>Thing 1</div>
    <div>Thing 2</div>
    <div>Thing 3</div>
</div>
`;

let nav = document.createElement("nav");
nav.innerHTML = navStr;
document.body.prepend(nav);