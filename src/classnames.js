import React from 'react'
import { compose, curry, has, is, lensProp, over, split, when } from 'ramda'
import { isClassComponent, setDisplayName } from 'recompose'
import cn from 'classnames/bind'

const wrap = curry((styles, element) => {
	if (!React.isValidElement(element)) { return element }

	const children = React.Children.map(element.props.children, wrap(styles))
	const props = when(has('className'), over(lensProp('className'),
		compose(styles, when(is(String), split(' ')))
	))

	return React.cloneElement(element, props(element.props), children)
})

const classnames = (styles) => (component) => {
	if (isClassComponent(component)) {
		return class extends component {
			render() {
				return wrap(cn.bind(styles), super.render())
			}
		}
	} else {
		const wrapped = setDisplayName(component.name, (props) =>
			wrap(cn.bind(styles), component(props))
		)
		wrapped.defaultProps = component.defaultProps
		wrapped.propTypes = component.propTypes
		return wrapped
	}
}

export default classnames

