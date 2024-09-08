import styles from './App.module.css';
import './App.css';
import { useState } from 'react';

let result;

export const App = () => {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const [operand1, setOperand1] = useState('');
	const [opertor, setOpertor] = useState('');
	const [operand2, setOperand2] = useState('');

	const buttons = [];

	buttons.push({ id: 'butClear', styleAdditional: '', content: 'C', func: butClick });
	buttons.push({ id: 'butPlus', styleAdditional: '', content: '+', func: butClick });
	buttons.push({ id: 'butMinus', styleAdditional: '', content: '-', func: butClick });

	NUMS.forEach((num) => {
		if (num === '0') {
			buttons.push({
				id: '0',
				styleAdditional: 'button-zero',
				content: '0',
				func: butClick,
			});
		} else {
			buttons.push({
				id: `${num}`,
				styleAdditional: '',
				content: num,
				func: butClick,
			});
		}
	});
	buttons.push({
		id: 'butResult',
		styleAdditional: 'button-equal',
		content: '=',
		func: butClick,
	});

	function butClick(e) {
		console.log(e.target.id);

		if (e.target.id === 'butClear') {
			result = undefined;
			setOperand1('');
			setOperand2('');
			setOpertor('');
		} else if (result === undefined && NUMS.includes(e.target.id)) {
			if (opertor === '') {
				setOperand1(() => operand1 + e.target.id);
			} else {
				setOperand2(() => operand2 + e.target.id);
			}
		} else if (operand2 === '' && e.target.id === 'butPlus') {
			result = undefined;
			setOpertor('+');
		} else if (operand2 === '' && e.target.id === 'butMinus') {
			result = undefined;
			setOpertor('-');
		} else if (e.target.id === 'butResult' && operand2 !== '') {
			result = eval(operand1 + opertor + operand2);

			setOperand1(result !== undefined ? '' + result : '');
			setOperand2('');
			setOpertor('');

			// console.log('Результат=', result);
		} else {
			console.log('Неизвестный клик', e.target.id);
		}
	}

	// console.log(styles);

	return (
		<div>
			<div className={styles.container}>
				<h1 className={styles['page-heading']}>Калькулятор</h1>

				<div className={styles['buttons-container']}>
					<div
						// className={styles['result-content']}
						className={
							result === undefined
								? `${styles['result-content']} ${styles.blue}`
								: `${styles['result-content']} ${styles.red}`
						}
					>
						{operand1 === '' && opertor === '' && operand2 === ''
							? '0'
							: operand1 + opertor + operand2}
					</div>

					{buttons.map((item) => (
						<button
							id={item.id}
							className={
								item.styleAdditional === ''
									? styles.button
									: `${styles.button} ${styles[item.styleAdditional]}`
							}
							// className={{ ...styles.button }}
							onClick={item.func}
							key={item.id}
						>
							{item.content}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
