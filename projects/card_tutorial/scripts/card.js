window.addEventListener('load', function() {
    var carousels  = document.getElementsByClassName('carousel');

    for (var i = 0; i < carousels.length; i ++){
        addEventToCarousel(carousels[i]);
    }
});

function addEventToCarousel(carouselElement) {
    var ulElement = carouselElement.querySelector('ul');
    var liElement = ulElement.querySelectorAll('li');

    //너비 조정
    var liWidth = liElement[0].clientWidth;
    var adjustWidth = liElement.length * liWidth;
    ulElement.style.width = adjustWidth + 'px';

    // 슬라이드 버튼 이벤트 등록
    var slideButtons = carouselElement.querySelectorAll('.slide');
    for (var i = 0; i < slideButtons.length; i++){
        slideButtons[i].addEventListener('click', createListenerSlide(carouselElement));
    }
}

function createListenerSlide(carouselElement) {
    return function(e) {
        var clickedButton = e.currentTarget;

        // Carousel 관련 값 가져오기
        var liElements = carouselElement.querySelectorAll('li');
        var liCount = liElements.length;
        var currentIndex = carouselElement.attributes.data.value;

        // 슬라이드 버튼 체크
        if (clickedButton.className.includes('right') && currentIndex < liCount - 1){
            currentIndex++;
            scrollDiv(carouselElement, currentIndex);
        } else if (clickedButton.className.includes('left') && currentIndex > 0){
            currentIndex--;
            scrollDiv(carouselElement, currentIndex);
        }

        // 인디케이터 업데이트
        updateIndicator(carouselElement, currentIndex);

        // 슬라이드 버튼 업데이트
        updateSlideButtonVisible(carouselElement, currentIndex, liCount);
        
        // Carousel 값 업데이트
        carouselElement.attributes.data.value = currentIndex;
    }
}

function scrollDiv(carouselElement, nextIndex){
    var scrollable = carouselElement.querySelector('div');
    var liWidth = scrollable.clientWidth;
    var newLeft = liWidth * nextIndex;

    scrollable.scrollTo({left: newLeft, behavior : 'smooth'});
}

function updateIndicator(carouselElement, currentIndex){
    var indicators = carouselElement.querySelectorAll('footer > div');
    for (var i = 0; i < indicators.length; i++){
        if (currentIndex == i){
            indicators[i].className = 'active';
        } else{
            indicators[i].className = '';
        }
    }
}

function updateSlideButtonVisible(carouselElement, currentIndex, liCount){
    var left = carouselElement.querySelector('.slide-left');
    var right = carouselElement.querySelector('.slide-right');

    if (currentIndex > 0){
        left.style.display = 'block';
    } else{
        left.style.display = 'none';
    }

    if (currentIndex < liCount - 1) {
        right.style.display = 'block';
    } else{
        right.style.display = 'none';
    }
}