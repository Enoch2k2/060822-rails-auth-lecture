Rails.application.routes.draw do
  root to: "static#home"
  

  # user routes
  resources :users, only: [:index]

  post "/signup", to: "users#signup"
  post "/login", to: "auth#login"

  get "/logout", to: "auth#logout"

  get "/get-current-user", to: "auth#get_current_user"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
