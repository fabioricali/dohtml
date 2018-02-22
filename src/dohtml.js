function toArray(value, checkNull = true) {
    if ((checkNull && value === null) || value === undefined)
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
const dom = {
    /**
     * Create DOM element
     * @param str
     * @returns {Element | Node | null}
     */
    create: function (str) {
        let template = document.createElement('div');
        str = str.trim();
        template.innerHTML = str;
        let element = template.firstChild;
        if (!this.isValidNode(element))
            throw new Error('Element not valid');
        return template.firstChild;
    },

    /**
     * Check if is a valid Node
     * @param {*} el
     * @returns {boolean}
     */
    isValidNode: function (el) {
        return el && 'nodeType' in el;
    },

    /**
     * Append multiple elements into target element
     * @param {Element} target
     * @param {Array|String} els
     */
    render: function (target, els) {
        els = toArray(els);
        if (!this.isValidNode(target))
            throw new Error('Require a valid HTML Element');

        els.forEach(function (el) {
            target.appendChild(el);
        });
    }
};

module.exports = dom;