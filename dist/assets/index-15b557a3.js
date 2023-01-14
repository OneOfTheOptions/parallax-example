(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
    <header class="main-header">
          <div class="layers">
            <div class="layer__header">
              <div class="layers__caption">Welcome to Parallax</div>
              <div class="layers__title">Fairy Forest</div>
            </div>
            <div class="layer layers__base"  style="background-image: url(./public/img/layer-base.png);"></div>
            <div class="layer layers__middle" style="background-image: url(./public/img/layer-middle.png);"></div>
            <div class="layer layers__front" style="background-image: url(./public/img/layer-front.png);"></div>
          </div>
        </header>

        <article class="main-article" style="background-image: url(./public/img/dungeon.jpg)">
          <div class="main-article__content">
            <h2 class="main-article__header">To be continued</h2>
            <p class="main-article__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor earum id incidunt magnam mollitia nihil, officiis velit? Cumque delectus, dolore esse fugit hic in iure laudantium mollitia natus odio veniam, vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit... </p>
          </div>
          <div class="copy">© Parallax</div>
        </article>
    </div>
`;
