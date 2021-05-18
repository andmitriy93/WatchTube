
require 'open-uri'

# Like.destroy_all
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

video1 = Video.create(title: 'Dota trailer', author_id: demo.id)
video2 = Video.create(title: 'John Wick', author_id: demo.id)
video3 = Video.create(title: 'Marvel', author_id: demo.id)
video4 = Video.create(title: 'Marvel Trailer', author_id: demo.id)
video5 = Video.create(title: 'Avengers', author_id: demo.id)
video6 = Video.create(title: 'Aquaman', author_id: demo.id)
video7 = Video.create(title: 'Cobe', author_id: demo.id)
video8 = Video.create(title: '1 minute of Italy', author_id: demo.id)
video9 = Video.create(title: 'Interstellar', author_id: demo.id)
video10 = Video.create(title: 'Lion King Song', author_id: demo.id)
video11 = Video.create(title: 'Logan', author_id: demo.id)
video12 = Video.create(title: 'Meditation', author_id: demo.id)
video13 = Video.create(title: 'Messi', author_id: demo.id)
video14 = Video.create(title: 'Most Popular Songs 2020', author_id: demo.id)
video15 = Video.create(title: 'Motivation', author_id: demo.id)
video16 = Video.create(title: 'Story in 1 Minute', author_id: demo.id)
video17 = Video.create(title: 'Pixar Soul', author_id: demo.id)
video18 = Video.create(title: 'React', author_id: demo.id)
video19 = Video.create(title: 'Ronaldo', author_id: demo.id)
video20 = Video.create(title: 'Spongo Bob', author_id: demo.id)
video21 = Video.create(title: 'Taki Taki', author_id: demo.id)
video22 = Video.create(title: 'vic kris suitcase', author_id: demo.id)



file1 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/dota.mp4')
file2 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/john_wick1.mp4')
file3 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/marvel.mp4')
file4 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/marvel2.mp4')
file5 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/videoplayback.mp4')
file6 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/aquaman.mp4')
file7 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/cobe.mp4')
file8 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Denni+Bulli+1+minue+of+ITALY.mp4')
file9 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/interstellar.mp4')
file10 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Lion+King+Song.mp4')
file11 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/logan.mp4')
file12 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/meditation.mp4')
file13 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/messi.mp4')
file14 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/most+popular+songs+2020.mp4')
file15 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/motivation.mp4')
file16 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Our+story+in+1+Minute.mp4')
file17 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/Pixar+Soul.mp4')
file18 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/react.mp4')
file19 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/ronaldo.mp4')
file20 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/sponge+bob.mp4')
file21 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/TAKI+TAKI+-+DJ+Snake+ft.+Ozuna%2C+Cardi+B%2C+Selena+Gomez+Dance+Video+%7C+Namit+Chhajed+Choreography.mp4')
file22 = open('https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/vic+kris+-+suitcase.mp4')



video1.clip.attach(io: file1, filename: 'video1.mp4')
video2.clip.attach(io: file2, filename: 'video2.mp4')
video3.clip.attach(io: file3, filename: 'video3.mp4')
video4.clip.attach(io: file4, filename: 'video4.mp4')
video5.clip.attach(io: file5, filename: 'video5.mp4')
video6.clip.attach(io: file6, filename: 'video6.mp4')
video7.clip.attach(io: file7, filename: 'video7.mp4')
video8.clip.attach(io: file8, filename: 'video8.mp4')
video9.clip.attach(io: file9, filename: 'video9.mp4')
video10.clip.attach(io: file10, filename: 'video10.mp4')
video11.clip.attach(io: file11, filename: 'video11.mp4')
video12.clip.attach(io: file12, filename: 'video12.mp4')
video13.clip.attach(io: file13, filename: 'video13.mp4')
video14.clip.attach(io: file14, filename: 'video14.mp4')
video15.clip.attach(io: file15, filename: 'video15.mp4')
video16.clip.attach(io: file16, filename: 'video16.mp4')
video17.clip.attach(io: file17, filename: 'video17.mp4')
video18.clip.attach(io: file18, filename: 'video18.mp4')
video19.clip.attach(io: file19, filename: 'video19.mp4')
video20.clip.attach(io: file20, filename: 'video20.mp4')
video21.clip.attach(io: file21, filename: 'video21.mp4')
video22.clip.attach(io: file22, filename: 'video22.mp4')

