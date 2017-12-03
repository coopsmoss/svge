# svge
Scalar Vector Graphics Extended

A java script preprocessor for extending SVG in the browser.
It allows javascript code to be embedded inside the svg

How to use it:

First, include our svge.js file in the header of your html

The, add the .svg file (using our extension) into your html code:

`<object id="svg_id" data="file.svg" type="image/svg+xml"></object>`

Then make a call to have your svge file processed (just give it the id of the object):

`<script> processSVGE("svg1"); </script>`

Note, variables declared in svge are declared globaly in your javascript so take care to avoid conflicts, I recomend starting all your variables with a _ as a naming convention.

Example:
A cirlce with a line drawn to the outside:

~~~~
<var name="X" value="100"/>
	<var name="Y" value="100"/>
	<var name="R" value="30 + Math.random()*50"/>
	<var name="theta" value="-60"/>

	<circle cx="X" cy="Y" r="R" stroke="black" stroke-width="3" fill="red" />

	<line
	   x1="X"
	   y1="Y"
	   x2="X + R * Math.cos(theta)"
	   y2="Y + R * Math.sin(theta)"
	   style="stroke:rgb(0,0,0);stroke-width:2" />
~~~~

The advantage of this is you can cahnge the values of the variable and the line will always draw to the edge of the circle because it does its own trig

You can see more examples [here](http://coppermoose.design/svge/) (notice the circel at the bottom changes size when you refresh the page because it makes a Math.ranndom() call)
