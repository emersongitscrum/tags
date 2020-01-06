module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_common__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/html5sortable/dist/html5sortable.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/html5sortable/dist/html5sortable.es.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * HTML5Sortable package
 * https://github.com/lukasoppermann/html5sortable
 *
 * Maintained by Lukas Oppermann <lukas@vea.re>
 *
 * Released under the MIT license.
 */
/**
 * Get or set data on element
 * @param {HTMLElement} element
 * @param {string} key
 * @param {any} value
 * @return {*}
 */
function addData(element, key, value) {
    if (value === undefined) {
        return element && element.h5s && element.h5s.data && element.h5s.data[key];
    }
    else {
        element.h5s = element.h5s || {};
        element.h5s.data = element.h5s.data || {};
        element.h5s.data[key] = value;
    }
}
/**
 * Remove data from element
 * @param {HTMLElement} element
 */
function removeData(element) {
    if (element.h5s) {
        delete element.h5s.data;
    }
}

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {NodeList|HTMLCollection|Array} nodes
 * @param {String} selector
 * @returns {Array}
 */
var _filter = (function (nodes, selector) {
    if (!(nodes instanceof NodeList || nodes instanceof HTMLCollection || nodes instanceof Array)) {
        throw new Error('You must provide a nodeList/HTMLCollection/Array of elements to be filtered.');
    }
    if (typeof selector !== 'string') {
        return Array.from(nodes);
    }
    return Array.from(nodes).filter(function (item) { return item.nodeType === 1 && item.matches(selector); });
});

/* eslint-env browser */
var stores = new Map();
/**
 * Stores data & configurations per Sortable
 * @param {Object} config
 */
var Store = /** @class */ (function () {
    function Store() {
        this._config = new Map(); // eslint-disable-line no-undef
        this._placeholder = undefined; // eslint-disable-line no-undef
        this._data = new Map(); // eslint-disable-line no-undef
    }
    Object.defineProperty(Store.prototype, "config", {
        /**
         * get the configuration map of a class instance
         * @method config
         * @return {object}
         */
        get: function () {
            // transform Map to object
            var config = {};
            this._config.forEach(function (value, key) {
                config[key] = value;
            });
            // return object
            return config;
        },
        /**
         * set the configuration of a class instance
         * @method config
         * @param {object} config object of configurations
         */
        set: function (config) {
            if (typeof config !== 'object') {
                throw new Error('You must provide a valid configuration object to the config setter.');
            }
            // combine config with default
            var mergedConfig = Object.assign({}, config);
            // add config to map
            this._config = new Map(Object.entries(mergedConfig));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * set individual configuration of a class instance
     * @method setConfig
     * @param  key valid configuration key
     * @param  value any value
     * @return void
     */
    Store.prototype.setConfig = function (key, value) {
        if (!this._config.has(key)) {
            throw new Error("Trying to set invalid configuration item: " + key);
        }
        // set config
        this._config.set(key, value);
    };
    /**
     * get an individual configuration of a class instance
     * @method getConfig
     * @param  key valid configuration key
     * @return any configuration value
     */
    Store.prototype.getConfig = function (key) {
        if (!this._config.has(key)) {
            throw new Error("Invalid configuration item requested: " + key);
        }
        return this._config.get(key);
    };
    Object.defineProperty(Store.prototype, "placeholder", {
        /**
         * get the placeholder for a class instance
         * @method placeholder
         * @return {HTMLElement|null}
         */
        get: function () {
            return this._placeholder;
        },
        /**
         * set the placeholder for a class instance
         * @method placeholder
         * @param {HTMLElement} placeholder
         * @return {void}
         */
        set: function (placeholder) {
            if (!(placeholder instanceof HTMLElement) && placeholder !== null) {
                throw new Error('A placeholder must be an html element or null.');
            }
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * set an data entry
     * @method setData
     * @param {string} key
     * @param {any} value
     * @return {void}
     */
    Store.prototype.setData = function (key, value) {
        if (typeof key !== 'string') {
            throw new Error("The key must be a string.");
        }
        this._data.set(key, value);
    };
    /**
     * get an data entry
     * @method getData
     * @param {string} key an existing key
     * @return {any}
     */
    Store.prototype.getData = function (key) {
        if (typeof key !== 'string') {
            throw new Error("The key must be a string.");
        }
        return this._data.get(key);
    };
    /**
     * delete an data entry
     * @method deleteData
     * @param {string} key an existing key
     * @return {boolean}
     */
    Store.prototype.deleteData = function (key) {
        if (typeof key !== 'string') {
            throw new Error("The key must be a string.");
        }
        return this._data.delete(key);
    };
    return Store;
}());
/**
 * @param {HTMLElement} sortableElement
 * @returns {Class: Store}
 */
var store = (function (sortableElement) {
    // if sortableElement is wrong type
    if (!(sortableElement instanceof HTMLElement)) {
        throw new Error('Please provide a sortable to the store function.');
    }
    // create new instance if not avilable
    if (!stores.has(sortableElement)) {
        stores.set(sortableElement, new Store());
    }
    // return instance
    return stores.get(sortableElement);
});

/**
 * @param {Array|HTMLElement} element
 * @param {Function} callback
 * @param {string} event
 */
function addEventListener(element, eventName, callback) {
    if (element instanceof Array) {
        for (var i = 0; i < element.length; ++i) {
            addEventListener(element[i], eventName, callback);
        }
        return;
    }
    element.addEventListener(eventName, callback);
    store(element).setData("event" + eventName, callback);
}
/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} eventName
 */
function removeEventListener(element, eventName) {
    if (element instanceof Array) {
        for (var i = 0; i < element.length; ++i) {
            removeEventListener(element[i], eventName);
        }
        return;
    }
    element.removeEventListener(eventName, store(element).getData("event" + eventName));
    store(element).deleteData("event" + eventName);
}

/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
function addAttribute(element, attribute, value) {
    if (element instanceof Array) {
        for (var i = 0; i < element.length; ++i) {
            addAttribute(element[i], attribute, value);
        }
        return;
    }
    element.setAttribute(attribute, value);
}
/**
 * @param {Array|HTMLElement} element
 * @param {string} attribute
 */
function removeAttribute(element, attribute) {
    if (element instanceof Array) {
        for (var i = 0; i < element.length; ++i) {
            removeAttribute(element[i], attribute);
        }
        return;
    }
    element.removeAttribute(attribute);
}

/**
 * @param {HTMLElement} element
 * @returns {Object}
 */
var _offset = (function (element) {
    if (!element.parentElement || element.getClientRects().length === 0) {
        throw new Error('target element must be part of the dom');
    }
    var rect = element.getClientRects()[0];
    return {
        left: rect.left + window.pageXOffset,
        right: rect.right + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        bottom: rect.bottom + window.pageYOffset
    };
});

/**
 * Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed
 * @param {Function} func to debounce
 * @param {number} time to wait before calling function with latest arguments, 0 - no debounce
 * @returns {function} - debounced function
 */
var _debounce = (function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(void 0, args);
        }, wait);
    };
});

/* eslint-env browser */
/**
 * Get position of the element relatively to its sibling elements
 * @param {HTMLElement} element
 * @returns {number}
 */
var _index = (function (element, elementList) {
    if (!(element instanceof HTMLElement) || !(elementList instanceof NodeList || elementList instanceof HTMLCollection || elementList instanceof Array)) {
        throw new Error('You must provide an element and a list of elements.');
    }
    return Array.from(elementList).indexOf(element);
});

/* eslint-env browser */
/**
 * Test whether element is in DOM
 * @param {HTMLElement} element
 * @returns {boolean}
 */
var isInDom = (function (element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('Element is not a node element.');
    }
    return element.parentNode !== null;
});

/* eslint-env browser */
/**
 * Insert node before or after target
 * @param {HTMLElement} referenceNode - reference element
 * @param {HTMLElement} newElement - element to be inserted
 * @param {String} position - insert before or after reference element
 */
var insertNode = function (referenceNode, newElement, position) {
    if (!(referenceNode instanceof HTMLElement) || !(referenceNode.parentElement instanceof HTMLElement)) {
        throw new Error('target and element must be a node');
    }
    referenceNode.parentElement.insertBefore(newElement, (position === 'before' ? referenceNode : referenceNode.nextElementSibling));
};
/**
 * Insert before target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertBefore = function (target, element) { return insertNode(target, element, 'before'); };
/**
 * Insert after target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertAfter = function (target, element) { return insertNode(target, element, 'after'); };

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {HTMLElement} sortableContainer
 * @param {Function} customSerializer
 * @returns {Array}
 */
var _serialize = (function (sortableContainer, customItemSerializer, customContainerSerializer) {
    if (customItemSerializer === void 0) { customItemSerializer = function (serializedItem, sortableContainer) { return serializedItem; }; }
    if (customContainerSerializer === void 0) { customContainerSerializer = function (serializedContainer) { return serializedContainer; }; }
    // check for valid sortableContainer
    if (!(sortableContainer instanceof HTMLElement) || !sortableContainer.isSortable === true) {
        throw new Error('You need to provide a sortableContainer to be serialized.');
    }
    // check for valid serializers
    if (typeof customItemSerializer !== 'function' || typeof customContainerSerializer !== 'function') {
        throw new Error('You need to provide a valid serializer for items and the container.');
    }
    // get options
    var options = addData(sortableContainer, 'opts');
    var item = options.items;
    // serialize container
    var items = _filter(sortableContainer.children, item);
    var serializedItems = items.map(function (item) {
        return {
            parent: sortableContainer,
            node: item,
            html: item.outerHTML,
            index: _index(item, items)
        };
    });
    // serialize container
    var container = {
        node: sortableContainer,
        itemCount: serializedItems.length
    };
    return {
        container: customContainerSerializer(container),
        items: serializedItems.map(function (item) { return customItemSerializer(item, sortableContainer); })
    };
});

/* eslint-env browser */
/**
 * create a placeholder element
 * @param {HTMLElement} sortableElement a single sortable
 * @param {string|undefined} placeholder a string representing an html element
 * @param {string} placeholderClasses a string representing the classes that should be added to the placeholder
 */
var _makePlaceholder = (function (sortableElement, placeholder, placeholderClass) {
    var _a;
    if (placeholderClass === void 0) { placeholderClass = 'sortable-placeholder'; }
    if (!(sortableElement instanceof HTMLElement)) {
        throw new Error('You must provide a valid element as a sortable.');
    }
    // if placeholder is not an element
    if (!(placeholder instanceof HTMLElement) && placeholder !== undefined) {
        throw new Error('You must provide a valid element as a placeholder or set ot to undefined.');
    }
    // if no placeholder element is given
    if (placeholder === undefined) {
        if (['UL', 'OL'].includes(sortableElement.tagName)) {
            placeholder = document.createElement('li');
        }
        else if (['TABLE', 'TBODY'].includes(sortableElement.tagName)) {
            placeholder = document.createElement('tr');
            // set colspan to always all rows, otherwise the item can only be dropped in first column
            placeholder.innerHTML = '<td colspan="100"></td>';
        }
        else {
            placeholder = document.createElement('div');
        }
    }
    // add classes to placeholder
    if (typeof placeholderClass === 'string') {
        (_a = placeholder.classList).add.apply(_a, placeholderClass.split(' '));
    }
    return placeholder;
});

/* eslint-env browser */
/**
 * Get height of an element including padding
 * @param {HTMLElement} element an dom element
 */
var _getElementHeight = (function (element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('You must provide a valid dom element');
    }
    // get calculated style of element
    var style = window.getComputedStyle(element);
    // pick applicable properties, convert to int and reduce by adding
    return ['height', 'padding-top', 'padding-bottom']
        .map(function (key) {
        var int = parseInt(style.getPropertyValue(key), 10);
        return isNaN(int) ? 0 : int;
    })
        .reduce(function (sum, value) { return sum + value; });
});

/* eslint-env browser */
/**
 * get handle or return item
 * @param {Array<HTMLElement>} items
 * @param {string} selector
 */
var _getHandles = (function (items, selector) {
    if (!(items instanceof Array)) {
        throw new Error('You must provide a Array of HTMLElements to be filtered.');
    }
    if (typeof selector !== 'string') {
        return items;
    }
    return items
        // remove items without handle from array
        .filter(function (item) {
        return item.querySelector(selector) instanceof HTMLElement ||
            (item.shadowRoot && item.shadowRoot.querySelector(selector) instanceof HTMLElement);
    })
        // replace item with handle in array
        .map(function (item) {
        return item.querySelector(selector) || (item.shadowRoot && item.shadowRoot.querySelector(selector));
    });
});

/**
 * @param {Event} event
 * @returns {HTMLElement}
 */
var getEventTarget = (function (event) {
    return (event.composedPath && event.composedPath()[0]) || event.target;
});

/* eslint-env browser */
/**
 * defaultDragImage returns the current item as dragged image
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {object} elementOffset - an object with the offsets top, left, right & bottom
 * @param {Event} event - the original drag event object
 * @return {object} with element, posX and posY properties
 */
var defaultDragImage = function (draggedElement, elementOffset, event) {
    return {
        element: draggedElement,
        posX: event.pageX - elementOffset.left,
        posY: event.pageY - elementOffset.top
    };
};
/**
 * attaches an element as the drag image to an event
 * @param {Event} event - the original drag event object
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {Function} customDragImage - function to create a custom dragImage
 * @return void
 */
var setDragImage = (function (event, draggedElement, customDragImage) {
    // check if event is provided
    if (!(event instanceof Event)) {
        throw new Error('setDragImage requires a DragEvent as the first argument.');
    }
    // check if draggedElement is provided
    if (!(draggedElement instanceof HTMLElement)) {
        throw new Error('setDragImage requires the dragged element as the second argument.');
    }
    // set default function of none provided
    if (!customDragImage) {
        customDragImage = defaultDragImage;
    }
    // check if setDragImage method is available
    if (event.dataTransfer && event.dataTransfer.setDragImage) {
        // get the elements offset
        var elementOffset = _offset(draggedElement);
        // get the dragImage
        var dragImage = customDragImage(draggedElement, elementOffset, event);
        // check if custom function returns correct values
        if (!(dragImage.element instanceof HTMLElement) || typeof dragImage.posX !== 'number' || typeof dragImage.posY !== 'number') {
            throw new Error('The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].');
        }
        // needs to be set for HTML5 drag & drop to work
        event.dataTransfer.effectAllowed = 'copyMove';
        // Firefox requires it to use the event target's id for the data
        event.dataTransfer.setData('text/plain', getEventTarget(event).id);
        // set the drag image on the event
        event.dataTransfer.setDragImage(dragImage.element, dragImage.posX, dragImage.posY);
    }
});

/**
 * Check if curList accepts items from destList
 * @param {sortable} destination the container an item is move to
 * @param {sortable} origin the container an item comes from
 */
var _listsConnected = (function (destination, origin) {
    // check if valid sortable
    if (destination.isSortable === true) {
        var acceptFrom = store(destination).getConfig('acceptFrom');
        // check if acceptFrom is valid
        if (acceptFrom !== null && acceptFrom !== false && typeof acceptFrom !== 'string') {
            throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');
        }
        if (acceptFrom !== null) {
            return acceptFrom !== false && acceptFrom.split(',').filter(function (sel) {
                return sel.length > 0 && origin.matches(sel);
            }).length > 0;
        }
        // drop in same list
        if (destination === origin) {
            return true;
        }
        // check if lists are connected with connectWith
        if (store(destination).getConfig('connectWith') !== undefined && store(destination).getConfig('connectWith') !== null) {
            return store(destination).getConfig('connectWith') === store(origin).getConfig('connectWith');
        }
    }
    return false;
});

/**
 * default configurations
 */
var defaultConfiguration = {
    items: null,
    // deprecated
    connectWith: null,
    // deprecated
    disableIEFix: null,
    acceptFrom: null,
    copy: false,
    placeholder: null,
    placeholderClass: 'sortable-placeholder',
    draggingClass: 'sortable-dragging',
    hoverClass: false,
    debounce: 0,
    throttleTime: 100,
    maxItems: 0,
    itemSerializer: undefined,
    containerSerializer: undefined,
    customDragImage: null
};

/**
 * make sure a function is only called once within the given amount of time
 * @param {Function} fn the function to throttle
 * @param {number} threshold time limit for throttling
 */
// must use function to keep this context
function _throttle (fn, threshold) {
    var _this = this;
    if (threshold === void 0) { threshold = 250; }
    // check function
    if (typeof fn !== 'function') {
        throw new Error('You must provide a function as the first argument for throttle.');
    }
    // check threshold
    if (typeof threshold !== 'number') {
        throw new Error('You must provide a number as the second argument for throttle.');
    }
    var lastEventTimestamp = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (lastEventTimestamp === null || now - lastEventTimestamp >= threshold) {
            lastEventTimestamp = now;
            fn.apply(_this, args);
        }
    };
}

/* eslint-env browser */
/**
 * enable or disable hoverClass on mouseenter/leave if container Items
 * @param {sortable} sortableContainer a valid sortableContainer
 * @param {boolean} enable enable or disable event
 */
// export default (sortableContainer: sortable, enable: boolean) => {
var enableHoverClass = (function (sortableContainer, enable) {
    if (typeof store(sortableContainer).getConfig('hoverClass') === 'string') {
        var hoverClasses_1 = store(sortableContainer).getConfig('hoverClass').split(' ');
        // add class on hover
        if (enable === true) {
            addEventListener(sortableContainer, 'mousemove', _throttle(function (event) {
                // check of no mouse button was pressed when mousemove started == no drag
                if (event.buttons === 0) {
                    _filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
                        var _a, _b;
                        if (item !== event.target) {
                            (_a = item.classList).remove.apply(_a, hoverClasses_1);
                        }
                        else {
                            (_b = item.classList).add.apply(_b, hoverClasses_1);
                        }
                    });
                }
            }, store(sortableContainer).getConfig('throttleTime')));
            // remove class on leave
            addEventListener(sortableContainer, 'mouseleave', function () {
                _filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
                    var _a;
                    (_a = item.classList).remove.apply(_a, hoverClasses_1);
                });
            });
            // remove events
        }
        else {
            removeEventListener(sortableContainer, 'mousemove');
            removeEventListener(sortableContainer, 'mouseleave');
        }
    }
});

/* eslint-env browser */
/*
 * variables global to the plugin
 */
var dragging;
var draggingHeight;
/*
 * Keeps track of the initialy selected list, where 'dragstart' event was triggered
 * It allows us to move the data in between individual Sortable List instances
 */
// Origin List - data from before any item was changed
var originContainer;
var originIndex;
var originElementIndex;
var originItemsBeforeUpdate;
// Previous Sortable Container - we dispatch as sortenter event when a
// dragged item enters a sortableContainer for the first time
var previousContainer;
// Destination List - data from before any item was changed
var destinationItemsBeforeUpdate;
/**
 * remove event handlers from items
 * @param {Array|NodeList} items
 */
var _removeItemEvents = function (items) {
    removeEventListener(items, 'dragstart');
    removeEventListener(items, 'dragend');
    removeEventListener(items, 'dragover');
    removeEventListener(items, 'dragenter');
    removeEventListener(items, 'drop');
    removeEventListener(items, 'mouseenter');
    removeEventListener(items, 'mouseleave');
};
/**
 * _getDragging returns the current element to drag or
 * a copy of the element.
 * Is Copy Active for sortable
 * @param {HTMLElement} draggedItem - the item that the user drags
 * @param {HTMLElement} sortable a single sortable
 */
var _getDragging = function (draggedItem, sortable) {
    var ditem = draggedItem;
    if (store(sortable).getConfig('copy') === true) {
        ditem = draggedItem.cloneNode(true);
        addAttribute(ditem, 'aria-copied', 'true');
        draggedItem.parentElement.appendChild(ditem);
        ditem.style.display = 'none';
        ditem.oldDisplay = draggedItem.style.display;
    }
    return ditem;
};
/**
 * Remove data from sortable
 * @param {HTMLElement} sortable a single sortable
 */
var _removeSortableData = function (sortable) {
    removeData(sortable);
    removeAttribute(sortable, 'aria-dropeffect');
};
/**
 * Remove data from items
 * @param {Array<HTMLElement>|HTMLElement} items
 */
var _removeItemData = function (items) {
    removeAttribute(items, 'aria-grabbed');
    removeAttribute(items, 'aria-copied');
    removeAttribute(items, 'draggable');
    removeAttribute(items, 'role');
};
/**
 * find sortable from element. travels up parent element until found or null.
 * @param {HTMLElement} element a single sortable
 * @param {Event} event - the current event. We need to pass it to be able to
 * find Sortable whith shadowRoot (document fragment has no parent)
 */
function findSortable(element, event) {
    if (event.composedPath) {
        return event.composedPath().find(function (el) { return el.isSortable; });
    }
    while (element.isSortable !== true) {
        element = element.parentElement;
    }
    return element;
}
/**
 * Dragging event is on the sortable element. finds the top child that
 * contains the element.
 * @param {HTMLElement} sortableElement a single sortable
 * @param {HTMLElement} element is that being dragged
 */
function findDragElement(sortableElement, element) {
    var options = addData(sortableElement, 'opts');
    var items = _filter(sortableElement.children, options.items);
    var itemlist = items.filter(function (ele) {
        return ele.contains(element) || (ele.shadowRoot && ele.shadowRoot.contains(element));
    });
    return itemlist.length > 0 ? itemlist[0] : element;
}
/**
 * Destroy the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _destroySortable = function (sortableElement) {
    var opts = addData(sortableElement, 'opts') || {};
    var items = _filter(sortableElement.children, opts.items);
    var handles = _getHandles(items, opts.handle);
    // remove event handlers & data from sortable
    removeEventListener(sortableElement, 'dragover');
    removeEventListener(sortableElement, 'dragenter');
    removeEventListener(sortableElement, 'drop');
    // remove event data from sortable
    _removeSortableData(sortableElement);
    // remove event handlers & data from items
    removeEventListener(handles, 'mousedown');
    _removeItemEvents(items);
    _removeItemData(items);
};
/**
 * Enable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _enableSortable = function (sortableElement) {
    var opts = addData(sortableElement, 'opts');
    var items = _filter(sortableElement.children, opts.items);
    var handles = _getHandles(items, opts.handle);
    addAttribute(sortableElement, 'aria-dropeffect', 'move');
    addData(sortableElement, '_disabled', 'false');
    addAttribute(handles, 'draggable', 'true');
    // @todo: remove this fix
    // IE FIX for ghost
    // can be disabled as it has the side effect that other events
    // (e.g. click) will be ignored
    if (opts.disableIEFix === false) {
        var spanEl = (document || window.document).createElement('span');
        if (typeof spanEl.dragDrop === 'function') {
            addEventListener(handles, 'mousedown', function () {
                if (items.indexOf(this) !== -1) {
                    this.dragDrop();
                }
                else {
                    var parent = this.parentElement;
                    while (items.indexOf(parent) === -1) {
                        parent = parent.parentElement;
                    }
                    parent.dragDrop();
                }
            });
        }
    }
};
/**
 * Disable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var _disableSortable = function (sortableElement) {
    var opts = addData(sortableElement, 'opts');
    var items = _filter(sortableElement.children, opts.items);
    var handles = _getHandles(items, opts.handle);
    addAttribute(sortableElement, 'aria-dropeffect', 'none');
    addData(sortableElement, '_disabled', 'true');
    addAttribute(handles, 'draggable', 'false');
    removeEventListener(handles, 'mousedown');
};
/**
 * Reload the sortable
 * @param {HTMLElement} sortableElement a single sortable
 * @description events need to be removed to not be double bound
 */
var _reloadSortable = function (sortableElement) {
    var opts = addData(sortableElement, 'opts');
    var items = _filter(sortableElement.children, opts.items);
    var handles = _getHandles(items, opts.handle);
    addData(sortableElement, '_disabled', 'false');
    // remove event handlers from items
    _removeItemEvents(items);
    removeEventListener(handles, 'mousedown');
    // remove event handlers from sortable
    removeEventListener(sortableElement, 'dragover');
    removeEventListener(sortableElement, 'dragenter');
    removeEventListener(sortableElement, 'drop');
};
/**
 * Public sortable object
 * @param {Array|NodeList} sortableElements
 * @param {object|string} options|method
 */
function sortable(sortableElements, options) {
    // get method string to see if a method is called
    var method = String(options);
    options = options || {};
    // check if the user provided a selector instead of an element
    if (typeof sortableElements === 'string') {
        sortableElements = document.querySelectorAll(sortableElements);
    }
    // if the user provided an element, return it in an array to keep the return value consistant
    if (sortableElements instanceof HTMLElement) {
        sortableElements = [sortableElements];
    }
    sortableElements = Array.prototype.slice.call(sortableElements);
    if (/serialize/.test(method)) {
        return sortableElements.map(function (sortableContainer) {
            var opts = addData(sortableContainer, 'opts');
            return _serialize(sortableContainer, opts.itemSerializer, opts.containerSerializer);
        });
    }
    sortableElements.forEach(function (sortableElement) {
        if (/enable|disable|destroy/.test(method)) {
            return sortable[method](sortableElement);
        }
        // log deprecation
        ['connectWith', 'disableIEFix'].forEach(function (configKey) {
            if (options.hasOwnProperty(configKey) && options[configKey] !== null) {
                console.warn("HTML5Sortable: You are using the deprecated configuration \"" + configKey + "\". This will be removed in an upcoming version, make sure to migrate to the new options when updating.");
            }
        });
        // merge options with default options
        options = Object.assign({}, defaultConfiguration, store(sortableElement).config, options);
        // init data store for sortable
        store(sortableElement).config = options;
        // set options on sortable
        addData(sortableElement, 'opts', options);
        // property to define as sortable
        sortableElement.isSortable = true;
        // reset sortable
        _reloadSortable(sortableElement);
        // initialize
        var listItems = _filter(sortableElement.children, options.items);
        // create element if user defined a placeholder element as a string
        var customPlaceholder;
        if (options.placeholder !== null && options.placeholder !== undefined) {
            var tempContainer = document.createElement(sortableElement.tagName);
            if (options.placeholder instanceof HTMLElement) {
                tempContainer.appendChild(options.placeholder);
            }
            else {
                tempContainer.innerHTML = options.placeholder;
            }
            customPlaceholder = tempContainer.children[0];
        }
        // add placeholder
        store(sortableElement).placeholder = _makePlaceholder(sortableElement, customPlaceholder, options.placeholderClass);
        addData(sortableElement, 'items', options.items);
        if (options.acceptFrom) {
            addData(sortableElement, 'acceptFrom', options.acceptFrom);
        }
        else if (options.connectWith) {
            addData(sortableElement, 'connectWith', options.connectWith);
        }
        _enableSortable(sortableElement);
        addAttribute(listItems, 'role', 'option');
        addAttribute(listItems, 'aria-grabbed', 'false');
        // enable hover class
        enableHoverClass(sortableElement, true);
        /*
         Handle drag events on draggable items
         Handle is set at the sortableElement level as it will bubble up
         from the item
         */
        addEventListener(sortableElement, 'dragstart', function (e) {
            // ignore dragstart events
            var target = getEventTarget(e);
            if (target.isSortable === true) {
                return;
            }
            e.stopImmediatePropagation();
            if ((options.handle && !target.matches(options.handle)) || target.getAttribute('draggable') === 'false') {
                return;
            }
            var sortableContainer = findSortable(target, e);
            var dragItem = findDragElement(sortableContainer, target);
            // grab values
            originItemsBeforeUpdate = _filter(sortableContainer.children, options.items);
            originIndex = originItemsBeforeUpdate.indexOf(dragItem);
            originElementIndex = _index(dragItem, sortableContainer.children);
            originContainer = sortableContainer;
            // add transparent clone or other ghost to cursor
            setDragImage(e, dragItem, options.customDragImage);
            // cache selsection & add attr for dragging
            draggingHeight = _getElementHeight(dragItem);
            dragItem.classList.add(options.draggingClass);
            dragging = _getDragging(dragItem, sortableContainer);
            addAttribute(dragging, 'aria-grabbed', 'true');
            // dispatch sortstart event on each element in group
            sortableContainer.dispatchEvent(new CustomEvent('sortstart', {
                detail: {
                    origin: {
                        elementIndex: originElementIndex,
                        index: originIndex,
                        container: originContainer
                    },
                    item: dragging,
                    originalTarget: target
                }
            }));
        });
        /*
         We are capturing targetSortable before modifications with 'dragenter' event
        */
        addEventListener(sortableElement, 'dragenter', function (e) {
            var target = getEventTarget(e);
            var sortableContainer = findSortable(target, e);
            if (sortableContainer && sortableContainer !== previousContainer) {
                destinationItemsBeforeUpdate = _filter(sortableContainer.children, addData(sortableContainer, 'items'))
                    .filter(function (item) { return item !== store(sortableElement).placeholder; });
                sortableContainer.dispatchEvent(new CustomEvent('sortenter', {
                    detail: {
                        origin: {
                            elementIndex: originElementIndex,
                            index: originIndex,
                            container: originContainer
                        },
                        destination: {
                            container: sortableContainer,
                            itemsBeforeUpdate: destinationItemsBeforeUpdate
                        },
                        item: dragging,
                        originalTarget: target
                    }
                }));
            }
            previousContainer = sortableContainer;
        });
        /*
         * Dragend Event - https://developer.mozilla.org/en-US/docs/Web/Events/dragend
         * Fires each time dragEvent end, or ESC pressed
         * We are using it to clean up any draggable elements and placeholders
         */
        addEventListener(sortableElement, 'dragend', function (e) {
            if (!dragging) {
                return;
            }
            dragging.classList.remove(options.draggingClass);
            addAttribute(dragging, 'aria-grabbed', 'false');
            if (dragging.getAttribute('aria-copied') === 'true' && addData(dragging, 'dropped') !== 'true') {
                dragging.remove();
            }
            dragging.style.display = dragging.oldDisplay;
            delete dragging.oldDisplay;
            var visiblePlaceholder = Array.from(stores.values()).map(function (data) { return data.placeholder; })
                .filter(function (placeholder) { return placeholder instanceof HTMLElement; })
                .filter(isInDom)[0];
            if (visiblePlaceholder) {
                visiblePlaceholder.remove();
            }
            // dispatch sortstart event on each element in group
            sortableElement.dispatchEvent(new CustomEvent('sortstop', {
                detail: {
                    origin: {
                        elementIndex: originElementIndex,
                        index: originIndex,
                        container: originContainer
                    },
                    item: dragging
                }
            }));
            previousContainer = null;
            dragging = null;
            draggingHeight = null;
        });
        /*
         * Drop Event - https://developer.mozilla.org/en-US/docs/Web/Events/drop
         * Fires when valid drop target area is hit
         */
        addEventListener(sortableElement, 'drop', function (e) {
            if (!_listsConnected(sortableElement, dragging.parentElement)) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            addData(dragging, 'dropped', 'true');
            // get the one placeholder that is currently visible
            var visiblePlaceholder = Array.from(stores.values()).map(function (data) {
                return data.placeholder;
            })
                // filter only HTMLElements
                .filter(function (placeholder) { return placeholder instanceof HTMLElement; })
                // filter only elements in DOM
                .filter(isInDom)[0];
            // attach element after placeholder
            insertAfter(visiblePlaceholder, dragging);
            // remove placeholder from dom
            visiblePlaceholder.remove();
            /*
             * Fires Custom Event - 'sortstop'
             */
            sortableElement.dispatchEvent(new CustomEvent('sortstop', {
                detail: {
                    origin: {
                        elementIndex: originElementIndex,
                        index: originIndex,
                        container: originContainer
                    },
                    item: dragging
                }
            }));
            var placeholder = store(sortableElement).placeholder;
            var originItems = _filter(originContainer.children, options.items)
                .filter(function (item) { return item !== placeholder; });
            var destinationContainer = this.isSortable === true ? this : this.parentElement;
            var destinationItems = _filter(destinationContainer.children, addData(destinationContainer, 'items'))
                .filter(function (item) { return item !== placeholder; });
            var destinationElementIndex = _index(dragging, Array.from(dragging.parentElement.children)
                .filter(function (item) { return item !== placeholder; }));
            var destinationIndex = _index(dragging, destinationItems);
            /*
             * When a list item changed container lists or index within a list
             * Fires Custom Event - 'sortupdate'
             */
            if (originElementIndex !== destinationElementIndex || originContainer !== destinationContainer) {
                sortableElement.dispatchEvent(new CustomEvent('sortupdate', {
                    detail: {
                        origin: {
                            elementIndex: originElementIndex,
                            index: originIndex,
                            container: originContainer,
                            itemsBeforeUpdate: originItemsBeforeUpdate,
                            items: originItems
                        },
                        destination: {
                            index: destinationIndex,
                            elementIndex: destinationElementIndex,
                            container: destinationContainer,
                            itemsBeforeUpdate: destinationItemsBeforeUpdate,
                            items: destinationItems
                        },
                        item: dragging
                    }
                }));
            }
        });
        var debouncedDragOverEnter = _debounce(function (sortableElement, element, pageY) {
            if (!dragging) {
                return;
            }
            // set placeholder height if forcePlaceholderSize option is set
            if (options.forcePlaceholderSize) {
                store(sortableElement).placeholder.style.height = draggingHeight + 'px';
            }
            // if element the draggedItem is dragged onto is within the array of all elements in list
            // (not only items, but also disabled, etc.)
            if (Array.from(sortableElement.children).indexOf(element) > -1) {
                var thisHeight = _getElementHeight(element);
                var placeholderIndex = _index(store(sortableElement).placeholder, element.parentElement.children);
                var thisIndex = _index(element, element.parentElement.children);
                // Check if `element` is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering
                if (thisHeight > draggingHeight) {
                    // Dead zone?
                    var deadZone = thisHeight - draggingHeight;
                    var offsetTop = _offset(element).top;
                    if (placeholderIndex < thisIndex && pageY < offsetTop) {
                        return;
                    }
                    if (placeholderIndex > thisIndex &&
                        pageY > offsetTop + thisHeight - deadZone) {
                        return;
                    }
                }
                if (dragging.oldDisplay === undefined) {
                    dragging.oldDisplay = dragging.style.display;
                }
                if (dragging.style.display !== 'none') {
                    dragging.style.display = 'none';
                }
                // To avoid flicker, determine where to position the placeholder
                // based on where the mouse pointer is relative to the elements
                // vertical center.
                var placeAfter = false;
                try {
                    var elementMiddle = _offset(element).top + element.offsetHeight / 2;
                    placeAfter = pageY >= elementMiddle;
                }
                catch (e) {
                    placeAfter = placeholderIndex < thisIndex;
                }
                if (placeAfter) {
                    insertAfter(element, store(sortableElement).placeholder);
                }
                else {
                    insertBefore(element, store(sortableElement).placeholder);
                }
                // get placeholders from all stores & remove all but current one
                Array.from(stores.values())
                    // remove empty values
                    .filter(function (data) { return data.placeholder !== undefined; })
                    // foreach placeholder in array if outside of current sorableContainer -> remove from DOM
                    .forEach(function (data) {
                    if (data.placeholder !== store(sortableElement).placeholder) {
                        data.placeholder.remove();
                    }
                });
            }
            else {
                // get all placeholders from store
                var placeholders = Array.from(stores.values())
                    .filter(function (data) { return data.placeholder !== undefined; })
                    .map(function (data) {
                    return data.placeholder;
                });
                // check if element is not in placeholders
                if (placeholders.indexOf(element) === -1 && sortableElement === element && !_filter(element.children, options.items).length) {
                    placeholders.forEach(function (element) { return element.remove(); });
                    element.appendChild(store(sortableElement).placeholder);
                }
            }
        }, options.debounce);
        // Handle dragover and dragenter events on draggable items
        var onDragOverEnter = function (e) {
            var element = e.target;
            var sortableElement = element.isSortable === true ? element : findSortable(element, e);
            element = findDragElement(sortableElement, element);
            if (!dragging || !_listsConnected(sortableElement, dragging.parentElement) || addData(sortableElement, '_disabled') === 'true') {
                return;
            }
            var options = addData(sortableElement, 'opts');
            if (parseInt(options.maxItems) && _filter(sortableElement.children, addData(sortableElement, 'items')).length >= parseInt(options.maxItems) && dragging.parentElement !== sortableElement) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = store(sortableElement).getConfig('copy') === true ? 'copy' : 'move';
            debouncedDragOverEnter(sortableElement, element, e.pageY);
        };
        addEventListener(listItems.concat(sortableElement), 'dragover', onDragOverEnter);
        addEventListener(listItems.concat(sortableElement), 'dragenter', onDragOverEnter);
    });
    return sortableElements;
}
sortable.destroy = function (sortableElement) {
    _destroySortable(sortableElement);
};
sortable.enable = function (sortableElement) {
    _enableSortable(sortableElement);
};
sortable.disable = function (sortableElement) {
    _disableSortable(sortableElement);
};
/* START.TESTS_ONLY */
sortable.__testing = {
    // add internal methods here for testing purposes
    _data: addData,
    _removeItemEvents: _removeItemEvents,
    _removeItemData: _removeItemData,
    _removeSortableData: _removeSortableData
};

/* harmony default export */ __webpack_exports__["default"] = (sortable);


/***/ }),

/***/ "./src/admin/addTagChangePermission.js":
/*!*********************************************!*\
  !*** ./src/admin/addTagChangePermission.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/PermissionGrid */ "flarum/components/PermissionGrid");
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/SettingDropdown */ "flarum/components/SettingDropdown");
/* harmony import */ var flarum_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'startItems', function (items) {
    items.add('allowTagChange', {
      icon: 'fas fa-tag',
      label: app.translator.trans('flarum-tags.admin.permissions.allow_edit_tags_label'),
      setting: function setting() {
        var minutes = parseInt(app.data.settings.allow_tag_change, 10);
        return flarum_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
          defaultLabel: minutes ? app.translator.transChoice('core.admin.permissions_controls.allow_some_minutes_button', minutes, {
            count: minutes
          }) : app.translator.trans('core.admin.permissions_controls.allow_indefinitely_button'),
          key: 'allow_tag_change',
          options: [{
            value: '-1',
            label: app.translator.trans('core.admin.permissions_controls.allow_indefinitely_button')
          }, {
            value: '10',
            label: app.translator.trans('core.admin.permissions_controls.allow_ten_minutes_button')
          }, {
            value: 'reply',
            label: app.translator.trans('core.admin.permissions_controls.allow_until_reply_button')
          }]
        });
      }
    }, 90);
  });
});

/***/ }),

/***/ "./src/admin/addTagPermission.js":
/*!***************************************!*\
  !*** ./src/admin/addTagPermission.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/PermissionGrid */ "flarum/components/PermissionGrid");
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'moderateItems', function (items) {
    items.add('tag', {
      icon: 'fas fa-tag',
      label: app.translator.trans('flarum-tags.admin.permissions.tag_discussions_label'),
      permission: 'discussion.tag'
    }, 95);
  });
});

/***/ }),

/***/ "./src/admin/addTagsHomePageOption.js":
/*!********************************************!*\
  !*** ./src/admin/addTagsHomePageOption.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/BasicsPage */ "flarum/components/BasicsPage");
/* harmony import */ var flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'homePageItems', function (items) {
    items.add('tags', {
      path: '/tags',
      label: app.translator.trans('flarum-tags.admin.basics.tags_label')
    });
  });
});

/***/ }),

/***/ "./src/admin/addTagsPane.js":
/*!**********************************!*\
  !*** ./src/admin/addTagsPane.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TagsPage */ "./src/admin/components/TagsPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.tags = {
    path: '/tags',
    component: _components_TagsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };

  app.extensionSettings['flarum-tags'] = function () {
    return m.route(app.route('tags'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('tags', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('tags'),
      icon: 'fas fa-tags',
      children: app.translator.trans('flarum-tags.admin.nav.tags_button'),
      description: app.translator.trans('flarum-tags.admin.nav.tags_text')
    }));
  });
});

/***/ }),

/***/ "./src/admin/addTagsPermissionScope.js":
/*!*********************************************!*\
  !*** ./src/admin/addTagsPermissionScope.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/PermissionGrid */ "flarum/components/PermissionGrid");
/* harmony import */ var flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_PermissionDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/PermissionDropdown */ "flarum/components/PermissionDropdown");
/* harmony import */ var flarum_components_PermissionDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PermissionDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils/sortTags */ "./src/common/utils/sortTags.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(app, 'getRequiredPermissions', function (original, permission) {
    var tagPrefix = permission.match(/^tag\d+\./);

    if (tagPrefix) {
      var globalPermission = permission.substr(tagPrefix[0].length);
      var required = original(globalPermission);
      return required.map(function (required) {
        return tagPrefix[0] + required;
      });
    }

    return original(permission);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'scopeItems', function (items) {
    Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__["default"])(app.store.all('tags')).filter(function (tag) {
      return tag.isRestricted();
    }).forEach(function (tag) {
      return items.add('tag' + tag.id(), {
        label: Object(_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__["default"])(tag),
        onremove: function onremove() {
          return tag.save({
            isRestricted: false
          });
        },
        render: function render(item) {
          if (item.permission === 'viewDiscussions' || item.permission === 'startDiscussion' || item.permission && item.permission.indexOf('discussion.') === 0) {
            return flarum_components_PermissionDropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
              permission: 'tag' + tag.id() + '.' + item.permission,
              allowGuest: item.allowGuest
            });
          }

          return '';
        }
      });
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'scopeControlItems', function (items) {
    var tags = Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__["default"])(app.store.all('tags').filter(function (tag) {
      return !tag.isRestricted();
    }));

    if (tags.length) {
      items.add('tag', flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        className: 'Dropdown--restrictByTag',
        buttonClassName: 'Button Button--text',
        label: app.translator.trans('flarum-tags.admin.permissions.restrict_by_tag_heading'),
        icon: 'fas fa-plus',
        caretIcon: null,
        children: tags.map(function (tag) {
          return flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a.component({
            icon: true,
            children: [Object(_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_6__["default"])(tag, {
              className: 'Button-icon'
            }), ' ', tag.name()],
            onclick: function onclick() {
              return tag.save({
                isRestricted: true
              });
            }
          });
        })
      }));
    }
  });
});

/***/ }),

/***/ "./src/admin/compat.js":
/*!*****************************!*\
  !*** ./src/admin/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compat */ "./src/common/compat.js");
/* harmony import */ var _addTagsHomePageOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTagsHomePageOption */ "./src/admin/addTagsHomePageOption.js");
/* harmony import */ var _addTagChangePermission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTagChangePermission */ "./src/admin/addTagChangePermission.js");
/* harmony import */ var _addTagsPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTagsPane */ "./src/admin/addTagsPane.js");
/* harmony import */ var _components_TagSettingsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagSettingsModal */ "./src/admin/components/TagSettingsModal.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TagsPage */ "./src/admin/components/TagsPage.js");
/* harmony import */ var _components_EditTagModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/EditTagModal */ "./src/admin/components/EditTagModal.js");
/* harmony import */ var _addTagPermission__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addTagPermission */ "./src/admin/addTagPermission.js");
/* harmony import */ var _addTagsPermissionScope__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addTagsPermissionScope */ "./src/admin/addTagsPermissionScope.js");










/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_common_compat__WEBPACK_IMPORTED_MODULE_1__["default"], {
  'tags/addTagsHomePageOption': _addTagsHomePageOption__WEBPACK_IMPORTED_MODULE_2__["default"],
  'tags/addTagChangePermission': _addTagChangePermission__WEBPACK_IMPORTED_MODULE_3__["default"],
  'tags/addTagsPane': _addTagsPane__WEBPACK_IMPORTED_MODULE_4__["default"],
  'tags/components/TagSettingsModal': _components_TagSettingsModal__WEBPACK_IMPORTED_MODULE_5__["default"],
  'tags/components/TagsPage': _components_TagsPage__WEBPACK_IMPORTED_MODULE_6__["default"],
  'tags/components/EditTagModal': _components_EditTagModal__WEBPACK_IMPORTED_MODULE_7__["default"],
  'tags/addTagPermission': _addTagPermission__WEBPACK_IMPORTED_MODULE_8__["default"],
  'tags/addTagsPermissionScope': _addTagsPermissionScope__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./src/admin/components/EditTagModal.js":
/*!**********************************************!*\
  !*** ./src/admin/components/EditTagModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditTagModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");






/**
 * The `EditTagModal` component shows a modal dialog which allows the user
 * to create or edit a tag.
 */

var EditTagModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditTagModal, _Modal);

  function EditTagModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditTagModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.tag = this.props.tag || app.store.createRecord('tags');
    this.name = m.prop(this.tag.name() || '');
    this.slug = m.prop(this.tag.slug() || '');
    this.description = m.prop(this.tag.description() || '');
    this.color = m.prop(this.tag.color() || '');
    this.icon = m.prop(this.tag.icon() || '');
    this.isHidden = m.prop(this.tag.isHidden() || false);
  };

  _proto.className = function className() {
    return 'EditTagModal Modal--small';
  };

  _proto.title = function title() {
    return this.name() ? Object(_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__["default"])({
      name: this.name,
      color: this.color,
      icon: this.icon
    }) : app.translator.trans('flarum-tags.admin.edit_tag.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };

  _proto.fields = function fields() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('name', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.edit_tag.name_label')), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('flarum-tags.admin.edit_tag.name_placeholder'),
      value: this.name(),
      oninput: function oninput(e) {
        _this.name(e.target.value);

        _this.slug(Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_4__["slug"])(e.target.value));
      }
    })), 50);
    items.add('slug', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.edit_tag.slug_label')), m("input", {
      className: "FormControl",
      value: this.slug(),
      oninput: m.withAttr('value', this.slug)
    })), 40);
    items.add('description', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.edit_tag.description_label')), m("textarea", {
      className: "FormControl",
      value: this.description(),
      oninput: m.withAttr('value', this.description)
    })), 30);
    items.add('color', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.edit_tag.color_label')), m("input", {
      className: "FormControl",
      placeholder: "#aaaaaa",
      value: this.color(),
      oninput: m.withAttr('value', this.color)
    })), 20);
    items.add('icon', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.edit_tag.icon_label')), m("div", {
      className: "helpText"
    }, app.translator.trans('flarum-tags.admin.edit_tag.icon_text', {
      a: m("a", {
        href: "https://fontawesome.com/icons?m=free",
        tabindex: "-1"
      })
    })), m("input", {
      className: "FormControl",
      placeholder: "fas fa-bolt",
      value: this.icon(),
      oninput: m.withAttr('value', this.icon)
    })), 10);
    items.add('hidden', m("div", {
      className: "Form-group"
    }, m("div", null, m("label", {
      className: "checkbox"
    }, m("input", {
      type: "checkbox",
      value: "1",
      checked: this.isHidden(),
      onchange: m.withAttr('checked', this.isHidden)
    }), app.translator.trans('flarum-tags.admin.edit_tag.hide_label')))), 10);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary EditTagModal-save',
      loading: this.loading,
      children: app.translator.trans('flarum-tags.admin.edit_tag.submit_button')
    }), this.tag.exists ? m("button", {
      type: "button",
      className: "Button EditTagModal-delete",
      onclick: this.delete.bind(this)
    }, app.translator.trans('flarum-tags.admin.edit_tag.delete_tag_button')) : ''), -10);
    return items;
  };

  _proto.submitData = function submitData() {
    return {
      name: this.name(),
      slug: this.slug(),
      description: this.description(),
      color: this.color(),
      icon: this.icon(),
      isHidden: this.isHidden()
    };
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.tag.save(this.submitData()).then(function () {
      return _this2.hide();
    }, function (response) {
      _this2.loading = false;

      _this2.handleErrors(response);
    });
  };

  _proto.delete = function _delete() {
    var _this3 = this;

    if (confirm(app.translator.trans('flarum-tags.admin.edit_tag.delete_tag_confirmation'))) {
      var children = app.store.all('tags').filter(function (tag) {
        return tag.parent() === _this3.tag;
      });
      this.tag.delete().then(function () {
        children.forEach(function (tag) {
          return tag.pushData({
            attributes: {
              isChild: false
            },
            relationships: {
              parent: null
            }
          });
        });
        m.redraw();
      });
      this.hide();
    }
  };

  return EditTagModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/TagSettingsModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/TagSettingsModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__);



var TagSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagSettingsModal, _SettingsModal);

  function TagSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = TagSettingsModal.prototype;

  _proto.setMinTags = function setMinTags(minTags, maxTags, value) {
    minTags(value);
    maxTags(Math.max(value, maxTags()));
  };

  _proto.className = function className() {
    return 'TagSettingsModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('flarum-tags.admin.tag_settings.title');
  };

  _proto.form = function form() {
    var minPrimaryTags = this.setting('flarum-tags.min_primary_tags', 0);
    var maxPrimaryTags = this.setting('flarum-tags.max_primary_tags', 0);
    var minSecondaryTags = this.setting('flarum-tags.min_secondary_tags', 0);
    var maxSecondaryTags = this.setting('flarum-tags.max_secondary_tags', 0);
    return [m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.tag_settings.required_primary_heading')), m("div", {
      className: "helpText"
    }, app.translator.trans('flarum-tags.admin.tag_settings.required_primary_text')), m("div", {
      className: "TagSettingsModal-rangeInput"
    }, m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      value: minPrimaryTags(),
      oninput: m.withAttr('value', this.setMinTags.bind(this, minPrimaryTags, maxPrimaryTags))
    }), app.translator.trans('flarum-tags.admin.tag_settings.range_separator_text'), m("input", {
      className: "FormControl",
      type: "number",
      min: minPrimaryTags(),
      bidi: maxPrimaryTags
    }))), m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('flarum-tags.admin.tag_settings.required_secondary_heading')), m("div", {
      className: "helpText"
    }, app.translator.trans('flarum-tags.admin.tag_settings.required_secondary_text')), m("div", {
      className: "TagSettingsModal-rangeInput"
    }, m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      value: minSecondaryTags(),
      oninput: m.withAttr('value', this.setMinTags.bind(this, minSecondaryTags, maxSecondaryTags))
    }), app.translator.trans('flarum-tags.admin.tag_settings.range_separator_text'), m("input", {
      className: "FormControl",
      type: "number",
      min: minSecondaryTags(),
      bidi: maxSecondaryTags
    })))];
  };

  return TagSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/TagsPage.js":
/*!******************************************!*\
  !*** ./src/admin/components/TagsPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html5sortable/dist/html5sortable.es.js */ "./node_modules/html5sortable/dist/html5sortable.es.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EditTagModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditTagModal */ "./src/admin/components/EditTagModal.js");
/* harmony import */ var _TagSettingsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TagSettingsModal */ "./src/admin/components/TagSettingsModal.js");
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/sortTags */ "./src/common/utils/sortTags.js");









function tagItem(tag) {
  return m("li", {
    "data-id": tag.id(),
    style: {
      color: tag.color()
    }
  }, m("div", {
    className: "TagListItem-info"
  }, Object(_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_6__["default"])(tag), m("span", {
    className: "TagListItem-name"
  }, tag.name()), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
    className: 'Button Button--link',
    icon: 'fas fa-pencil-alt',
    onclick: function onclick() {
      return app.modal.show(new _EditTagModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
        tag: tag
      }));
    }
  })), !tag.isChild() && tag.position() !== null ? m("ol", {
    className: "TagListItem-children"
  }, Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__["default"])(app.store.all('tags')).filter(function (child) {
    return child.parent() === tag;
  }).map(tagItem)) : '');
}

var TagsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsPage, _Page);

  function TagsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = TagsPage.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "TagsPage"
    }, m("div", {
      className: "TagsPage-header"
    }, m("div", {
      className: "container"
    }, m("p", null, app.translator.trans('flarum-tags.admin.tags.about_tags_text')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      icon: 'fas fa-plus',
      children: app.translator.trans('flarum-tags.admin.tags.create_tag_button'),
      onclick: function onclick() {
        return app.modal.show(new _EditTagModal__WEBPACK_IMPORTED_MODULE_4__["default"]());
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button',
      children: app.translator.trans('flarum-tags.admin.tags.settings_button'),
      onclick: function onclick() {
        return app.modal.show(new _TagSettingsModal__WEBPACK_IMPORTED_MODULE_5__["default"]());
      }
    }))), m("div", {
      className: "TagsPage-list"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "TagGroup"
    }, m("label", null, app.translator.trans('flarum-tags.admin.tags.primary_heading')), m("ol", {
      className: "TagList TagList--primary"
    }, Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_7__["default"])(app.store.all('tags')).filter(function (tag) {
      return tag.position() !== null && !tag.isChild();
    }).map(tagItem))), m("div", {
      className: "TagGroup"
    }, m("label", null, app.translator.trans('flarum-tags.admin.tags.secondary_heading')), m("ul", {
      className: "TagList"
    }, app.store.all('tags').filter(function (tag) {
      return tag.position() === null;
    }).sort(function (a, b) {
      return a.name().localeCompare(b.name());
    }).map(tagItem))))));
  };

  _proto.config = function config() {
    Object(html5sortable_dist_html5sortable_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$('ol, ul'), {
      acceptFrom: 'ol,ul'
    }).forEach(this.onSortUpdate.bind(this));
  };

  _proto.onSortUpdate = function onSortUpdate(el) {
    var _this = this;

    el.addEventListener('sortupdate', function (e) {
      // If we've moved a tag from 'primary' to 'secondary', then we'll update
      // its attributes in our local store so that when we redraw the change
      // will be made.
      if (e.detail.origin.container instanceof HTMLOListElement && e.detail.destination.container instanceof HTMLUListElement) {
        app.store.getById('tags', e.detail.item.getAttribute('data-id')).pushData({
          attributes: {
            position: null,
            isChild: false
          },
          relationships: {
            parent: null
          }
        });
      } // Construct an array of primary tag IDs and their children, in the same
      // order that they have been arranged in.


      var order = _this.$('.TagList--primary > li').map(function () {
        return {
          id: $(this).data('id'),
          children: $(this).find('li').map(function () {
            return $(this).data('id');
          }).get()
        };
      }).get(); // Now that we have an accurate representation of the order which the
      // primary tags are in, we will update the tag attributes in our local
      // store to reflect this order.


      order.forEach(function (tag, i) {
        var parent = app.store.getById('tags', tag.id);
        parent.pushData({
          attributes: {
            position: i,
            isChild: false
          },
          relationships: {
            parent: null
          }
        });
        tag.children.forEach(function (child, j) {
          app.store.getById('tags', child).pushData({
            attributes: {
              position: j,
              isChild: true
            },
            relationships: {
              parent: parent
            }
          });
        });
      });
      app.request({
        url: app.forum.attribute('apiUrl') + '/tags/order',
        method: 'POST',
        data: {
          order: order
        }
      }); // A diff redraw won't work here, because sortable has mucked around
      // with the DOM which will confuse Mithril's diffing algorithm. Instead
      // we force a full reconstruction of the DOM.

      m.redraw.strategy('all');
      m.redraw();
    });
  };

  return TagsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/models/Tag */ "./src/common/models/Tag.js");
/* harmony import */ var _addTagsPermissionScope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTagsPermissionScope */ "./src/admin/addTagsPermissionScope.js");
/* harmony import */ var _addTagPermission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTagPermission */ "./src/admin/addTagPermission.js");
/* harmony import */ var _addTagsPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTagsPane */ "./src/admin/addTagsPane.js");
/* harmony import */ var _addTagsHomePageOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTagsHomePageOption */ "./src/admin/addTagsHomePageOption.js");
/* harmony import */ var _addTagChangePermission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTagChangePermission */ "./src/admin/addTagChangePermission.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compat */ "./src/admin/compat.js");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @flarum/core/admin */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_8__);







app.initializers.add('flarum-tags', function (app) {
  app.store.models.tags = _common_models_Tag__WEBPACK_IMPORTED_MODULE_1__["default"];
  Object(_addTagsPermissionScope__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_addTagPermission__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_addTagsPane__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_addTagsHomePageOption__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_addTagChangePermission__WEBPACK_IMPORTED_MODULE_6__["default"])();
}); // Expose compat API




Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_8__["compat"], _compat__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "./src/common/compat.js":
/*!******************************!*\
  !*** ./src/common/compat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sortTags */ "./src/common/utils/sortTags.js");
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Tag */ "./src/common/models/Tag.js");
/* harmony import */ var _helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/tagLabel */ "./src/common/helpers/tagLabel.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  'tags/utils/sortTags': _utils_sortTags__WEBPACK_IMPORTED_MODULE_0__["default"],
  'tags/models/Tag': _models_Tag__WEBPACK_IMPORTED_MODULE_1__["default"],
  'tags/helpers/tagsLabel': _helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
  'tags/helpers/tagIcon': _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
  'tags/helpers/tagLabel': _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/common/helpers/tagIcon.js":
/*!***************************************!*\
  !*** ./src/common/helpers/tagIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagIcon; });
function tagIcon(tag, attrs, settings) {
  if (attrs === void 0) {
    attrs = {};
  }

  if (settings === void 0) {
    settings = {};
  }

  var hasIcon = tag && tag.icon();
  var _settings = settings,
      _settings$useColor = _settings.useColor,
      useColor = _settings$useColor === void 0 ? true : _settings$useColor;
  attrs.className = hasIcon ? 'icon ' + tag.icon() + ' ' + (attrs.className || '') : 'icon TagIcon ' + (attrs.className || '');

  if (tag) {
    attrs.style = attrs.style || {};

    if (hasIcon) {
      attrs.style.color = useColor ? tag.color() : '';
    } else {
      attrs.style.backgroundColor = tag.color();
    }
  } else {
    attrs.className += ' untagged';
  }

  return hasIcon ? m("i", attrs) : m("span", attrs);
}

/***/ }),

/***/ "./src/common/helpers/tagLabel.js":
/*!****************************************!*\
  !*** ./src/common/helpers/tagLabel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagIcon */ "./src/common/helpers/tagIcon.js");


function tagLabel(tag, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  var tagText = tag ? tag.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text');

  if (tag) {
    var color = tag.color();

    if (color) {
      attrs.style.backgroundColor = attrs.style.color = color;
      attrs.className += ' colored';
    }

    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', {
        tags: tag.slug()
      });
      attrs.config = m.route;
    }
  } else {
    attrs.className += ' untagged';
  }

  return m(link ? 'a' : 'span', attrs, m("span", {
    className: "TagLabel-text"
  }, tag && tag.icon() && Object(_tagIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(tag, {}, {
    useColor: false
  }), " ", tagText));
}

/***/ }),

/***/ "./src/common/helpers/tagsLabel.js":
/*!*****************************************!*\
  !*** ./src/common/helpers/tagsLabel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagsLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sortTags */ "./src/common/utils/sortTags.js");



function tagsLabel(tags, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  var children = [];
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  attrs.className = 'TagsLabel ' + (attrs.className || '');

  if (tags) {
    Object(_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__["default"])(tags).forEach(function (tag) {
      if (tag || tags.length === 1) {
        children.push(Object(_tagLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(tag, {
          link: link
        }));
      }
    });
  } else {
    children.push(Object(_tagLabel__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  return m("span", attrs, children);
}

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/models/Tag.js":
/*!**********************************!*\
  !*** ./src/common/models/Tag.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tag; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);





var Tag =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Tag, _mixin);

  function Tag() {
    return _mixin.apply(this, arguments) || this;
  }

  return Tag;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  slug: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('slug'),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('description'),
  color: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('color'),
  backgroundUrl: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('backgroundUrl'),
  backgroundMode: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('backgroundMode'),
  icon: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('icon'),
  position: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('position'),
  parent: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('parent'),
  defaultSort: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('defaultSort'),
  isChild: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isChild'),
  isHidden: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isHidden'),
  discussionCount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('discussionCount'),
  lastPostedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('lastPostedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  lastPostedDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('lastPostedDiscussion'),
  isRestricted: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isRestricted'),
  canStartDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canStartDiscussion'),
  canAddToDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canAddToDiscussion'),
  isPrimary: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('position', 'parent', function (position, parent) {
    return position !== null && parent === false;
  })
}));



/***/ }),

/***/ "./src/common/utils/sortTags.js":
/*!**************************************!*\
  !*** ./src/common/utils/sortTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortTags; });
function sortTags(tags) {
  return tags.slice(0).sort(function (a, b) {
    var aPos = a.position();
    var bPos = b.position(); // If they're both secondary tags, sort them by their discussions count,
    // descending.

    if (aPos === null && bPos === null) return b.discussionCount() - a.discussionCount(); // If just one is a secondary tag, then the primary tag should
    // come first.

    if (bPos === null) return -1;
    if (aPos === null) return 1; // If we've made it this far, we know they're both primary tags. So we'll
    // need to see if they have parents.

    var aParent = a.parent();
    var bParent = b.parent(); // If they both have the same parent, then their positions are local,
    // so we can compare them directly.

    if (aParent === bParent) return aPos - bPos; // If they are both child tags, then we will compare the positions of their
    // parents.
    else if (aParent && bParent) return aParent.position() - bParent.position(); // If we are comparing a child tag with its parent, then we let the parent
      // come first. If we are comparing an unrelated parent/child, then we
      // compare both of the parents.
      else if (aParent) return aParent === b ? 1 : aParent.position() - bPos;else if (bParent) return bParent === a ? -1 : aPos - bParent.position();
    return 0;
  });
}

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/BasicsPage":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/BasicsPage']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/BasicsPage'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/PermissionDropdown":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/PermissionDropdown']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PermissionDropdown'];

/***/ }),

/***/ "flarum/components/PermissionGrid":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/PermissionGrid']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PermissionGrid'];

/***/ }),

/***/ "flarum/components/SettingDropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/SettingDropdown']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingDropdown'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/extract":
/*!******************************************************!*\
  !*** external "flarum.core.compat['utils/extract']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extract'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map