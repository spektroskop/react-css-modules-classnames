import React from 'react'
import { compose, curry, equals, has, lensProp, over, split, type, when } from 'ramda'
import { isClassComponent, setDisplayName } from 'recompose'
import cn from 'classnames/bind'

const wrap = curry((styles, element) => {
	if (!React.isValidElement(element)) { return element }

	const children = React.Children.map(element.props.children, wrap(styles))
	const props = when(has('className'), over(lensProp('className'),
		compose(styles, when(compose(equals('String'), type), split(' ')))
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
		return setDisplayName(component.name, (props) =>
			wrap(cn.bind(styles), component(props))
		)
	}
}

export default classnames
