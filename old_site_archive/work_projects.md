---
layout: page
---
## Work Projects

These are just a sample of some of the public projects I have worked on at Orbital Insight and A9.


### Residential Housing Construction Monitoring

In 2018, [Orbital Insight partnered with Meyers Research](https://meyersresearchllc.com/meyers-research-and-orbital-insight-partner-to-deliver-real-time-u-s-housing-construction-data/),
a leader in new home construction data. A traditional method to track home construction data in the US involves having people drive all around the country to manually count homes in different stages of construction.
We built a system which can detect different stages of housing construction using satellite imagery and monitor new houses over time.

{% include figure.html image="/assets/housing_construction.png" position="center" width="800px" %}

### A Weakly Supervised Approach for Estimating Spatial Density Functions from High-Resolution Satellite Imagery

This [research paper](https://arxiv.org/abs/1810.09528) ([project code](https://github.com/orbitalinsight/region-aggregation-public))
from 2018 was a collaboration with [Nathan Jacobs](http://cs.uky.edu/~jacobs/), who works with us at Orbital Insight.
The main idea is to use weak labels in the form of differently shaped polygons to try to learn fine-grained details.
This is a fairly common paradigm in geospatial data, where you have labels about population at a city or state level, but the image pixels of satellite imagery are much more detailed.
One of the interesting outcomes was that when we trained using population data, the per-pixel scores were high for residential housing areas, but not for commercial buildings.

{% include figure.html image="/assets/region_aggregation.png" position="center" width="500px" height="500px" %}

### Deforestation Detection and Land Use Monitoring

In 2015, [Orbital Insight partnered with the World Resources Institute](https://www.wri.org/news/2015/04/release-orbital-insight-and-world-resources-institute-partner-satellite-imagery-curb)
to see how deep learning could help monitor deforestation.
This project used a classifier to detect water, roads, buildings, parking lots, grass land, golf courses, plantation forests, and natural forests.
We also ran change detection algorithms to see how the land changed over time. 
Deep learning does a much better job than traditional remote sensing algorithms at detecting certain types of fine-grained classes, like the distinction between plantation forests and natural forests.
The results can run at very large scales (world-wide) and provide fine-grained information as well as high-level information when you zoom out.

{% include figure.html image="/assets/deforestation.png" position="center" width="800px" height="800px" %}

### Amazon Gift Card Recognition

In 2014, I designed and implemented Amazon's Gift Card Scanning feature from R&D to production.
The feature was realeased in early 2015.

{% include figure.html image="/assets/gift_card.png" position="center" width="500px" %}
