class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end


  def create
    @comment = Comment.new(author_id: current_user.id, video_id: params[:comment][:video_id], body: params[:comment][:body])
    # @comment = Comment.new(comment_params)

    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
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
    params.require(:comment).permit(:body, :video_id) #add video_id
  end

end
