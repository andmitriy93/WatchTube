class Comment < ApplicationRecord
  belongs_to :video,
    foreign_key: :author_id,
    class_name: :Video
  
  belongs_to :author,
    class_name: :User
  
end