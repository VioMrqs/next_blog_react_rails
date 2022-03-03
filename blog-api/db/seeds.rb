require 'faker'

Post.destroy_all
User.destroy_all

john = User.create(
  email: "test@test.com",
  password: "121212",
  alias: "test",
  name: "john"
)

10.times do
user = User.create(
  email: Faker::Internet.email,
  password: "121212",
  alias: Faker::Hipster.word,
  name: Faker::Games::Dota.hero
)
  end

30.times do
    post = Post.create(
      title: Faker::Music::Hiphop.artist,
      content: Faker::Quote.famous_last_words,
      user: User.all.sample,
      image_url: Faker::LoremFlickr.image
    )
  end