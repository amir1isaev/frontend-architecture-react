import { Button } from 'shared/ui/button'
import { useCounter } from './model'
import styles from './counter.module.css'

const CounterPage = () => {
	const { counter, decrement, increment } = useCounter(0)

	return (
		<div>
			<h1>Counter {counter}</h1>

			<Button className={styles.incrementButton} onClick={increment}>
				increment
			</Button>
			<Button onClick={decrement}>decrement</Button>
		</div>
	)
}
export default CounterPage
