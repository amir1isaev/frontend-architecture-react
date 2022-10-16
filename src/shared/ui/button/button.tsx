import { ComponentProps, ElementType, memo, ReactNode } from 'react'
import s from './button.module.css'

type ButtonOwnProps<E extends ElementType = ElementType> = {
	children: ReactNode
	as?: E
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

function Button<E extends ElementType = typeof defaultElement>(p: ButtonProps<E>): JSX.Element {
	const { children, variant, as, ...otherProps } = p
	const TagName = as || defaultElement

	const classNames = [s.button, p.className].join(' ')

	console.log('render button')

	return (
		<TagName {...otherProps} className={classNames}>
			{children}
		</TagName>
	)
}

export default memo(Button)
