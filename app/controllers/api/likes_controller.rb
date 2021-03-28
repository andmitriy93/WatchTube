class LikesController < ApplicationController
  before_action :find_comment, :find_like, only: [:destroy]

  def create
    if already_liked?
      flash[:notice] = "You can't like more than once"
    else
      @comment.likes.create(user_id: current_user.id)
    end
    render :show
  end

  def destroy
    if !(already_liked?)
      flash[:notice] = "Cannot unlike"
    else
      @like.destroy
    end
    render :show
  end

  private

  def find_comment
    @comment = Comment.find(params[:comment_id])
  end

  def find_like
    @like = @comment.likes.find(params[:id])
  end

  def already_liked?
    Like.where(user_id: current_user.id, comment_id: params[:comment_id]).exists?
  end

end
