class NoteItem < ActiveRecord::Base
  belongs_to :note_cate
  belongs_to :region
  belongs_to :city
  belongs_to :district
end
