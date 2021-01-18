function onCardClick(el) {
    el.classList.toggle('is-flipped');
}

function onCardLoad() {
    getCardTitle();
    getCardIframeUrl();
    getCardImgUrl();
}

function setCardState(title, iframeUrl, cardImgUrl) {
    localStorage.setItem('cardTitle', title);
    localStorage.setItem('cardIframeUrl', iframeUrl);
    localStorage.setItem('cardImgUrl', cardImgUrl);
}

function getCardTitle() {
    let elms = document.querySelectorAll('.card__face--front--head');
    let title = localStorage.getItem('cardTitle');
    elms.forEach(el => {
        el.innerHTML = title;
    });
}

function getCardIframeUrl() {
    let iframe = document.querySelector('iframe');
    iframe.src = localStorage.getItem('cardIframeUrl');
}

function getCardImgUrl() {
    let img = document.querySelector('img');
    if(img){
        img.src = localStorage.getItem('cardImgUrl') || '';
    }
}
