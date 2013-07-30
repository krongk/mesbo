class NoteCate < ActiveRecord::Base
  has_many :note_items
end
