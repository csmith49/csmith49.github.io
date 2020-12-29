+++
title = "Generating Programmatic Referring Expressions via Program Synthesis"
authors = "Jiani Huang, Calvin Smith, Osbert Bastani, Rishabh Singh, Aws Albarghouthi, and Mayur Naik"
reference = "icml20"

url_pdf = "https://www.cis.upenn.edu/~mhnaik/papers/icml20.pdf"
url_code = ""
url_video = ""

location = "International Conference of Machine Learning"
location_short = "ICML"

date = 2020-03-23

awards = []

more = ""

selected = true
local_pdf = false
+++

Incorporating symbolic reasoning into machine learning algorithms is a promising approach to improve performance on learning tasks that require logical reasoning. We study the problem of generating a programmatic variant of referring expressions that we call referring relational programs. In particular, given a symbolic representation of an image and a target object in that image, the goal is to generate a relational program that uniquely identifies the target object in terms of its attributes and its relations to other objects in the image. We propose a neurosymbolic program synthesis algorithm that combines a policy neural network with enumerative search to generate such relational programs. The policy neural network employs a program interpreter that provides immediate feedback on the consequences of the decisions made by the policy, and also takes into account the uncertainty in the symbolic representation of the image. We evaluate our algorithm on challenging benchmarks based on the CLEVR dataset, and demonstrate that our approach significantly outperforms several baselines.