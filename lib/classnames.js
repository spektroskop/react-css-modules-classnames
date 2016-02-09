'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _recompose = require('recompose');

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrap = (0, _ramda.curry)(function (styles, element) {
	if (!_react2.default.isValidElement(element)) {
		return element;
	}

	var transform = (0, _ramda.when)((0, _ramda.has)('className'), (0, _ramda.over)((0, _ramda.lensProp)('className'), (0, _ramda.compose)(styles, (0, _ramda.when)((0, _ramda.compose)((0, _ramda.equals)('String'), _ramda.type), (0, _ramda.split)(' ')))));

	return _react2.default.cloneElement(element, transform(element.props), _react2.default.Children.map(element.props.children, wrap(styles)));
});

var classnames = function classnames(styles) {
	return function (component) {
		if ((0, _recompose.isClassComponent)(component)) {
			return function (_component) {
				_inherits(_class, _component);

				function _class() {
					_classCallCheck(this, _class);

					return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
				}

				_createClass(_class, [{
					key: 'render',
					value: function render() {
						return wrap(_bind2.default.bind(styles), _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this));
					}
				}]);

				return _class;
			}(component);
		} else {
			return (0, _recompose.setDisplayName)(component.name, function (props) {
				return wrap(_bind2.default.bind(styles), component(props));
			});
		}
	};
};

exports.default = classnames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGFzc25hbWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sT0FBTyxrQkFBTSxVQUFDLE1BQUQsRUFBUyxPQUFULEVBQXFCO0FBQ3ZDLEtBQUksQ0FBQyxnQkFBTSxjQUFOLENBQXFCLE9BQXJCLENBQUQsRUFBZ0M7QUFBRSxTQUFPLE9BQVAsQ0FBRjtFQUFwQzs7QUFFQSxLQUFNLFlBQVksaUJBQUssZ0JBQUksV0FBSixDQUFMLEVBQXVCLGlCQUFLLHFCQUFTLFdBQVQsQ0FBTCxFQUN4QyxvQkFBUSxNQUFSLEVBQWdCLGlCQUFLLG9CQUFRLG1CQUFPLFFBQVAsQ0FBUixjQUFMLEVBQXNDLGtCQUFNLEdBQU4sQ0FBdEMsQ0FBaEIsQ0FEd0MsQ0FBdkIsQ0FBWixDQUhpQzs7QUFPdkMsUUFBTyxnQkFBTSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsUUFBUSxLQUFSLENBQXRDLEVBQ04sZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBUSxLQUFSLENBQWMsUUFBZCxFQUF3QixLQUFLLE1BQUwsQ0FBM0MsQ0FETSxDQUFQLENBUHVDO0NBQXJCLENBQWI7O0FBWU4sSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLE1BQUQ7UUFBWSxVQUFDLFNBQUQsRUFBZTtBQUM3QyxNQUFJLGlDQUFpQixTQUFqQixDQUFKLEVBQWlDO0FBQ2hDOzs7Ozs7Ozs7Ozs4QkFDVTtBQUNSLGFBQU8sS0FBSyxlQUFHLElBQUgsQ0FBUSxNQUFSLENBQUwsMkVBQVAsQ0FEUTs7Ozs7S0FEVyxVQUFyQixDQURnQztHQUFqQyxNQU1PO0FBQ04sVUFBTywrQkFBZSxVQUFVLElBQVYsRUFBZ0IsVUFBQyxLQUFEO1dBQ3JDLEtBQUssZUFBRyxJQUFILENBQVEsTUFBUixDQUFMLEVBQXNCLFVBQVUsS0FBVixDQUF0QjtJQURxQyxDQUF0QyxDQURNO0dBTlA7RUFEOEI7Q0FBWjs7a0JBY0oiLCJmaWxlIjoiY2xhc3NuYW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbXBvc2UsIGN1cnJ5LCBlcXVhbHMsIGhhcywgbGVuc1Byb3AsIG92ZXIsIHNwbGl0LCB0eXBlLCB3aGVuIH0gZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBpc0NsYXNzQ29tcG9uZW50LCBzZXREaXNwbGF5TmFtZSB9IGZyb20gJ3JlY29tcG9zZSdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzL2JpbmQnXG5cbmNvbnN0IHdyYXAgPSBjdXJyeSgoc3R5bGVzLCBlbGVtZW50KSA9PiB7XG5cdGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHsgcmV0dXJuIGVsZW1lbnQgfVxuXG5cdGNvbnN0IHRyYW5zZm9ybSA9IHdoZW4oaGFzKCdjbGFzc05hbWUnKSwgb3ZlcihsZW5zUHJvcCgnY2xhc3NOYW1lJyksXG5cdFx0Y29tcG9zZShzdHlsZXMsIHdoZW4oY29tcG9zZShlcXVhbHMoJ1N0cmluZycpLCB0eXBlKSwgc3BsaXQoJyAnKSkpXG5cdCkpXG5cblx0cmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB0cmFuc2Zvcm0oZWxlbWVudC5wcm9wcyksXG5cdFx0UmVhY3QuQ2hpbGRyZW4ubWFwKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHdyYXAoc3R5bGVzKSlcblx0KVxufSlcblxuY29uc3QgY2xhc3NuYW1lcyA9IChzdHlsZXMpID0+IChjb21wb25lbnQpID0+IHtcblx0aWYgKGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSkge1xuXHRcdHJldHVybiBjbGFzcyBleHRlbmRzIGNvbXBvbmVudCB7XG5cdFx0XHRyZW5kZXIoKSB7XG5cdFx0XHRcdHJldHVybiB3cmFwKGNuLmJpbmQoc3R5bGVzKSwgc3VwZXIucmVuZGVyKCkpXG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBzZXREaXNwbGF5TmFtZShjb21wb25lbnQubmFtZSwgKHByb3BzKSA9PlxuXHRcdFx0d3JhcChjbi5iaW5kKHN0eWxlcyksIGNvbXBvbmVudChwcm9wcykpXG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzbmFtZXNcblxuIl19