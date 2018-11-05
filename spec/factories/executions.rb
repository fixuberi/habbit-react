FactoryBot.define do
  factory :execution do
    date {Date.now}
    association :habbit, factory: :habbit
  end
end