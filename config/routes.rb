Rails.application.routes.draw do
  resources :habbits do
    resources :executions
  end
end
