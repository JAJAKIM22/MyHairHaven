class Hairdresser < ApplicationRecord
    has_many :hairstyles
    has_many :appointments
    has_many :customers, through: :appointments
end
