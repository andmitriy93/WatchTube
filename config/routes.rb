Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users do
      resources :comments, only: [:index]
    end

    # resources :comments do
    #   resources :likes, only: [:index]
    # end

    get '/videos/search', to: 'videos#search'

    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
    resources :comments, only: [:create, :index, :destroy, :show, :update]
    resources :likes, only: [:create, :destroy, :index]
    # delete '/likes', to: 'likes#destroy'
  end

  root to: "static_pages#root"
end


# namespace :api, defaults: {format: :json} do 
#   resources :videos, only: [:create, :index]
# end
