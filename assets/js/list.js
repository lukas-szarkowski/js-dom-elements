const list = [
	{
		id: 1,
		parentId: null,
		text: 'Zastosowanie',
		link: '#Zastosowanie',
	},
	{
		id: 44,
		parentId: null,
		text: 'Historia',
		link: '#Historia',
	},
	{
		id: 7,
		parentId: 44,
		text: 'Dialekty',
		link: '#Dialekty',
	},
	{
		id: 31,
		parentId: 44,
		text: 'Java',
		link: '#Java',
	},
	{
		id: 24,
		parentId: null,
		text: 'JavaScript dla WWW',
		link: '#JavaScript_dla_WWW',
	},
	{
		id: 10,
		parentId: 24,
		text: 'Interakcja',
		link: '#Interakcja',
	},
	{
		id: 25,
		parentId: 24,
		text: 'Osadzanie',
		link: '#Osadzanie',
	},
];

const parent = document.querySelector('.article__list');

const ulElement = document.createElement('ul');
parent.appendChild(ulElement);

list.forEach(function (element) {
	const liElement = document.createElement('li');
	const aElement = document.createElement('a');

	if (element['parentId'] === null) {
		ulElement.appendChild(liElement);
		liElement.appendChild(aElement);

		aElement.setAttribute('href', element['link']);

		liElement.dataset.id = element['id'];
		aElement.innerText = element['text'];
	}
});

const liParent = document.querySelectorAll('[data-id]');

liParent.forEach(function (item) {
	const ulSecondLevel = document.createElement('ul');
	const id = Number(item.dataset.id);

	const children = list.filter(function (element) {
		return element.parentId === id;
	});

	children.forEach(function (element) {
		const liSecondLevelElements = document.createElement('li');
		const aSecondLevelElements = document.createElement('a');

		item.appendChild(ulSecondLevel);
		ulSecondLevel.appendChild(liSecondLevelElements);
		liSecondLevelElements.appendChild(aSecondLevelElements);

		aSecondLevelElements.innerText = element['text'];
		aSecondLevelElements.setAttribute('href', element['link']);
	});
});
