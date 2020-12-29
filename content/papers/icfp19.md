+++
title = "Synthesizing Differentially Private Programs"
authors = "Calvin Smith and Aws Albarghouthi"
reference = "icfp19"

url_pdf = "https://icfp19.sigplan.org/program/program-icfp-2019"
url_code = ""
url_video = ""

location = "International Conference on Functional Programming"
location_short = "ICFP"

date = 2019-08-18

awards = []

more = ""

selected = true
local_pdf = false
+++

Inspired by the proliferation of data-analysis tasks, recent research in program synthesis has had a strong focus on enabling users to specify data-analysis programs through intuitive specifications, like examples and natural language. However, with the ever-increasing threat to privacy through data analysis, we believe it is imperative to reimagine program synthesis technology in the presence of formal privacy constraints.

In this paper, we study the problem of automatically synthesizing randomized, differentially private programs, where the user can provide the synthesizer with a constraint on the privacy of the desired algorithm. We base our technique on a linear dependent type system that can track the resources consumed by a program, and hence its privacy cost. We develop a novel type-directed synthesis algorithm that constructs randomized differentially private programs. We apply our technique to the problems of synthesizing database-like queries as well as recursive differential privacy mechanisms from the literature.