require('file-loader?name=[name].[ext]!./index.html');
require('./style.css');

const content = document.querySelector('.content');

function resize() {
    const dia = Math.min(window.innerWidth, window.innerHeight);
    const margin = (window.innerHeight - dia) / 2;
    
    const padding = 32;
    content.setAttribute('style', `width: ${dia-padding*2}px; height: ${dia-padding*2}px; margin-top: ${margin}px; padding: 32px`);
}
resize();

window.onresize = resize;
