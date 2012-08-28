#!/usr/bin/env python

from datetime import datetime

now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
url = "http://www.doaj.org/oai.article?verb=ListRecords&from=%s&metadataPrefix=oai_dc" % now
print "Location: %s" % url
print
