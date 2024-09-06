import logo from './logo.svg';
import styles from './App.module.css';
import './App.css';

export const App = () => {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const OPERATORS = ['C', '+', '-', '='];
	const resultContent = '';

	const Num0 = () => {
		console.log('Клик 0');
	};
	const Num1 = () => {
		console.log('Клик 1');
	};
	const Num2 = () => {
		console.log('Клик 2');
	};
	const Num3 = () => {
		console.log('Клик 3');
	};
	const Num4 = () => {
		console.log('Клик 4');
	};
	const Num5 = () => {
		console.log('Клик 5');
	};
	const Num6 = () => {
		console.log('Клик 6');
	};
	const Num7 = () => {
		console.log('Клик 7');
	};
	const Num8 = () => {
		console.log('Клик 8');
	};
	const Num9 = () => {
		console.log('Клик 9');
	};

	const butPlus = () => {
		console.log('Клик +');
	};
	const butMinus = () => {
		console.log('Клик -');
	};
	const butClear = () => {
		console.log('Клик C');
	};
	const butResult = () => {
		console.log('Клик =');
	};
	console.log(styles);

	return (
		// здесь использован декларативный стиль написания HTML
		// императивный стиль HTML  это через createElement
		<div>
			<div className={styles.container}>
				{/* <header className={styles['app-header']}>Calculate</header> */}
				<h1 className={styles['page-heading']}>Калькулятор</h1>

				{/* кнопки Назад, Вперед и Начать сначала */}
				<div className={styles['buttons-container']}>
					<div className={styles['result-content']}>{resultContent}</div>
					<button id="butClear" className={styles.button} onClick={butClear}>
						C
					</button>
					<button id="butPlus" className={styles.button} onClick={butPlus}>
						+
					</button>
					<button id="butMinus" className={styles.button} onClick={butMinus}>
						-
					</button>

					<button id="Num1" className={styles.button} onClick={Num1}>
						1
					</button>
					<button id="Num2" className={styles.button} onClick={Num2}>
						2
					</button>
					<button id="Num3" className={styles.button} onClick={Num3}>
						3
					</button>
					<button id="Num4" className={styles.button} onClick={Num4}>
						4
					</button>
					<button id="Num5" className={styles.button} onClick={Num5}>
						5
					</button>
					<button id="Num6" className={styles.button} onClick={Num6}>
						6
					</button>
					<button id="Num7" className={styles.button} onClick={Num7}>
						7
					</button>
					<button id="Num8" className={styles.button} onClick={Num8}>
						8
					</button>
					<button id="Num9" className={styles.button} onClick={Num9}>
						9
					</button>
					<button
						id="Num0"
						className={`${styles.button} ${styles['button-zero']}`}
						onClick={Num0}
					>
						0
					</button>
					<button
						id="butResult"
						className={`${styles.button} ${styles['button-equal']}`}
						onClick={butResult}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
