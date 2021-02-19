class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
          params[:user][:username],
          params[:user][:password])

        if @user
          login(@user)
          render "api/users/show"
        else
          render json: ["Enter username and password"], status: 401
        end
    end

    def show
      @user = User.find_by(id: params[:id])
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
