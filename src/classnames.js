import React from 'react'
import { always, compose, curry, has, is, lensProp, merge, over, split, when } from 'ramda'
import cn from 'classnames/bind'
import { isClassComponent } from 'react-util'

const wrap = curry((styles, element) => {
	if (!React.isValidElement(element)) { return element }

	const children = React.Children.map(element.props.children, wrap(styles))
	const transform = compose(
		when(always(is(Function, element.type)), merge({ styles })),
		when(has('className'), over(lensProp('className'),
			compose(styles, when(is(String), split(' ')))
		))
	)

	return React.cloneElement(element, transform(element.props), children)
})

const classnames = (styles) => (component) => {
	if (isClassComponent(component)) {
		return class extends component {
			render() {
				return wrap(cn.bind(styles), super.render())
			}
		}
	} else {
		const wrapped = (props) => wrap(cn.bind(styles), component(props))

		wrapped.defaultProps = component.defaultProps
		wrapped.propTypes = component.propTypes
		wrapped.displayName = component.displayName || component.name

		return wrapped
	}
}

export default classnames

