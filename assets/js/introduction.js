const tooltip = document.querySelectorAll('.tooltip');

for (let i = 0; i < tooltip.length; i++) {
	const text = tooltip[i].textContent;
	tooltip[i].textContent = '';

	
	const link = tooltip[i].dataset.url;
	const tooltipType = tooltip[i].dataset.tooltipType;
	const value = tooltip[i].dataset.tooltipContent;
	
	createElement('a', tooltip[i], {'href': link}, text);
	const spanElement = createElement('span', tooltip[i], {'class': 'tooltip__box'});

	// aElement.setAttribute('href', link);
	// aElement.textContent = text;

	// spanElement.setAttribute('class', 'tooltip__box');

	if (tooltipType === 'text') {
		spanElement.textContent = value;
		spanElement.classList.add('tooltip__box--text');
	} else if (tooltipType === 'image') {
		createElement('img', spanElement, {'class': 'tooltip__image', 'src': value} );
		spanElement.classList.add('tooltip__box--image');
		// spanElement.appendChild(imageElement);
		// imageElement.setAttribute('class', 'tooltip__image');
		// imageElement.setAttribute('src', value);
	}
}

function createElement(type, parent, attr, text) {
	const element = document.createElement(type);

	if (parent) {
		parent.appendChild(element);
	}

	if (attr) {
		for(const prop in attr) {
			const value = attr[prop];
			element.setAttribute(prop, value);
		}
	}

	if (text) {
		element.textContent = text;
	}

	return element;
}
