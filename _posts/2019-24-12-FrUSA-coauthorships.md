---
layout: post
title: "Coauthorships between French and US institutes"
date: 2019-12-14
category: ["all"]
tags: ["Exploratory","Coauthorships","MAG"]
---

*George Panagopoulos, December 25, 2019*



## Introduction
In this exploratory analysis, we aim to examine the collaborations patterns between French and USA institutions. Towards this, we capitalize on the Microsoft Academic Graph \href{https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/}{(MAG)}, the largest open bibliographic dataset that contains detailed information for authors, publications and institutions. In order to map affiliations to either France or USA, we utilized the python \href{geopandas}(http://geopandas.org/) library that contains latitude and longtitude of the world map. In cases where the coordinates of an affiliation were not available, we used its 
wikipedia url and named entity recognition to identify the country of its address in the Wikipedia page. We need to stress that regarding institute names, this is a best effort trial as such names have been volatile (due to university federations created) in the last decade mostly in France. Initial results indicate there is an intensive and increasing scientific production in terms of FR-US joint papers and resulting citations. 


## Analysis
### Top Academic Institutes
Among the French academic institutes that collaborate with USA we report in Table 1 the 10 most productive (in terms of number of papers) and their most frequent collaborators in the USA. Figure 1  visualizes the same information with a chord plot, where the edges are colored based on the US institutes. This shows the US universities collaborating mostly with the the aforementioned most productive French institutes, with Harvard and MIT standing out with more than 3 inter-university collaborations.

<center><img src="/images/fr_us/chord.jpg" width="80%">  
</center>   
*Figure 1. Table 1 visualized in a chord plot*
<br><br>



| **France**   | **USA**   |
|---|---|
|Centre national de la recherche scientifique (CNRS) | California Institute of Technology (CalTech) [2678] <br> Massachusetts Institute of Technology(MIT) [2226] <br> Harvard University [2106]| 
|---|---|
|French Institute of Health and Medical Research (FIHM) | Harvard University [1765] <br> National Institutes of Health (NIH) [1484] <br> Boston Children's Hospital (BCH) [1053]|
|---|---|
|University of Paris (UParis) | Harvard University [2061] <br> Stanford University [1486] <br> Massachusetts Institute of Technology (MIT) [1280] |
|---|---|
|École Normale Supérieure (ENS) | Harvard University [276] <br> Massachusetts Institute of Technology (MIT) [252] <br>  University of California, Berkeley [247]| 
|---|---|
|Institut National de la Recherche Agronomique (INRA) | University of California, Davis [255]<br>   Agricultural Research Service (AGS) [255]<br>  United States Department of Agriculture (USDA) [244] |
|---|---|
|Pierre-and-Marie-Curie University (UPMC) | Massachusetts Institute of Technology (MIT) [769]<br>  Harvard University [761]<br>  University of Michigan [670]|
|---|---|
| University of Bordeaux|Harvard University [335] <br>  University of Washington [277]<br>  National Institutes of Health (NIH) [212]|
|---|---|
| University of Paris-Sud | Massachusetts Institute of Technology (MIT) [1327] <br> Harvard University [1305] <br> Iowa State University [1093]|
|---|---|
|University of Montpellier | University of Washington [230] <br> Harvard University [219]<br>  University of Maryland, College Park (UMD) [211]|
|---|---|
|Pasteur Institute | National Institutes of Health (NIH) [561] <br>  Harvard University [421] <br>  Centers for Disease Control and Prevention (CDCP) [313]|
  *Table 1. THe 10 most productive french institutes and their top 3 USA collaborators.*


### The timeline of French - US  academic collaborations 

The oldest collaboration between a French and a US institute dates back to 1930, with a joint paper between Ecole Normal Superiere and Cornell University entitled "LA GRAISSE DU SANG ET LA GRAISSE DU LAIT PENDANT LA. LACTATION"\footnote{Ch. Porcher, L. Maynard. LA GRAISSE DU SANG ET LA GRAISSE DU LAIT PENDANT LA
LACTATION. Le Lait, INRA Editions, 1930, 10 (96), pp.601-613. ffhal-00894993}.
Since then, the number of collaborations, as well as their impact (in terms of citations) have increased significantly, as one can see in Figures \ref{fig:bar_papers} and  \ref{fig:bar_citations}.
As one can see there is an almost exponential increase in the number of papers produced by joint collaborations. The same applies for the impact of these works, which increases especially until 2010. Naturally, the citations count in the recent years, as young papers have less citations and they need time to get more cited. There are also some monumental years, such as 2012, where the inclusion of the publications on the discovery of the Higgs Boson particle e.g. \cite{aad2012observation,bezrukov2012higgs} has produced a massive number of citations. 


<center><img src="/images/fr_us/papers_in_time-1.jpg" width="50%">  <img src="/images/fr_us/citations_in_time-1.jpg" width="50%">  
</center>   
*Figure 2. France-USA joint papers temporal distribution  | FR-US joint papers' citations temporal distribution*
<br><br>


Distinguishing between different fields, we can see in Fig. \ref{fig:bar_field_papers} how the number of collaborations have evolved through the years in different disciplines, as well as their success in Fig. \ref{fig:bar_field_citations}. Bare in mind that a paper might belong to more than one fields. 

* We see that the majority of works are comprised of medical studies, which is quite common in academia.

* The second field is computer science and the third biology. Especially in computer science, there is a steep increase around 2010.

* The citations do not follow the same pattern, as the top cited domain is  medicine, followed by biology and and computer science. This is due to  the known differences in citation patterns among computer science and biology \footnote{https://www.sciencedirect.com/science/article/pii/S2405844016322800}.

* Mathematics is the least active field in this context since publications in this area are relatively rare. Still there are some spikes of citations through the years because of some important papers.
    

  
<center><img src="/images/fr_us/papers_by_field_in_time-1.jpg" width="50%">  <img src="/images/fr_us/citations_by_field_in_time-1.jpg" width="50%">  
</center>   
*Figure 3. France-USA joint papers temporal distribution per prominent scientific area.  | FR-US joint papers \textit{citations} temporal distribution per prominent scientific area.*
<br><br>




### Top collaborations
We define a collaboration among a French and a US scientific institute if there is at least one paper coauthored by scientists from both these institutes. The strength $P(c)$ of the collaboration $c$ refers to the number of such papers. The collaborations are then ranked according this \textit{strength}. The most important ones are those for which the \textit{strength} is above the average number of papers in all collaborations and six standard deviations of the distribution i.e. 
$\{c | P(c)\geq mean({\{P(c')\}_{c'\in C}})+6sd(\{P(c')\}_{c'\in C})\}$, 
where $C$ is the set of all collaborations. The threshold and the density are visualized in figure \ref{fig:density}. The number of collaborations that are above this threshold is 492.


  
<center><img src="/images/fr_us/density-1.jpg" width="80%">  
</center>   
*Figure 4. Density of number of collaborations with the number of papers, and the threshold to define the top collaborations. | FR-US joint papers \textit{citations} temporal distribution per prominent scientific area.*
<br><br>

These are visualized in the map plot \ref{fig:collab_big}. Although we can get an idea of the overall cities that collaborate mostly with each other, it is still a very perplex image to make sense of. Thus we reduce it even more, by taking the top 100 collaborations, and making a weighted bipartite plot in \ref{fig:collab_small}.

<center><img src="/images/fr_us/gmaps_re-1.jpg" width="80%">  
</center>   
*France-USA top collaborations.*
<br><br>


<center><img src="/images/fr_us/collab_small-1.jpg" width="80%">  
</center>
*Figure 5. France-USA top 100 collaborations in terms of number of joint papers. Left is USA,  right is France. The size of the nodes is proportional to their number of papers, the edge width is proportional to the collaborations' strength and their color is different for each French institution.*
<br><br>


Few observations derived from a first glance on this network:
* CNRS is the institute with  most collaborations, followed by Ecole Polytechnique and University of Strasbourg.
* The strength of collaboration is proportional to width of the line connecting institutes. For instance  CNRS is highly connected with CalTech and UMD while University of Paris shows a dense collaboration with Harvard.
* The French Institute of Health and Medical Research collaborates only with two US institutes well known for their achievements in medicine, Harvard and NIH.
* The most productive  French Institute is clearly CNRS, followed by University of Paris, while for the USA it is Harvard and University of Michigan.


### Top 10 collaborations
The top 10 collaborations in terms of absolute number of joint papers can be seen in table 2.


| **France**   | **USA**   |
|---|---|
|California Institute of Technology    | Centre national de la recherche scientifique (CNRS)  2678|
|---|---|
| Massachusetts Institute of Technology | Centre national de la recherche scientifique  (CNRS) 2226|  
|---|---|
| Harvard University   | Centre national de la recherche scientifique (CNRS)  2106|
|---|---|
| University of Maryland, College Park    | Centre national de la recherche scientifique  (CNRS) 2092 |
|---|---|
| Harvard University   |  University of Paris   2061|
|---|---|
| Ohio State University   | Centre national de la recherche scientifique (CNRS)  1840 |
|---|---|
| Harvard University   | French Institute of Health and Medical Research   1765   |
|---|---|
| University of Wisconsin-Madison      |   Centre national de la recherche scientifique (CNRS)  1742|
|---|---|
| Princeton University  |  Centre national de la recherche scientifique (CNRS)  1638|
|---|---|
| University of Michigan |  Centre national de la recherche scientifique (CNRS)  1596|
 *Table 2. Top US-FR collaborations in terms of number of papers.*


For each of the 10 collaborations we report the topical distribution in the figures below.
Some observations include:<br>

* The collaboration between CalTech and CNRS focuses mainly in math,chemistry and physics.

* The joint works of CNRS with MIT and Harvard are predominantly in medicine. In contrast, the secondary fields in MIT are computer science, chemistry, physics and math, while for Harvard biology is second and the rest follow. This makes sense because, as mentioned above, MIT is focusing more on science and technology while Harvard has a broader scope.

* University of Maryland (UMD) and CNRS seem to collaborate in a variety of disciplines, with physics being the  dominant. 

* It is clear the main joint papers between Harvard and University of Paris refer to medical studies. The same applied to the French Institute of Health and Medical Research, which overall might refer to joint works between these three institutes.

* CNRS has also collaborated extensively with Ohio State, Wisconsin-Madison and Michigan, especially in medicine. 

* Finally, \textbf{CNRS shares physics papers with the Petersburg- remove!!} Nuclear Physics Institute and mathematical papers with Princeton, both US institutes being well known for these disciplines.
\end{itemize}


<center><img src="/images/fr_us/2-1.jpg" width="40%">  <img src="/images/fr_us/3-1.jpg" width="40%">  </center>
<center> <img src="/images/fr_us/4-1.jpg" width="40%">  <center><img src="/images/fr_us/5-1.jpg" width="40%"> </center>
<center> <img src="/images/fr_us/6-1.jpg" width="40%">  <img src="/images/fr_us/7-1.jpg" width="40%">  </center>
<center><img src="/images/fr_us/8-1.jpg" width="40%">  <img src="/images/fr_us/9-1.jpg" width="40%">  </center>
<center> <img src="/images/fr_us/10-1.jpg" width="40%"> <img src="/images/fr_us/11-1.jpg" width="40%">  </center>
<br>

### Conclusion

This analysis was performed after request of the [Office for Science and Technology](https://www.france-science.org/-Homepage-English-.html)  of the Embassy of France in the Unites-States.
<!--- (Yves Frenot, Jean-Baptiste Bordes, Maxime Benallaoua) 
https://www.france-science.org/-Homepage-English-.html --->

