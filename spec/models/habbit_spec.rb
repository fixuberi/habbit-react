require 'rails_helper'

RSpec.describe Habbit, type: :model do
  it { should have_many(:executions).dependent(:destroy) }

  it { should validate_presence_of(:name) }
end
