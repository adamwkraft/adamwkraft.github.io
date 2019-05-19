---
layout: page
---
## Personal Projects

### STL4py (2015)
_Python version of some Standard Template Library (STL) C++ methods. [github](https://github.com/adamwkraft/stl4py)_

In 2015 I switched jobs from A9 to Orbital Insight. With this move I went from primarily coding in C++
to primarily coding in python. My goal was to create python versions of useful C++ STL functions.
This side project was a great coding exercise that helped me learn more about python.

Example code:

```python
from stl4py import nth_element
arr = [8, 2, 3, 6, 7, 1, 9, 0, 4, 5]  # Shuffled values from 0-9
nth_element(arr, n=6)
# arr is now partitioned, such that the 6th index contains the value
# at that position if the array were fully sorted.
# Also everything before index 6 is less than that value
# and everything after index 6 is greater than that value.
print arr  # One possible output: [0, 2, 3, 4, 1, 5, 6, 8, 7, 9]
```

### iOS and Android Applications (2014)
_Real time camera filters_

I created a few different camera filter applications for [iOS](https://itunes.apple.com/us/developer/blink-tap-llc/id993383361) and [Android](https://play.google.com/store/apps/developer?id=Blink+Tap,+LLC).
(The apps perform better on IOS).
Here are some screenshots from the apps.

{% include figure.html image="/assets/mosaigram.jpeg" position="center" width="600px" height="400px" %}

{% include figure.html image="/assets/textography.jpeg" position="center" width="600px" height="400px" %}

{% include figure.html image="/assets/kaleidagram.jpeg" position="center" width="600px" height="400px" %}


### Baseball Augmented Reality (2011)

{% include figure.html image="/assets/baseball_ar.png" position="center" width="700px" height="450px" %}

This project involved overlaying baseball statistics within the live view of your camera phone.
The application attempts to find a best fit for the 4 base locations  in order to fit a homography of a pre-loaded baseball plane to the camera view.
After a best fit is found, the application performs frame-to-frame tracking to update the live view.
This was developed on the first Droid phone.

[Project PDF](https://openscholarship.wustl.edu/cgi/viewcontent.cgi?article=1071&context=cse_research)

{% include video.html id="VSEA5SqV4fM" %}


