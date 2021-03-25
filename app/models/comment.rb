class Comment < ApplicationRecord
  belongs_to :video,
    class_name: :Video
  
  belongs_to :author,
    class_name: :User
  
end