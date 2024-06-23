
// menu variables
const navMenu = document.querySelector( '#navMenu' );
const navToggle = document.querySelector( '#navToggle' );
const navClose = document.querySelector( '#navClose' );


// toggle menu
if( navToggle ){
    navToggle.addEventListener( 'click', () => {
        navMenu.classList.add( 'showMenu' );
    });
};
if( navClose ){
    navClose.addEventListener( 'click', () => {
        navMenu.classList.remove( 'showMenu' );
    });
};


// navLink
const navLink = document.querySelectorAll( '.navLink' );
const linkAction = () => navMenu.classList.remove( 'showMenu' );
navLink.forEach( n => n.addEventListener( 'click', linkAction ));


// blurHeader
const blurHeader = () => {
    const header = document.querySelector( '#header' )
    this.scrollY >= 50 ? header.classList.add( 'blurHeader')
                       : header.classList.remove('blurHeader')
};
window.addEventListener( 'scroll', blurHeader );


// scrollUp
const scrollUp = () => {
	const scrollUp = document.querySelector( '#scrollUp' );
	this.scrollY >= 350 ? scrollUp.classList.add( 'showScroll' )
						: scrollUp.classList.remove( 'showScroll' );
}
window.addEventListener( 'scroll', scrollUp );


// scrollActive
const sections = document.querySelectorAll( 'section[id]' );
const scrollActive = () => {
  	const scrollDown = window.scrollY;
	sections.forEach( current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute( 'id' ),
			  sectionsClass = document.querySelector( '.navMenu a[href*=' + sectionId + ']');

		if ( scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight ){
			sectionsClass.classList.add( 'activeLink' )
		} else { sectionsClass.classList.remove( 'activeLink' ) };
	})
}
window.addEventListener( 'scroll', scrollActive );


// scrollReveal
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 3000,
	delay: 400,
	reset: true
})

sr.reveal( `.homeData, .exploreData, .exploreUser, .footerContainer, .popularText, .homeImages` );
sr.reveal( `.homeCard`, { delay: 600, distance: '100px', interval: 100 });
sr.reveal( `.aboutData, .joinImage, .sectionTitle`, { origin: 'right' });
sr.reveal( `.aboutImage, .joinData`, { origin: 'left' });
sr.reveal( `.popularCard`, { interval: 200 });


// swiperHome
let swiperHome = new Swiper( '.homeSwiper', {

	loop: true,
	spaceBetween: -24,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
	autoplay: { delay: 3000, disableOnInteraction: false },
	breakpoints: { 1220: { spaceBetween: -32 }}

})