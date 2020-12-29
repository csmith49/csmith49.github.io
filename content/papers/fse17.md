+++
title = "Discovering Relational Specifications"
authors = "Calvin Smith, Gabriel Ferns, and Aws Albarghouthi"
reference = "fse17"

url_pdf = "http://pages.cs.wisc.edu/~aws/papers/fse17.pdf"
url_code = ""
url_video = ""

location = "Foundations of Software Engineering"
location_short = "FSE"

date = 2017-09-04

awards = ["Best Paper Award"]

more = ""

selected = true
local_pdf = false
+++

Formal specifications of library functions play a critical role in a number of program analysis and development tasks. We present Bach, a technique for discovering likely *relational specifications* from data describing input–output behavior of a set of functions comprising a library or a program. Relational specifications correlate different executions of different functions; for instance, commutativity, transitivity, equivalence of two functions, etc. Bach combines novel insights from program synthesis and databases to discover a rich array of specifications. We apply Bach to learn specifications from data generated for a number of standard libraries. Our experimental evaluation demonstrates Bach’s ability to learn useful and deep specifications in a small amount of time.