'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _reactUtil = require('react-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrap = (0, _ramda.curry)(function (styles, element) {
	if (!_react2.default.isValidElement(element)) {
		return element;
	}

	var children = _react2.default.Children.map(element.props.children, wrap(styles));
	var transform = (0, _ramda.compose)((0, _ramda.when)((0, _ramda.always)((0, _ramda.is)(Function, element.type)), (0, _ramda.merge)({ styles: styles })), (0, _ramda.when)((0, _ramda.has)('className'), (0, _ramda.over)((0, _ramda.lensProp)('className'), (0, _ramda.compose)(styles, (0, _ramda.when)((0, _ramda.is)(String), (0, _ramda.split)(' '))))));

	return _react2.default.cloneElement(element, transform(element.props), children);
});

var classnames = function classnames(styles) {
	return function (component) {
		if ((0, _reactUtil.isClassComponent)(component)) {
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
			var wrapped = function wrapped(props) {
				return wrap(_bind2.default.bind(styles), component(props));
			};

			wrapped.defaultProps = component.defaultProps;
			wrapped.propTypes = component.propTypes;
			wrapped.displayName = component.displayName || component.name;

			return wrapped;
		}
	};
};

exports.default = classnames;