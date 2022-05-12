const tooltip = document.querySelectorAll('.tooltip');

tooltip.forEach(element => {
	const aElement = document.createElement('a');
	const spanElement = document.createElement('span');
	const imageElement = document.createElement('img');

	if (element.dataset.tooltipType === 'text') {
		spanElement.classList.add('tooltip__box', 'tooltip__box--text');
		aElement.setAttribute('href', element.dataset.url);
		aElement.innerText = element.innerText;
		element.innerText = '';
		spanElement.innerText = element.dataset.tooltipContent;

		element.appendChild(aElement);
		element.appendChild(spanElement);
	} else if (element.dataset.tooltipType === 'image') {
		spanElement.classList.add('tooltip__box', 'tooltip__box--image');
		imageElement.classList.add('.tooltip__image');

		aElement.setAttribute('href', element.dataset.url);
		imageElement.setAttribute('src', element.dataset.tooltipContent);

		aElement.innerText = element.innerText;
		element.innerText = '';
		element.appendChild(aElement);
		element.appendChild(spanElement);
		spanElement.appendChild(imageElement);
	}
});
