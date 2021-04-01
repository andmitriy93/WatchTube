class Like < ApplicationRecord
  validates_uniqueness_of :comment_id, scope: :user_id

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :comment,
    foreign_key: :comment_id,
    class_name: :Comment

  belongs_to :comment,
  foreign_key: :video_id,
  class_name: :Video

end
