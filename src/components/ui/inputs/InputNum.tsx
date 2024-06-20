import { FocusEvent, InputHTMLAttributes, forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormValues } from 'src/types/rows'
import { formatNumber } from 'src/utils/functions'

interface IInputNumber extends InputHTMLAttributes<HTMLInputElement> {
	extraClassName?: string
}

const InputNumber = forwardRef<
	HTMLInputElement,
	IInputNumber & ReturnType<UseFormRegister<FormValues>>
>(({ extraClassName, ...rest }, forwardRef) => {
	const handleFocusEvent = (e: FocusEvent<HTMLInputElement>) => {
		e.target.value = e.target.value.replace(/\D[.D]/g, '')
		e.target.value = formatNumber(+e.target.value)
	}
	const handleBlurEvent = (e: FocusEvent<HTMLInputElement>) => {
		e.target.value = e.target.value.split(' ').join('')
	}

	return (
		<input
			className={extraClassName}
			type='text'
			{...rest}
			ref={forwardRef}
			onBlur={handleFocusEvent}
			onFocus={handleBlurEvent}
		/>
	)
})

export default InputNumber
