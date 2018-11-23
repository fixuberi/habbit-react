Rails.application.routes.draw do
  resources :habbits do
    resources :executions
  end
  post '/auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
