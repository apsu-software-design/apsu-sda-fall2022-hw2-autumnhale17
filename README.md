# The Gathering Manager

This repo contains code for a command-line application to manage events (called "Gatherings" in the code), created as part of an assignment for CSCI 4602 at Austin Peay State University.

The below questions should be answered _in detail_ regarding your submission!

##### Reflect on how you determined the architecture of your application. What process did you use to determine which classes to define? #####
> To define classes, I looked for the primary nouns in the prompt given and what they would have to do, as well as what properties they had. Although I did not exactly map out the architecture great in assignment 1, assignment 2 helped me see the mistakes I made in assignment 1- /but/, the classes were pretty much the same in both.



##### Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Only lots of help from Dr. Church! I greatly appreciated the time he spent helping me with this assignment and issues I had during it, even outside of typical office hours. Other than that, no help from anyone. 


##### Approximately how many hours did it take you to complete this assignment? #####
> Writing and revising /everything/, maybe 5 hours. Debugging, looking online for explainations on TS, office hours, and testing (not actual testing, just throwing in values and making sure they work), maybe 4 hours. Total, probably 9-10 hours. 

> But, I was having an issue I could not figure out early on where the TS was not auto-compiling to JS, and it threw me off because I wasn't sure why things weren't working. After that, it only took 2 hours maybe, but the rest took like 8. 


##### On a scale of 1 (too easy) to 10 (too challenging), how difficult was this assignment? #####
> I would say that the programming, logic, and organization of it all was maybe 6, especially since I have done projects like this before. Also, assignment 1 helped and gave me more time to think through how I would organize and approach it all. 

> Because I had issues that took extra time to complete (noted above), I would bump this up to maybe a 7.5. The TS to JS issue was a headache, because I didn't know exactly what the issue was and my code looked (mostly) good to go as if it would work. I spent a lot of time looking for issues that weren't that primary issue. 

> Short answer: 7.5.


##### Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> Already noted above. 

> One other thing, I added some code in UI.ts in showListGatheringMembersMenu to check if members is undefined before showing any output regarding it. If that's left out, and the user/student goes to select option #7, then proceeds to put in a gathering name that does not exist, an error is thrown. I almost went down a rabbit hole in my own code to catch this possibility, but I /believe/ that the check I added in UI.ts is OK. 

