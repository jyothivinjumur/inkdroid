#!/usr/bin/python

import os 
import sys
import re

print "Content-type: text/plain\n\n"

for key in os.environ.keys():
  if key.startswith('HTTP'):
    pair  = (re.sub('HTTP_', '', key), os.environ[key])
    print "%20s: %s" % pair
    sys.stderr.write('%s="%s" ' % pair)

sys.stderr.write("\n")





