class RemoveVideoIdToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :video_id, :integer
  end
end
