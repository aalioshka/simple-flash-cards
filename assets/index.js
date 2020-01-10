function onCardClick(el) {
    el.classList.toggle('is-flipped');
}

function onCardLoad() {
    getCardTitle();
    getCardIframeUrl();
    getCardImgUrl();
}

function setCardState(title, iframeUrl, cardImgUrl) {
    sessionStorage.setItem('cardTitle', title);
    sessionStorage.setItem('cardIframeUrl', iframeUrl);
    sessionStorage.setItem('cardImgUrl', cardImgUrl);
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

function getCardImgUrl() {
    let img = document.querySelector('img');
    if(img){
        img.src = sessionStorage.getItem('cardImgUrl') || '';
    }
}
