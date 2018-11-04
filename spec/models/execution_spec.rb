require 'rails_helper'

RSpec.describe Execution, type: :model do
  it { should belong_to(:habbit) }

  it { should validate_presence_of(:date) }
end
