"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var actions = _interopRequireWildcard(require("../actions"));

var _ActionBlock = _interopRequireWildcard(require("./ActionBlock"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var variableIndex = 0;
var indents = [];
var flowModes = [];

var dataPreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(dataPreview, _React$Component);

  function dataPreview() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, dataPreview);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(dataPreview)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      magicVariables: {},
      safari: navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')
    });

    _defineProperty(_assertThisInitialized(_this), "addVariable", function (_ref) {
      var uuid = _ref.uuid,
          name = _ref.name,
          icon = _ref.icon;

      _this.setState(function (prevState) {
        return {
          magicVariables: _objectSpread({}, prevState.magicVariables, _defineProperty({}, uuid, {
            name: name,
            icon: icon
          }))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVariable", function (attachment) {
      var aggrandizement = attachment.Aggrandizements && attachment.Aggrandizements.map(function (aggr) {
        switch (aggr.Type) {
          case 'WFDictionaryValueVariableAggrandizement':
            return aggr.DictionaryKey;

          case 'WFPropertyVariableAggrandizement':
            return aggr.PropertyName;

          default:
            return;
        }
      }).filter(Boolean)[0];

      switch (attachment.Type) {
        case 'ActionOutput':
          var variable = _this.state.magicVariables[attachment.OutputUUID];
          return variable ? _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              name: variable.name,
              icon: variable.icon,
              aggrandizement: aggrandizement
            }
          }) : null;

        case 'Variable':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              name: attachment.VariableName,
              aggrandizement: aggrandizement
            }
          });

        case 'Clipboard':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              global: true,
              name: 'Clipboard',
              icon: 'Clipboard',
              aggrandizement: aggrandizement
            }
          });

        case 'CurrentDate':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              global: true,
              name: 'Current Date',
              icon: 'Date',
              aggrandizement: aggrandizement
            }
          });

        case 'Ask':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              global: true,
              name: 'Ask When Run',
              aggrandizement: aggrandizement
            }
          });

        case 'Input':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              global: true,
              name: 'Input',
              aggrandizement: aggrandizement
            }
          });

        case 'ExtensionInput':
          return _react.default.createElement(_ActionBlock.Token, {
            key: "variable-".concat(variableIndex++),
            data: {
              global: true,
              name: 'Extension Input',
              icon: 'ShortcutExtension',
              aggrandizement: aggrandizement
            }
          });

        default:
          console.error("[ERROR: Variable] Unknown Type \"".concat(attachment.Type, "\""));
          return null;
      }
    });

    return _this;
  }

  _createClass(dataPreview, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          _this$props$debug = _this$props.debug,
          debug = _this$props$debug === void 0 ? false : _this$props$debug,
          _this$props$expanded = _this$props.expanded,
          expanded = _this$props$expanded === void 0 ? false : _this$props$expanded;
      var safari = this.state.safari;
      return _react.default.createElement("div", {
        className: _stylesModule.default.container
      }, data && data[0].WFWorkflowActions.map(function (WFAction, i) {
        var action = Object.values(actions).find(function (_ref2) {
          var identifier = _ref2.identifier;
          return identifier === WFAction.WFWorkflowActionIdentifier;
        });
        var previousIndent = indents[i - 1] || 0;
        var previousFlowMode = flowModes[i - 1] !== undefined ? flowModes[i - 1] : -1;
        var flowMode = WFAction.WFWorkflowActionParameters.WFControlFlowMode;
        flowModes[i] = flowMode !== undefined ? flowMode : -1;
        var indent = 0;
        if (flowMode > 0) indent -= 1;
        if ([0, 1].includes(previousFlowMode)) indent += 1;
        indents[i] = previousIndent + indent;
        var blockProps = action ? {
          data: action.WFAction,
          icon: action.icon,
          value: WFAction.WFWorkflowActionParameters
        } : {
          missing: WFAction.WFWorkflowActionIdentifier
        };
        return _react.default.createElement(_ActionBlock.default, _extends({
          key: i,
          indentation: indents[i],
          getVariable: _this2.getVariable,
          onVariable: _this2.addVariable,
          metadata: {
            debug: debug,
            expanded: expanded,
            safari: safari
          },
          onInteract: function onInteract(data) {
            if (!_this2.props.onInteract) {
              return;
            }

            _this2.props.onInteract(data);
          },
          fullValue: WFAction
        }, blockProps));
      }));
    }
  }]);

  return dataPreview;
}(_react.default.Component);

exports.default = dataPreview;