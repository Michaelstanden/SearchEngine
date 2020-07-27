# Search engine using Serpstac API, Javascipt and JQuery
## In this repository I have used an API from Serpstac search engine type application to create a search engine of my own.
# Disclosures
Unfortunatley, because of Serpstac's pricing plan the application does not work. The basic free plan and no monthly subscription charge means I can access an API key.
However when running this on any site I am only allowed a HTTP request. Since GitHub works on HTTPS there is a cross browser compatability issue so the access is denied.
To allow access Serpstac charges users £30 a month subscription fee for the HTTPS request usage of their API. Since this is a learning experiment I did not want to pay £30 a month.
For the future I will look into a different API provider to see if I can find one for free entirely.

In this search engine users are able to define their own Query and enter it into the search bar. 
When pressing enter 10 results will be listed on the page listed horizontally. The results will have a title that will contain the text of the heading of the site.
Followed by a snippet of text underneath that will have some snippets picked from the webpage based on their search queries matching to the sites tags.
Finally it will be followed by the website name(link) underneath. The whole snippet, heading and link are all clickable and will open to the website on a new page.


## Technologies used.
Technologies used in this repoistroy are:
- HTML5 in the use of basic html structure using, ID's containers and Forms to create the search engine.
- Javascript. Vanilla Javascript was used to pick out components of the API and use these as variables to pass into the key components to help users search for what they need.
To define what each criteria was from what the API was asking for. I had to find these and evaluate them to enter blocks of Javascript to make the API relevant to my application.
- JQuery to help assist in picking out the elements in my HTML (such as my form) and linking them to be targetted aspects of Javascript and the API to be targeted.
- API. using Serpstac's API to create a search engine. Finding out what values they use and take and breaking those down to insert my own values to ensure my application runs the way I want it to.

