Rails.application.routes.draw do
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  resources :users
  get "/profile" => "users#profile"
  resources :monsters
end
