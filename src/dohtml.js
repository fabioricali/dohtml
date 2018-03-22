function toArray(value) {
    if (value === null || value === undefined)
        return [];
    else
        return Array.isArray(value)
            ? value
            : [value];
}

/**
 * dohtml
 * @type {{create: dom.create, isValidNode: dom.isValidNode, render: dom.render}}
 */
var dom = {
    /**
     * Create DOM element
     * @param str
     * @returns {Element | Node | null}
     */
    create: function (str) {
        var template = document.createElement('div');
        str = str.trim();
        template.innerHTML = str;
        var element = template.firstChild;
        if (!this.isValidNode(element))
            throw new Error('Element not valid');
        return element;
    },

    /**
     * Check if is a valid Node
     * @param {*} el
     * @returns {Boolean}
     */
    isValidNode: function (el) {
        return el && 'nodeType' in el;
    },

    /**
     * Append multiple elements into target element
     * @param {Element} target
     * @param {Array | Element} els
     * @returns {Element | Node | Error}
     */
    render: function (target, els) {
        els = toArray(els);
        if (!this.isValidNode(target))
            throw new Error('Require a valid HTML Element');

        els.forEach(function (el) {
            target.appendChild(el);
        });
        return target;
    }
};

module.exports = dom;