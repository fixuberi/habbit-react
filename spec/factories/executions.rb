FactoryBot.define do
  factory :execution do
    date {DateTime.now}
    association :habbit, factory: :habbit
  end
end