/**
 * @fileoverview Rule to prefer _.noop over an empty function
 */
'use strict';

var astUtil = require('../util/astUtil');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    function reportIfEmptyFunction(node) {
        if (!astUtil.getFirstFunctionLine(node)) {
            context.report(node, 'Prefer _.noop over an empty function');
        }
    }

    return {
        FunctionExpression: reportIfEmptyFunction,
        ArrowFunctionExpression: reportIfEmptyFunction
    };
};
