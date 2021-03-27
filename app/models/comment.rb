class Comment < ApplicationRecord
  belongs_to :video,
    class_name: :Video
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
  
end