/*!
 * domready (c) Craig Patik 2014 - License MIT
 * Forked from Dustin Diaz, (c) 2014 - License MIT
 */
function(name, definition) {
    if (typeof module != 'undefined') {
        module.exports = definition();
    }
    else if (typeof define == 'function' && typeof define.amd == 'object') {
        define(definition);
    }
    else {
        this[name] = definition();
    }
}('domready', function() {
    var fns = [],
        doc = document,
        loaded = /^loaded|^i|^c/.test(doc.readyState),
        addFunc, removeFunc, eventName,
        listener;

    if (doc.addEventListener) {
        addFunc = 'addEventListener';
        removeFunc = 'removeEventListener';
        eventName = 'domContentLoaded';
    }
    else {
        addFunc = 'attachEvent';
        removeFunc = 'detachEvent';
        eventName = 'onload';
    }

    if (!loaded) {
        doc[addFunc](eventName, listener = function() {
            doc[removeFunc](eventName, listener);
            loaded = 1;
            while (listener = fns.shift()) {
                listener();
            }
        });
    }

    return function(fn) {
        loaded ? fn() : fns.push(fn);
    };
});
