# README WatchTube app
  > This is a YouTube clone created with Ruby on Rails, JS, React and Redux

### Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Live demo](https://youtuubee.herokuapp.com/?#/)
* [Features](#features)
* [Status](#setup)

### General info
 WatchTube is an online video-sharing platform. YouTuubee allows you to create an account, login, put like and leave comments on videos, search 
 a specific video

### Technologies
 * JavaScript
 * React
 * Redux
 * Rails 5

### Setup
To run this project, install it locally using commands: <br />
`$ npm install` <br />
`$ npm start` to run frontend components <br />

![npm start](https://github.com/andmitriy93/Fullstack_Project_Youtube/blob/main/screenshots/Screen%20Shot%202021-02-20%20at%201.35.00%20AM.png) 


Then use commmand for rails: <br />
`$ bundle install` to install all necessary gems and after that `$ bundle exec rails db:setup` to setup database. <br />
Finally run the server with `$ rails s` command. Make sure all this commands run inside of the project folder!

![rails server](https://github.com/andmitriy93/Fullstack_Project_Youtube/blob/main/screenshots/Screen%20Shot%202021-02-20%20at%201.35.29%20AM.png)

### Live demo
You can check live demo. Click on this link [Live demo](https://youtuubee.herokuapp.com/?#/)


### Features
List of features ready and TODOs for future development:
<br />
I have used two separed forms for sign in and sign up, to do that i have used React-redux library
* Create a new user account - Signup form for new users

In order to create a new user account you are reequired to fill in all fields(username, password and email)
![signup form](https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2021-03-31+at+7.55.12+PM.png)

* Login to existing account - Login form for users that already signed up

  If you already have created an account, you can login. Otherwise click on the link to Create a new account
  ![login page](https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2021-03-31+at+8.49.21+PM.png)
  
* Logout
* Write comments under videos
  This feature to create comments is available only for logged in users
![comments-form](https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2021-04-03+at+2.06.10+AM.png)

* Like/dislike comments
  User can like or dislike(if already liked) comments. This feature also available only for logged in users.
![like/dislike](https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2021-04-03+at+2.06.10+AM.png)

* Search videos
  Users can search videos that they want to watch
  ![search videos](https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Screen+Shot+2021-04-10+at+12.29.45+AM.png)

To-do list:
* Logged user can edit or delete their own comments
* Logged user can upload videos
* VIdeo show page with all uploaded videos, comments and likes


### Status
Project is: _in progress_


