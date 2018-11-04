class Execution < ApplicationRecord
  belongs_to :habbit

  validates :date, presence: true
end
