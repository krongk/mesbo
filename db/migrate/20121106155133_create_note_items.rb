class CreateNoteItems < ActiveRecord::Migration
  def change
    create_table :note_items do |t|
      t.references :note_cate
      t.references :region
      t.references :city
      t.references :district
      t.string :address
      t.string :title
      t.text :description
      t.string :contact_name
      t.string :contact_phone
      t.string :contact_email
      t.string :contact_qq
      t.string :contact_other
      t.image  :string
      t.string :admin_password
      t.boolean :is_checked
      t.string :is_deleted
      t.integer :level_count

      t.timestamps
    end
    add_index :note_items, :note_cate_id
    add_index :note_items, :region_id
    add_index :note_items, :city_id
    add_index :note_items, :district_id
  end
end
