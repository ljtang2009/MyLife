'use strict';

const getTime = require("./getTime");

exports.main = async (event, context) => {
	if (event.method === 'getTime') {
		return getTime(event, context);
	}
	else {
		throw new Error('method 定义错误');
	}
};
