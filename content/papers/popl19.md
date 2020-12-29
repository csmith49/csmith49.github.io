+++
title = "Trace Abstraction Modulo Probability"
authors = "Calvin Smith, Justin Hsu, and Aws Albarghouthi"
reference = "popl19"

url_pdf = "https://arxiv.org/abs/1810.12396"
url_code = ""
url_video = "https://www.youtube.com/watch?v=JF3MeSsN0Ng"

location = "Principles of Programming Languages"
location_short = "POPL"

date = 2019-01-14

awards = []

more = ""

selected = true
local_pdf = false
+++

We propose trace abstraction modulo probability, a proof technique for verifying high-probability accuracy guarantees of probabilistic programs. Our proofs over-approximate the set of program traces using failure automata, finite-state automata that upper bound the probability of failing to satisfy a target specification. We automate proof construction by reducing probabilistic reasoning to logical reasoning: we use program synthesis methods to select axioms for sampling instructions, and then apply Craig interpolation to prove that traces fail the target specification with only a small probability. Our method handles programs with unknown inputs, parameterized distributions, infinite state spaces, and parameterized specifications. We evaluate our technique on a range of randomized algorithms drawn from the differential privacy literature and beyond. To our knowledge, our approach is the first to automatically establish accuracy properties of these algorithms.