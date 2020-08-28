const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const localTimeZone = 'Asia/Shanghai'; //时区

module.exports = function(event, context) {
	const now = dayjs().tz(localTimeZone);
	
	return now.format(event.params && event.params.format ? event.params.format : '');
}