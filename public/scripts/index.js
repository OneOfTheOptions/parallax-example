import '/index.scss'

document.querySelector('#app').innerHTML = `
    <header class="main-header">
          <div class="layers">
            <div class="layer__header">
              <div class="layers__caption">Welcome to Parallax</div>
              <div class="layers__title">Fairy Forest</div>
            </div>
            <div class="layer layers__base"  style="background-image: url(/img/layer-base.png);"></div>
            <div class="layer layers__middle" style="background-image: url(/img/layer-middle.png);"></div>
            <div class="layer layers__front" style="background-image: url(/img/layer-front.png);"></div>
          </div>
        </header>

        <article class="main-article" style="background-image: url(/img/dungeon.jpg)">
          <div class="main-article__content">
            <h2 class="main-article__header">To be continued</h2>
            <p class="main-article__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor earum id incidunt magnam mollitia nihil, officiis velit? Cumque delectus, dolore esse fugit hic in iure laudantium mollitia natus odio veniam, vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit... </p>
          </div>
          <div class="copy">© Parallax</div>
        </article>
    </div>
`
