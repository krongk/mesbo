class CreateNoteCates < ActiveRecord::Migration
  def change
    create_table :note_cates do |t|
      t.string :name

      t.timestamps
    end
  end
end
