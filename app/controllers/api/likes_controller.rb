class Api::LikesController < ApplicationController

  def create
      @like = Like.new(user_id: current_user.id, comment_id: params[:commentId])
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
    @like = Like.find_by(id: params[:id])
    @user = current_user
    if @like && @like.user_id == @user.id
      @like.destroy
      render :show
    else
      render json: 'Error! could not find like'
    end
  end


  private

  def like_params
    params.require(:like).permit(:user_id, :comment_id)
  end

end
