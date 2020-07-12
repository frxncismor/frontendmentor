const buttonShare = document.querySelector('.share-img');
const footer = document.querySelector('#footer');
const cardContentShare = document.querySelector('.card-content--share');
const shareIcon = document.querySelector('.icon');

buttonShare.onclick = function(){
    const element = document.querySelector('.popup');
    if(element.classList.contains('show') && cardContentShare.classList.contains('selected') && shareIcon.classList.contains('selected-icon')){
        element.classList.remove('show');
        cardContentShare.classList.remove('selected');
        shareIcon.classList.remove('selected-icon');
    }else{
        addPosition();
        element.classList.add('show');
    }

};

function addPosition() {
    footer.classList.add('relative');
    cardContentShare.classList.add('selected');
    shareIcon.classList.add('selected-icon');

};