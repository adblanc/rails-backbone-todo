# README

This is a **beginner** rails project, I first followed [this tutorial](https://www.youtube.com/watch?v=QojnRc7SS9o) and modified things to adapt it to the frontend part.

# Getting started

I guess you need to `bundle install` inside the directory and then run the server using `rails s`.



# How I got this running....

I first installed ruby (2.7.0) and rails (6.0.3.4).
I already had postgresql (10.14) installed.

Then I used `rails new directory_name --api --database=postgresql` to bootstrap this directory with everything I needed to make a rails API app connected to a PostgreSQL db.

Make sure to `sh bundle install` in the directory everytime you add or remove gems to your Gemfile.

We can already launch our development server using `rails s` and check that it's working at `localhost:3000`.

I then used `rails generate model Todo title:string completed:boolean` to create my Todo model.

In order to create my postgreSQL databases, I ran `rails db:setup` followed by `rails db:migrate` to run the sql migrations and therefore create the tables needed (todos here).

To initially populate my db with some fake data during development, I added [Faker gem](https://github.com/faker-ruby/faker) to my Gemfile under :development group and created a simple loop inside `/db/seeds.rb`.

We can then use `rails db:seed` to populate the db.

# Serving our data

Inside `config/routes.db` I declared my todos resources under api and v1 namespace, allowing me to make request to `http://localhost:3000/api/v1/todos.`

Running `rails routes` will display current server routes and show related controller action.

Therefore I create my controller file under `app/controllers/api/v1/todos_controller.rb`.

Methods of the controller follow those described in the routes command, therefore index is used for the get request on the root, create for the post, update for put, etc.....

I used [Jbuilder gem](https://github.com/rails/jbuilder) to build my json, creating .jbuilder files inside `app/views/api/v1/todos`, one file for every controller action and one `_todo.jbuilder` file that serves as "partial" json (I'd say it's like a template or a Fragment in GraphQL) and is reusable.

# Cors issues

Requests from the frontend raised some cors errors as Cross-Origin headers were missing, managed to fix it adding [Rake Cors Gem](https://github.com/cyu/rack-cors) and uncommenting config/initializers/cors.rb content and modifying the origins property.
