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

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

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
# video6 = Video.create(title: 'John Wick1', author_id: demo.id)
# video7 = Video.create(title: 'Dota', author_id: demo.id)



file1 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/dota.mp4')
file2 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/john_wick1.mp4')
file3 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/marvel.mp4')
file4 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/marvel2.mp4')
file5 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/videoplayback.mp4')
# file6 = open('')
# file7 = open('')



video1.clip.attach(io: file1, filename: 'video1.mp4')
video2.clip.attach(io: file2, filename: 'video2.mp4')
video3.clip.attach(io: file3, filename: 'video3.mp4')
video4.clip.attach(io: file4, filename: 'video4.mp4')
video5.clip.attach(io: file5, filename: 'video5.mp4')
# video6.clip.attach(io: file6, filename: 'video6.mp4')
# video7.clip.attach(io: file7, filename: 'video7.mp4')

