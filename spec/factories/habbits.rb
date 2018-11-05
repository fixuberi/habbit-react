FactoryBot.define do
  factory :habbit do
    name {Faker::Lorem.word}

    factory :habbit_with_executions do
      transient do
        exucutions_count 1
      end

      after(:create) do |habbit, evaluator|
        create_list(:execution, evaluator.executions_count,
                    habbit_id: habbit.id)
      end
    end
  end
end