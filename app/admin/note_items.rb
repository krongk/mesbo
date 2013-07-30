#encoding: utf-8
ActiveAdmin.register NoteItem do
  menu :label => "信息内容", :parent => "分类信息"

  index do 
    column :id
    column :title do |item|
      link_to item.title || '<空>', admin_note_item_path(item)
    end
    column :description do |item|
      strip_tags(item.description).truncate(100) unless item.description.blank?
    end
    column :contact_name 
    column :admin_password
    column :is_checked
    column :is_deleted
    column :updated_at
    default_actions
  end

end
