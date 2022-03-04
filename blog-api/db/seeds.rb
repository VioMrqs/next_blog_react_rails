require 'faker'

images = ["https://images.rtl.fr/~c/770v513/rtl/www/1491882-vladimir-poutine-le-18-fevrier-2022.jpg", "https://fyooyzbm.filerobot.com/v7/080_HL_TGRIMBERT_1039758-M3jOwq5a.jpg?vh=9405c4&ci_seal=60027d6515&w=480&h=382&gravity=auto&func=crop", "https://www.leparisien.fr/resizer/7V1mP8-9bDbjJzGlhC_JjD91--U=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q25GOKM3NRD5RPD76DKH7GWXKA.jpg"]
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
      image_url: images.sample
    )
  end

30.times do
  comment = Comment.create(
    content: Faker::ChuckNorris.fact,
    user: User.all.sample,
    post: Post.all.sample
  )
end