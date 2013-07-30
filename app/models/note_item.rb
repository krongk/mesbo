class NoteItem < ActiveRecord::Base
  belongs_to :note_cate
  belongs_to :region
  belongs_to :city
  belongs_to :district

  def self.recent(count, cate = 0, image = false)
    conditions = cate > 0 ? "note_cate_id = #{cate}" : "true"
    conditions += " AND image IS NOT NULL" if image
    NoteItem.where(:is_deleted => false).where(conditions).order("updated_at DESC").limit(count)
  end
end
