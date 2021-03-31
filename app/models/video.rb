class Video < ApplicationRecord
    validates :title, presence: true

    has_one_attached :clip
    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes,
        foreign_key: :video_id,
        class_name: :Like,
        dependent: :destroy

end
