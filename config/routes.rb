Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :videos, only: [:index, :show]
  end

  root to: "static_pages#root"
end


# namespace :api, defaults: {format: :json} do 
#   resources :videos, only: [:create, :index]
# end
