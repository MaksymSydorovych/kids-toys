export function createBanner(item) {
	const bannerContainer = document.querySelector(".banner");
	bannerContainer.style.background = `url("${item.attributes.hero_banner}")`;
}
