import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear(); // Создаем состояние для текущего года

	// return (
	// 	// здесь использован декларативный стиль написания HTML
	// 	// императивный стиль HTML  это через createElement
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>Текущий год: {currentYear}</p>
	// 		</header>
	// 	</div>
	// );

	const img = createElement('img', { src: logo, className: 'App-logo', alt: 'logo' });
	const code = createElement('code', { className: '' }, 'src/App.js');
	const pEditCode = createElement(
		'p',
		{ className: '' },
		'Edit ',
		code,
		' and save to reload.',
	);
	const a = createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Learn React',
	);
	const pYear = createElement('p', { className: '' }, 'Текущий год: ', currentYear);

	const header = createElement(
		'header',
		{ className: 'App-header' },
		img,
		pEditCode,
		a,
		pYear,
	);
	const divApp = createElement('div', { className: 'App' }, header);

	return divApp;
};
