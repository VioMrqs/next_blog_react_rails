# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

Post.destroy_all
User.destroy_all

john = User.create(
  email: "sloth.doe@yopmail.com",
  password: "123456",
)

30.times do
    post = Post.create(
      title: Faker::Music::Hiphop.artist,
      content: Faker::Quote.famous_last_words,
      user: User.all.sample,
    )
  end