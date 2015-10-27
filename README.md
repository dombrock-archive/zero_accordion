# zero_accordion
Easy to implement accordion that does not use jQueryUI.

This is very similar to the jQueryUI 'Accordion' function.  If you are already using jQueryUI in your project then there is probably no need for this. However it is very easy to implement and troubleshoot, and the code should be fully understandable to anyone with an intermediate knowledge of  jQuery. 

To get started you must make sure you are using jQuery on your page. You can do that like this:

````html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
````

After this line you may wish to include the CSS file I have designed to go with this project. While this file is optional, it will make the accordion menus work better and does not contain much actual styling. You can include it like this (Make sure you choose the right path for it):

````html
<link rel="stylesheet" type="text/css" href="CSS/Zacc.css" />
````

The basic syntax for creating a new accordion element is this:

````html
<div class="Zacc">
  <div class="Zacc_title">Your Title</div>
  <div class="Zacc_text">
    Your text here. 
  </div>
</div>
````

This code will create a basic accordion element. You can repeat this as many times as you like on your page. The only thing you will need to change is the text "Your Title" and "Your text here."

If you would like one or more elements of your accordion to be open/expanded by default then you should add the class "````Zacc_init````" to your text div. For example, the above title, set to open by default would look like this:

````html
<div class="Zacc">
  <div class="Zacc_title">Your Title</div>
  <div class="Zacc_text Zacc_init">
    Your text here.
  </div>
</div>
````

To actually get this markup to do what we want we will need to add the script ````Zacc.js````. You can add it like this:

````html
<script src="JS/Zacc.js"></script>
````

NOTE: Make sure the script is in the correct path and that this script reference comes AFTER all of the accordion elements. 




