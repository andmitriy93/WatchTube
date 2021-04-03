class Api::LikesController < ApplicationController
  before_action :find_comment, only: [:create]
  helper_method :find_comment

  def create
      # @like = Like.new(user_id: current_user.id, comment_id: @comment.id, video_id: @comment.video_id)
      # if @like.save
      #   # render json: ['Like! It works!']
      #   render :show
      # else
      #   flash[:notice] = "Please like only once"
      # end
      @like = Like.new
      @like.user_id = current_user.id
      @like.comment_id = params[:id]
      unless @like.save
        flash[:errors] = @like.errors.full_messages
      end
      # render :show
  end


  def destroy
    # if !(already_liked?)
    #   flash[:notice] = "Cannot unlike"
    # else
    #   @like.destroy
    # end
    # render :show
    # # end
    @like = Like.find(params[:id])
    @like.destroy
    # render :show
  end


  # private

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
