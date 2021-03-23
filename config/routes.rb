Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users do
      resources :comments, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
    resources :comments, only: [:create, :destroy, :show, :edit, :update]
  end

  root to: "static_pages#root"
end


# namespace :api, defaults: {format: :json} do 
#   resources :videos, only: [:create, :index]
# end
