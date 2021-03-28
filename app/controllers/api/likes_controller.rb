class LikesController < ApplicationController
  before_action :find_comment

  def create
    if already_liked?
      flash[:notice] = "You can't like more than once"
    else
      @comment.likes.create(user_id: current_user.id)
    end
    render :show
  end

  private

  def find_comment
    @comment = Comment.find(params[:comment_id])
  end

  def already_liked?
    Like.where(user_id: current_user.id, comment_id: params[:comment_id]).exists?
  end

end
