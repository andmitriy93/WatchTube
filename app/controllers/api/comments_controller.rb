class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :index
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  def update

  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @user = current_user
    if @comment && @comment.author_id == @user.id
      @comment.destroy
      @comments = Comment.all
      render :index
    else
      render ['Could not find comment']
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :video_id, :body)
  end

end
