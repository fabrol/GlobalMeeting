from flask import Flask, render_template, request
from arrow import arrow
from datetime import datetime, timedelta
from dateutil import parser

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
	# to_tz = time zone numeric/name encoding
	if request.method == 'POST':
		offset = int(request.form['input_dt'][-5:])
		delta = timedelta(hours = offset / 100)
		dt_req = parser.parse(request.form['input_dt'])
		cur_time = arrow(dt_req, delta)
				
		to_tz = request.form['to_tz']
		conv_time = cur_time.to(str(to_tz))
		res = [conv_time.datetime.date(), conv_time.datetime.time(), conv_time.tz.name]

		return render_template('index.html', to_tz = to_tz, dt = str(dt_req), res=res)	 		

	return render_template('index.html', dt = str(arrow('local').datetime))
if __name__ == '__main__':
	app.run(debug=True)
