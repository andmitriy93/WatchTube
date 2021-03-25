class Video < ApplicationRecord
    validates :title, presence: true

    has_many_attached :clip
    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

end
