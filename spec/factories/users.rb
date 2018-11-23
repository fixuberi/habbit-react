FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "test#{n}" }
    sequence(:email) { |n| "test#{n}@email.com" }
    password_digest '123456'
    password '123456'
  end
end