import os
import dateutil.tz as dtz
import pytz
import datetime as dt
import collections

result=collections.defaultdict(list)
for name in pytz.common_timezones:
	timezone=dtz.gettz(name)
	now=dt.datetime.now(timezone)
	offset=now.strftime('%z')
	abbrev=now.strftime('%Z')
	result[offset].append(name)
	result[abbrev].append(name)    
	print(result)
