# A blog using React x Rails

## Goal : a class project

My first rails x react app _ Had a lot of fun doing it !

Made a back DB in a rails API, called by my react app.

Tried to do my best with validations and security.

![Posteur](/posteur.gif)

## Launch the project

### API
cd blog-api
bundle install
rails db:create
rails db:migrate
rails server

__warning : Launch on port 3000 pliz__

### Front

cd blog-front
npm install
start

## Features
- Users : sign up, sign in, sign out, update or delete your profile

- Post : post a funny article using our bank of images, update or delete it
__if connected__

- Comment : comment others people article
__if connected__

- Spend some minor times making a enough-to-go-with design, nothing crazy through (masonry grid, proud of my forms)

### To improve

- Alert my json render
- Admin and moderation dashboard
- Make my code DRYer
- Design and CSS... 🧐 Could definitely be nicer