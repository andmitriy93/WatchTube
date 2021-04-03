class Api::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render :show
    end

    def index
        @videos = Video.all
        render :index
    end

    def search
        @videos = Video.where("title LIKE '%#{params[:videoTitle]}%'")
        render :index
    end
    
    private

    def video_params
        params.require(:video).permit(:title, :author_id)
    end
end
