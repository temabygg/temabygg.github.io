
document.querySelector('body').addEventListener('click', (event) => {

    let aTag = event.target.closest('a')

    if (!aTag) { return }

    if (!aTag.classList.contains('navigation')) { return }
    let href = aTag.getAttribute('href');
    if (href.indexOf('http') === 0) {
        aTag.setAttribute('target', '_blank');
        return;
    }

    event.preventDefault();

    history.pushState(null, null, href);

    router();


});

function changeActivePage(route) {
    let aTagsInNav = document.querySelectorAll('nav a');
    for (let aTag of aTagsInNav) {
        aTag.classList.remove('active');
        let href = aTag.getAttribute('href');
        if (href === route) {
            aTag.classList.add('active')
        }
    }
}

async function router() {
    let route = location.pathname;

    changeActivePage(route);

    route = route === '/' ? '/home' : route;
    route = '/partials' + route + '.html';
    let content = await (await fetch(route)).text();
    document.querySelector('main').innerHTML = content;
    route === '/partials/mon.html' && listen_click();
    route === '/partials/kuy.html' && listen_click();
    route === '/partials/plan-mon.html' && listen_click_plan();
    route === '/partials/plan-kuy.html' && listen_click_plan();
    route === '/partials/mon.html' && setDate();
    route === '/partials/kuy.html' && setDate();
    route === '/partials/old-pass.html' && setDate();
    route === '/partials/overview.html' && setDate();
    route === '/partials/plan-mon.html' && setDate();
    route === '/partials/plan-kuy.html' && setDate();



}

window.addEventListener('popstate', router);

router();