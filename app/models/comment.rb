class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :video,
    class_name: :Video
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  
  has_many :likes,
    foreign_key: :comment_id,
    class_name: :Like,
    dependent: :destroy
  
  has_many :likers,
    through: :likes,
    source: :user

end