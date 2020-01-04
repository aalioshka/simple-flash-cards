function onCardClick(el) {
    el.classList.toggle('is-flipped');
}

function onCardLoad() {
    getCardTitle();
    getCardIframeUrl();
}

function setCardState(title, iframeUrl) {
    sessionStorage.setItem('cardTitle', title);
    sessionStorage.setItem('cardIframeUrl', iframeUrl);
}

function getCardTitle() {
    let elms = document.querySelectorAll('.card__face--front--head');
    let title = sessionStorage.getItem('cardTitle');
    elms.forEach(el => {
        el.innerHTML = title;
    });
}

function getCardIframeUrl() {
    let iframe = document.querySelector('iframe');
    iframe.src = sessionStorage.getItem('cardIframeUrl');
}


