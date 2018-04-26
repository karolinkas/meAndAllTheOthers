# Me & all the others

## c9
1. Get an invitation to collaborate on github and accept it
2. Set up new workspace from exisiting git source - https://docs.c9.io/docs/create-a-workspace. Use the 'Git source' approach as specified.
3. Connect and push to github - once step 2 has set up the workspace in the bash terminal write:
 a) git init 
 b) (make some change)
 c) git add .
 d) git commit -m "first commit" 
 e) git remote add origin https://github.com/karolinkas/meAndAllTheOthers.git
 f) git push

## Set up locally
1. grab the clone/download from https://github.com/karolinkas/meAndAllTheOthers
2. in terminal, cd to the folder where you want to keep your project
3. git clone https://github.com/karolinkas/meAndAllTheOthers.git
4. if you don't have this already, do
git config --global user.name "yourusername"
git config --global user.email "yourgithubemail"
5. git remote add upstream https://github.com/karolinkas/meAndAllTheOthers.git
6. git checkout -b your-new-branch
7. (make change, add . , commit -m "message")
8. first time: git push --set-upstream origin your-new-branch
9. usually: git push


## During development:
To start the whole app (node backend and React client) 
```
yarn dev
```
Find it in:
http://localhost:3000/ 

Turn it into oldschool JS:
```
yarn build
```

To run tests: 
 ```
 yarn test
 ```

## Objectives:
“Me & all the others” is a platform that helps to start a fight against domestic
violence. At first it is addressing dangerous misconceptions that
cause women to stay in relationships that are affected by violence without
even recognising the actual issue. By talking about the different forms of
violence, like psychological violence, verbal violence and physical violence
the platform raises awareness of the different forms that are hard to identify,
especially in the context of a relationship or family that should ideally
create a caring and loving surrounding.
Another main functionality of the platform/application is to allow the user
to create a personal narrative of experiences that could resemble a journal
or diary to avoid typical symptoms that individuals that are suffering from
violence or other traumatic experiences are experiencing: the loss of remembrance
that prevents them from being able to react accordingly. Also
collecting a record of incidences can help users to evaluate the gravity of
their situation to understand that they need to take action for the sake of
their own safety and health.
One the most important aims of the platform though is to (also anonymously)
share personal experiences with other users that have experienced
similar situations, which offers different insights than a scientific rather informational
part of the platform. It allows them to read through entries and
stories of victims and former victims of violence to be able to see common
patterns like extreme jealousy, isolation and manipulation that just increases
throughout the relationship and can not be resolved by a couple. Next
to that users can give practical advice on how to abstain relapses that are a
common problem that should not be neglected since leaving a destructive
partnership is only the first step that should be followed by the process of
healing. The exchange with others can help to counter feelings of shame,
alienation and fears that keep woman from opening up about their situation
in front of friends and families. Using an anonymous platform can therefore
be a starting point to escape.
Many woman that are relieved and proud of having found a way out of their
violent partnership feel the need to help others and are able to share their
knowledge and give direct advice also through private messages or even
moderating one of the rooms of the forum that cover different topics.
On the side the platform can also provide first contacts to professionals that
offer legal or psychological support. Especially in family constellations the
organisational effort can be overwhelming and help from outside is needed
to end the drama. Additional materials on the topic and literature can be
accessed through the platform. Especially the informative part of the site
can be accessed by all visitors, others have to be logged in to write entries,
allowing different levels of support. Next to that there will be info graphics
visualising recent statistics about incidents that clarify how common
domestic violence actually is. The information section can also other offer
information for men who are aware of the problem and are interested in
defining their own roles in society more clearly.

