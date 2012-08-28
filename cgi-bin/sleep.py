#!/usr/bin/env python

import time
import cgi

form = cgi.FieldStorage()
if form.has_key('t'):
    t = int(form['t'].value)
else:
    t = 10

time.sleep(t)

print "Content-type: text/plain"
print
print "slept %s seconds" % t
