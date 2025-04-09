function initTableOfContents() {

	let tocButton = document.getElementById('toc-button');
	if (!tocButton) {
		tocButton = document.createElement('button');
		tocButton.id = 'toc-button';
		tocButton.title = 'Xem mục lục.';
		tocButton.className = 'fixed w-10 h-10 bottom-[100px] bg-primary rounded-full cursor-pointer hidden shadow-md';
		document.body.appendChild(tocButton);
	}

	let tocContent = document.getElementById('toc-content');
	if (!tocContent) {
		tocContent = document.createElement('div');
		tocContent.id = 'toc-content';
		document.body.appendChild(tocContent);
	}

	const styleSheet = document.createElement('style');
	styleSheet.textContent = `
		#toc-button {
			width: 40px;
			height: 40px;
			z-index: 2;
		}
		#toc-content {
			position: fixed;
			bottom: 150px;
			width: 350px;
			height: 500px;
			z-index: 2;
			overflow-y: auto;
			background-color: white;
			padding: 10px;
			border-radius: 10px;
			display: none;
			scrollbar-width: none;
			-ms-overflow-style: none;
		}
		#toc-content::-webkit-scrollbar {
			display: none;
		}
	`;
	document.head.appendChild(styleSheet);

	const contentElement = document.querySelector('.prose');
	const headings = document.querySelectorAll('h2, h3, h4');

	if (headings.length > 0) {
		const tocList = document.createElement('ul');

		let visibleHeadings = Math.max(0, headings.length - 20);

		for (let i = 0; i < visibleHeadings; i++) {
			const heading = headings[i];
			const listItem = document.createElement('li');
			const anchor = document.createElement('a');
			anchor.href = `#${heading.id}`;
			anchor.textContent = heading.textContent;

			listItem.appendChild(anchor);
			tocList.appendChild(listItem);
		}

		tocContent.appendChild(tocList);

		function checkContentVisibility() {
			if (!contentElement) return false;
			const rect = contentElement.getBoundingClientRect();
			return (
				rect.top < window.innerHeight &&
				rect.bottom > 0 &&
				rect.top < 0 &&
				rect.bottom > 500
			);
		}

		window.addEventListener('scroll', function () {
			if (checkContentVisibility()) {
				tocButton.style.display = 'block';
			} else {
				tocButton.style.display = 'none';
				tocContent.style.display = 'none';
			}
		});

		setTimeout(() => window.dispatchEvent(new Event('scroll')), 100);

		let tocVisible = false;
		tocButton.addEventListener('click', function () {
			tocVisible = !tocVisible;
			tocContent.style.display = tocVisible ? 'block' : 'none';
		});

		document.addEventListener('click', function (e) {
			if (
				tocVisible &&
				e.target !== tocButton &&
				!tocContent.contains(e.target)
			) {
				tocVisible = false;
				tocContent.style.display = 'none';
			}
		});
	}

	function destroy() {
		window.removeEventListener('scroll', null);
		tocButton.removeEventListener('click', null);
		document.removeEventListener('click', null);
		if (tocButton && tocButton.parentNode) {
			tocButton.parentNode.removeChild(tocButton);
		}
		if (tocContent && tocContent.parentNode) {
			tocContent.parentNode.removeChild(tocContent);
		}
	}

	return { destroy };
}

document.addEventListener('DOMContentLoaded', () => {
	initTableOfContents();
});

module.exports = { initTableOfContents };