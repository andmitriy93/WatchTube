Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users
    resource :session, only: [:create, :destroy, :show]
  end
  resources :videos, only: :show

  root to: "static_pages#root"
end


# namespace :api, defaults: {format: :json} do 
#   resources :videos, only: [:create, :index]
# end
