class Api::LikesController < ApplicationController
  # before_action :find_comment, only: [:create]
  # helper_method :find_comment

  def create
      # debugger
      # @like = Like.new(user_id: current_user.id, comment_id: params[:like][:comment_id])
      @like = Like.new(like_params)
      if @like.save
        render :show
      else
        flash[:errors] = @like.errors.full_messages
      end
  end

  def index
    @likes = Like.all
    render :index
  end


  def destroy
    # debugger
    @like = Like.find_by(id: params[:id])
    @user = current_user
    if @like && @like.user_id == @user.id
      @like.destroy
      render :show
    else
      render ["You can't dislike"]
    end
  end


  private

  def like_params
    params.require(:like).permit(:user_id, :comment_id)
  end

  # def find_comment
  #   # debugger
  #   @comment = Comment.find(params[:comment_id])
  # end

  # def find_like
  #   # debugger
  #   @like = @comment.likes.find(params[:id])
  # end

  # def already_liked?
  #   Like.where(user_id: current_user.id, comment_id: params[:comment_id], video_id: params[:video_id]).exists?
  # end

end
