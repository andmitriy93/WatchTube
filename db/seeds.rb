# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all


demo = User.create!({
    username: 'Demo User',
    email: 'user_demo@gmail.com',
    password: '12345678'
    })

video1 = Video.create(title: 'marvel trailer', author_id: demo.id)
video2 = Video.create(title: 'another marver clip', author_id: demo.id)
video3 = Video.create(title: 'Thor vs Hulk', author_id: demo.id)
video4 = Video.create(title: 'Marvel2', author_id: demo.id)
video5 = Video.create(title: 'Avengers', author_id: demo.id)
video6 = Video.create(title: 'John Wick1', author_id: demo.id)
video7 = Video.create(title: 'Dota', author_id: demo.id)


file1 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/yhoS5zG6LU23yDK2HB5Fcp1o')
file2 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/xFH8YX6dCaLBcpYc8YupuJTV')
file3 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/SaxbtM4eZ6YFAJtn19RKDU7P')
file4 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/QGnARZ9BBv85CQVqjYzXEJqt')
file5 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/QDyDXPFqk7FveV1dmXJbjt2C')
file6 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/m2vcQziowJV8sMy3JEhtio5B')
file7 = open('https://youtube-clone-dev.s3-us-west-1.amazonaws.com/DtcAkqktzUiFfGENdxBucr38')

video1.clip.attach(io: file1, filename: 'video1.mp4')
video2.clip.attach(io: file2, filename: 'video2.mp4')
video3.clip.attach(io: file3, filename: 'video3.mp4')
video4.clip.attach(io: file4, filename: 'video4.mp4')
video5.clip.attach(io: file5, filename: 'video5.mp4')
video6.clip.attach(io: file6, filename: 'video6.mp4')
video7.clip.attach(io: file7, filename: 'video7.mp4')

# demo = User.create!({
#     username: 'Demo User',
#     email: 'user_demo@gmail.com',
#     password: '12345678'
# })


# file1 = File.open('/Users/dmitriian/Desktop/src/videoplayback.mp4')
# file2 = File.open("/Users/dmitriian/Desktop/src/marvel.mp4")
# file3 = File.open('/Users/dmitriian/Desktop/src/videoplayback (1).mp4')
# file4 = File.open('/Users/dmitriian/Desktop/src/marvel2.mp4')
# file5 = File.open('/Users/dmitriian/Desktop/src/avengers.mp4')
# file6 = File.open('/Users/dmitriian/Desktop/src/john_wick1.mp4')
# file7 = File.open('/Users/dmitriian/Desktop/src/dota.mp4')

# video1.clip.attach(io: file1, filename: 'marvel.mp4')
# video2.clip.attach(io: file2, filename: 'another marvel')
# video3.clip.attach(io: file3, filename: 'Thor vs Hulk')
# video4.clip.attach(io: file4, filename: 'marvel2.mp4')
# video5.clip.attach(io: file5, filename: 'avengers.mp4')
# video6.clip.attach(io: file6, filename: 'john_wick1.mp4')
# video7.clip.attach(io: file7, filename: 'dota.mp4')


