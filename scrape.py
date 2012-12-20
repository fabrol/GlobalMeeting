import os
import dateutil.tz as dtz
import pytz
import datetime as dt
import collections

result=collections.defaultdict(list)
f = open('tzmap.data', 'w')
for name in pytz.common_timezones:
	timezone=dtz.gettz(name)
	now=dt.datetime.now(timezone)
	offset=now.strftime('%z')
	result[offset].append(name)
	print >>f, "{ value: '%s', label: '%s'},"% (offset, name)
f.close()