class LikesController < ApplicationController
  before_action :find_comment

  def create
    @comment.likes.create(user_id: current_user.id)
    render :show
  end

  private

  def find_comment
    @comment = Comment.find(params[:comment_id])
  end

end
