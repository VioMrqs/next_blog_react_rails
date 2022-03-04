require 'faker'

images = ["https://images.rtl.fr/~c/770v513/rtl/www/1491882-vladimir-poutine-le-18-fevrier-2022.jpg", "https://www.leparisien.fr/resizer/GMMaWUY51jCZWSvV5POB0kKOQ5M=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/XOOQP4RK5VAMRHRZFTWWS7DVTI.jpg", "https://www.leparisien.fr/resizer/7V1mP8-9bDbjJzGlhC_JjD91--U=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Q25GOKM3NRD5RPD76DKH7GWXKA.jpg", "https://www.gala.fr/imgre/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgal.2F2022.2F02.2F17.2F9d804f66-2c75-48b9-956d-6428a882769c.2Ejpeg/1200x499/crop-from/top/focus-point/3750%2C2524/il-a-une-tete-de-rat-nicolas-sarkozy-se-lache-en-prive-sur-eric-zemmour.jpg", "https://photos.tf1info.fr/images/700/700/bernard-madoff-541cae-0@1x.jpeg", "https://trends.levif.be/medias/13902/7117953.jpg", "https://pbs.twimg.com/profile_images/1864494810/Victor-Lustig-20657385-2-402_400x400.jpg"]

Comment.destroy_all
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

40.times do
  post = Post.create(
    title: Faker::Music::Hiphop.artist,
    content: Faker::Quote.famous_last_words,
    user: User.all.sample,
    image_url: images.sample
  )
end

50.times do
  comment = Comment.create(
    content: Faker::ChuckNorris.fact,
    user: User.all.sample,
    post: Post.all.sample
  )
end