'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var stylePropType = require('react-style-proptype');
var reactLifecyclesCompat = require('react-lifecycles-compat');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);
var stylePropType__default = /*#__PURE__*/ _interopDefaultLegacy(stylePropType);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Pane = /*#__PURE__*/ (function (_React$PureComponent) {
  _inherits(Pane, _React$PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    _classCallCheck(this, Pane);

    return _super.apply(this, arguments);
  }

  _createClass(Pane, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          split = _this$props.split,
          styleProps = _this$props.style,
          size = _this$props.size,
          eleRef = _this$props.eleRef;
        var classes = ['Pane', split, className];
        var style = {
          flex: 1,
          position: 'relative',
          outline: 'none',
        };

        if (size !== undefined) {
          if (split === 'vertical') {
            style.width = size;
          } else {
            style.height = size;
            style.display = 'flex';
          }

          style.flex = 'none';
        }

        style = Object.assign({}, style, styleProps || {});
        return /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            ref: eleRef,
            className: classes.join(' '),
            style: style,
          },
          children
        );
      },
    },
  ]);

  return Pane;
})(React__default['default'].PureComponent);

Pane.propTypes = {
  className: PropTypes__default['default'].string.isRequired,
  children: PropTypes__default['default'].node.isRequired,
  size: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].string,
    PropTypes__default['default'].number,
  ]),
  split: PropTypes__default['default'].oneOf(['vertical', 'horizontal']),
  style: stylePropType__default['default'],
  eleRef: PropTypes__default['default'].func,
};
Pane.defaultProps = {};

var RESIZER_DEFAULT_CLASSNAME = 'Resizer';

var Resizer = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Resizer, _React$Component);

  var _super = _createSuper(Resizer);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _super.apply(this, arguments);
  }

  _createClass(Resizer, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          _onClick = _this$props.onClick,
          _onDoubleClick = _this$props.onDoubleClick,
          _onMouseDown = _this$props.onMouseDown,
          _onTouchEnd = _this$props.onTouchEnd,
          _onTouchStart = _this$props.onTouchStart,
          resizerClassName = _this$props.resizerClassName,
          split = _this$props.split,
          style = _this$props.style,
          resizerChildren = _this$props.resizerChildren;
        var classes = [resizerClassName, split, className];
        return /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            role: 'presentation',
            style: style,
            className: classes.join(' '),
            onMouseDown: function onMouseDown(event) {
              return _onMouseDown(event);
            },
            onTouchStart: function onTouchStart(event) {
              event.preventDefault();

              _onTouchStart(event);
            },
            onTouchEnd: function onTouchEnd(event) {
              event.preventDefault();

              _onTouchEnd(event);
            },
            onClick: function onClick(event) {
              if (_onClick) {
                event.preventDefault();

                _onClick(event);
              }
            },
            onDoubleClick: function onDoubleClick(event) {
              if (_onDoubleClick) {
                event.preventDefault();

                _onDoubleClick(event);
              }
            },
          },
          resizerChildren
        );
      },
    },
  ]);

  return Resizer;
})(React__default['default'].Component);

Resizer.propTypes = {
  className: PropTypes__default['default'].string.isRequired,
  onClick: PropTypes__default['default'].func,
  onDoubleClick: PropTypes__default['default'].func,
  onMouseDown: PropTypes__default['default'].func.isRequired,
  onTouchStart: PropTypes__default['default'].func.isRequired,
  onTouchEnd: PropTypes__default['default'].func.isRequired,
  split: PropTypes__default['default'].oneOf(['vertical', 'horizontal']),
  style: stylePropType__default['default'],
  resizerClassName: PropTypes__default['default'].string.isRequired,
  resizerChildren: PropTypes__default['default'].node,
};
Resizer.defaultProps = {
  resizerClassName: RESIZER_DEFAULT_CLASSNAME,
};

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges(); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (typeof draggedSize === 'number') {
    var min = typeof minSize === 'number' ? minSize : 0;
    var max = typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }

  if (defaultSize !== undefined) {
    return defaultSize;
  }

  return minSize;
}

function removeNullChildren(children) {
  return React__default['default'].Children.toArray(children).filter(function (
    c
  ) {
    return c;
  });
}

var SplitPane = /*#__PURE__*/ (function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  var _super = _createSuper(SplitPane);

  function SplitPane(props) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _super.call(this, props);
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); // order of setting panel sizes.
    // 1. size
    // 2. getDefaultSize(defaultSize, minsize, maxSize)

    var size = props.size,
      defaultSize = props.defaultSize,
      minSize = props.minSize,
      maxSize = props.maxSize,
      primary = props.primary;
    var initialSize =
      size !== undefined
        ? size
        : getDefaultSize(defaultSize, minSize, maxSize, null);
    _this.state = {
      active: false,
      resized: false,
      pane1Size: primary === 'first' ? initialSize : undefined,
      pane2Size: primary === 'second' ? initialSize : undefined,
      // these are props that are needed in static functions. ie: gDSFP
      instanceProps: {
        size: size,
      },
    };
    return _this;
  }

  _createClass(
    SplitPane,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.addEventListener('mouseup', this.onMouseUp);
          document.addEventListener('mousemove', this.onMouseMove);
          document.addEventListener('touchmove', this.onTouchMove);
          this.setState(SplitPane.getSizeUpdate(this.props, this.state));
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.removeEventListener('mouseup', this.onMouseUp);
          document.removeEventListener('mousemove', this.onMouseMove);
          document.removeEventListener('touchmove', this.onTouchMove);
        },
      },
      {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
          var eventWithTouches = Object.assign({}, event, {
            touches: [
              {
                clientX: event.clientX,
                clientY: event.clientY,
              },
            ],
          });
          this.onTouchStart(eventWithTouches);
        },
      },
      {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
          var _this$props = this.props,
            allowResize = _this$props.allowResize,
            onDragStarted = _this$props.onDragStarted,
            split = _this$props.split;

          if (allowResize) {
            unFocus(document, window);
            var position =
              split === 'vertical'
                ? event.touches[0].clientX
                : event.touches[0].clientY;

            if (typeof onDragStarted === 'function') {
              onDragStarted();
            }

            this.setState({
              active: true,
              position: position,
            });
          }
        },
      },
      {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
          var eventWithTouches = Object.assign({}, event, {
            touches: [
              {
                clientX: event.clientX,
                clientY: event.clientY,
              },
            ],
          });
          this.onTouchMove(eventWithTouches);
        },
      },
      {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
          var _this$props2 = this.props,
            allowResize = _this$props2.allowResize,
            maxSize = _this$props2.maxSize,
            minSize = _this$props2.minSize,
            onChange = _this$props2.onChange,
            split = _this$props2.split,
            step = _this$props2.step;
          var _this$props3 = this.props,
            onReleasePastMin = _this$props3.onReleasePastMin,
            onReleasePastMax = _this$props3.onReleasePastMax,
            releaseMargin = _this$props3.releaseMargin;
          var _this$state = this.state,
            active = _this$state.active,
            position = _this$state.position;

          if (allowResize && active) {
            unFocus(document, window);
            var isPrimaryFirst = this.props.primary === 'first';
            var ref = isPrimaryFirst ? this.pane1 : this.pane2;
            var ref2 = isPrimaryFirst ? this.pane2 : this.pane1;

            if (ref) {
              var node = ref;
              var node2 = ref2;

              if (node.getBoundingClientRect) {
                var width = node.getBoundingClientRect().width;
                var height = node.getBoundingClientRect().height;
                var current =
                  split === 'vertical'
                    ? event.touches[0].clientX
                    : event.touches[0].clientY;
                var size = split === 'vertical' ? width : height;
                var positionDelta = position - current;

                if (step) {
                  if (Math.abs(positionDelta) < step) {
                    return;
                  } // Integer division
                  // eslint-disable-next-line no-bitwise

                  positionDelta = ~~(positionDelta / step) * step;
                }

                var sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta;
                var pane1Order = parseInt(window.getComputedStyle(node).order);
                var pane2Order = parseInt(window.getComputedStyle(node2).order);

                if (pane1Order > pane2Order) {
                  sizeDelta = -sizeDelta;
                }

                var newMaxSize = maxSize;

                if (maxSize !== undefined && maxSize <= 0) {
                  var splitPane = this.splitPane;

                  if (split === 'vertical') {
                    newMaxSize =
                      splitPane.getBoundingClientRect().width + maxSize;
                  } else {
                    newMaxSize =
                      splitPane.getBoundingClientRect().height + maxSize;
                  }
                }

                var newSize = size - sizeDelta;
                var newPosition = position - positionDelta;

                if (newSize < minSize) {
                  if (
                    newSize < minSize - releaseMargin &&
                    typeof onReleasePastMin === 'function'
                  )
                    onReleasePastMin();
                  newSize = minSize;
                } else if (maxSize !== undefined && newSize > newMaxSize) {
                  if (
                    newSize > maxSize + releaseMargin &&
                    typeof onReleasePastMax === 'function'
                  )
                    onReleasePastMax();
                  newSize = newMaxSize;
                } else {
                  this.setState({
                    position: newPosition,
                    resized: true,
                  });
                }

                if (onChange) onChange(newSize);
                this.setState(
                  _defineProperty(
                    {
                      draggedSize: newSize,
                    },
                    isPrimaryFirst ? 'pane1Size' : 'pane2Size',
                    newSize
                  )
                );
              }
            }
          }
        },
      },
      {
        key: 'onMouseUp',
        value: function onMouseUp() {
          var _this$props4 = this.props,
            allowResize = _this$props4.allowResize,
            onDragFinished = _this$props4.onDragFinished;
          var _this$state2 = this.state,
            active = _this$state2.active,
            draggedSize = _this$state2.draggedSize;

          if (allowResize && active) {
            if (typeof onDragFinished === 'function') {
              onDragFinished(draggedSize);
            }

            this.setState({
              active: false,
            });
          }
        }, // we have to check values since gDSFP is called on every render and more in StrictMode
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props5 = this.props,
            allowResize = _this$props5.allowResize,
            children = _this$props5.children,
            className = _this$props5.className,
            onResizerClick = _this$props5.onResizerClick,
            onResizerDoubleClick = _this$props5.onResizerDoubleClick,
            paneClassName = _this$props5.paneClassName,
            pane1ClassName = _this$props5.pane1ClassName,
            pane2ClassName = _this$props5.pane2ClassName,
            paneStyle = _this$props5.paneStyle,
            pane1StyleProps = _this$props5.pane1Style,
            pane2StyleProps = _this$props5.pane2Style,
            resizerClassName = _this$props5.resizerClassName,
            resizerStyle = _this$props5.resizerStyle,
            resizerChildren = _this$props5.resizerChildren,
            split = _this$props5.split,
            styleProps = _this$props5.style;
          var _this$state3 = this.state,
            pane1Size = _this$state3.pane1Size,
            pane2Size = _this$state3.pane2Size;
          var disabledClass = allowResize ? '' : 'disabled';
          var resizerClassNamesIncludingDefault = resizerClassName
            ? ''.concat(resizerClassName, ' ').concat(RESIZER_DEFAULT_CLASSNAME)
            : resizerClassName;
          var notNullChildren = removeNullChildren(children);

          var style = _objectSpread2(
            {
              display: 'flex',
              flex: 1,
              height: '100%',
              position: 'absolute',
              outline: 'none',
              overflow: 'hidden',
              MozUserSelect: 'text',
              WebkitUserSelect: 'text',
              msUserSelect: 'text',
              userSelect: 'text',
            },
            styleProps
          );

          if (split === 'vertical') {
            Object.assign(style, {
              flexDirection: 'row',
              left: 0,
              right: 0,
            });
          } else {
            Object.assign(style, {
              bottom: 0,
              flexDirection: 'column',
              minHeight: '100%',
              top: 0,
              width: '100%',
            });
          }

          var classes = ['SplitPane', className, split, disabledClass];

          var pane1Style = _objectSpread2(
            _objectSpread2({}, paneStyle),
            pane1StyleProps
          );

          var pane2Style = _objectSpread2(
            _objectSpread2({}, paneStyle),
            pane2StyleProps
          );

          var pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ');
          var pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ');
          return /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              className: classes.join(' '),
              ref: function ref(node) {
                _this2.splitPane = node;
              },
              style: style,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              Pane,
              {
                className: pane1Classes,
                key: 'pane1',
                eleRef: function eleRef(node) {
                  _this2.pane1 = node;
                },
                size: pane1Size,
                split: split,
                style: pane1Style,
              },
              notNullChildren[0]
            ),
            /*#__PURE__*/ React__default['default'].createElement(Resizer, {
              className: disabledClass,
              onClick: onResizerClick,
              onDoubleClick: onResizerDoubleClick,
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart,
              onTouchEnd: this.onMouseUp,
              key: 'resizer',
              resizerClassName: resizerClassNamesIncludingDefault,
              split: split,
              style: resizerStyle || {},
              resizerChildren: resizerChildren,
            }),
            /*#__PURE__*/ React__default['default'].createElement(
              Pane,
              {
                className: pane2Classes,
                key: 'pane2',
                eleRef: function eleRef(node) {
                  _this2.pane2 = node;
                },
                size: pane2Size,
                split: split,
                style: pane2Style,
              },
              notNullChildren[1]
            )
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
          return SplitPane.getSizeUpdate(nextProps, prevState);
        },
      },
      {
        key: 'getSizeUpdate',
        value: function getSizeUpdate(props, state) {
          var newState = {};
          var instanceProps = state.instanceProps;

          if (instanceProps.size === props.size && props.size !== undefined) {
            return {};
          }

          var newSize =
            props.size !== undefined
              ? props.size
              : getDefaultSize(
                  props.defaultSize,
                  props.minSize,
                  props.maxSize,
                  state.draggedSize
                );

          if (props.size !== undefined) {
            newState.draggedSize = newSize;
          }

          var isPanel1Primary = props.primary === 'first';
          newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
          newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;
          newState.instanceProps = {
            size: props.size,
          };
          return newState;
        },
      },
    ]
  );

  return SplitPane;
})(React__default['default'].Component);

SplitPane.propTypes = {
  allowResize: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].arrayOf(
    PropTypes__default['default'].node
  ).isRequired,
  className: PropTypes__default['default'].string,
  primary: PropTypes__default['default'].oneOf(['first', 'second']),
  minSize: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].string,
    PropTypes__default['default'].number,
  ]),
  maxSize: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].string,
    PropTypes__default['default'].number,
  ]),
  // eslint-disable-next-line react/no-unused-prop-types
  defaultSize: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].string,
    PropTypes__default['default'].number,
  ]),
  size: PropTypes__default['default'].oneOfType([
    PropTypes__default['default'].string,
    PropTypes__default['default'].number,
  ]),
  split: PropTypes__default['default'].oneOf(['vertical', 'horizontal']),
  onDragStarted: PropTypes__default['default'].func,
  onDragFinished: PropTypes__default['default'].func,
  onChange: PropTypes__default['default'].func,
  onResizerClick: PropTypes__default['default'].func,
  onResizerDoubleClick: PropTypes__default['default'].func,
  style: stylePropType__default['default'],
  resizerStyle: stylePropType__default['default'],
  paneClassName: PropTypes__default['default'].string,
  pane1ClassName: PropTypes__default['default'].string,
  pane2ClassName: PropTypes__default['default'].string,
  paneStyle: stylePropType__default['default'],
  pane1Style: stylePropType__default['default'],
  pane2Style: stylePropType__default['default'],
  resizerClassName: PropTypes__default['default'].string,
  resizerChildren: PropTypes__default['default'].node,
  step: PropTypes__default['default'].number,
  onReleasePastMin: PropTypes__default['default'].func,
  onReleasePastMax: PropTypes__default['default'].func,
  releaseMargin: PropTypes__default['default'].number,
};
SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: '',
  releaseMargin: 10,
};
reactLifecyclesCompat.polyfill(SplitPane);

exports.Pane = Pane;
exports.default = SplitPane;
