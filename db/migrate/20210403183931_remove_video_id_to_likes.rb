class RemoveVideoIdToLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :video_id
  end
end
