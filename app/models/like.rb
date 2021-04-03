class Like < ApplicationRecord
  validates_uniqueness_of :comment_id, scope: :user_id
  validates :user_id, :comment_id, presence: true
  

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :comment,
    foreign_key: :comment_id,
    class_name: :Comment

end
