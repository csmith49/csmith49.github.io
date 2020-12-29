+++
title = "MapReduce Program Synthesis"
authors = "Calvin Smith and Aws Albarghouthi"
reference = "pldi16"

url_pdf = "http://dl.acm.org/citation.cfm?id=2908102"
url_code = "https://github.com/csmith49/biglambda"
url_video = "https://www.youtube.com/watch?v=d1BzDVVulMU"

location = "Programming Language Design and Implementation"
location_short = "PLDI"

date = 2016-06-13

awards = []

more = ""

selected = true
local_pdf = false
+++

By abstracting away the complexity of distributed systems, large-scale data processing platforms—MapReduce, Hadoop, Spark, Dryad, etc.—have provided developers with simple means for harnessing the power of the cloud. In this paper, we ask whether we can *automatically synthesize* MapReduce-style distributed programs from input–output examples. Our ultimate goal is to enable end users to specify large-scale data analyses through the simple interface of examples. We thus present a new algorithm and tool for synthesizing programs composed of efficient data-parallel operations that can execute on cloud computing infrastructure. We
evaluate our tool on a range of real-world big-data analysis tasks and general computations. Our results demonstrate the efficiency of our approach and the small number of examples it requires to synthesize correct, scalable programs.