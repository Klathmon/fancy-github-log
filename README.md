Fancy github log

Extreme WIP!

Will hopefully eventually be like the "network" section of github (or like `git log`), but fancier!

Type in the full `username/repository` of the (public) github repo you want to see a log of, and hit "submit". you can scroll to zoom in/out of the graph, and click+drag the screen around to pan around. Clicking on a node brings you to that commit on GitHub. 


Gotchas:

* It only grabs the last 30 or so commits (until oauth is added, the API rate limits are super low)
* there's no validation on the repo field (so don't break things!)
* It's a terrible git log... I'd need to spend another hour or 2 just reading up on the graphing library i'm using to correctly understand how to get the nodes to work the way I want
*
