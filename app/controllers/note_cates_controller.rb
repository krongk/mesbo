#encoding: utf-8
class NoteCatesController < InheritedResources::Base
  before_filter :authenticate_admin_user!, :except => [:index, :show]

  def show
    @note_cate = NoteCate.find_by_name(params[:name])
    @note_cate = NoteCate.find_by_id(params[:id]) if @note_cate.nil?
    if @note_cate.nil?
      render :partial => "/layouts/no_found_error", :locals =>{:message => "没有找到任何信息"}
      return
    end
    @note_items = @note_cate.note_items.where(:is_deleted => false).paginate :page => params[:page] || 1, :per_page => 30
  end
end
