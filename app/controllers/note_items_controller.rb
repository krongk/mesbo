#encoding: utf-8
class NoteItemsController < InheritedResources::Base
  before_filter :authenticate_admin_user!, :only => [:destroy]

  def index
    @note_cates = NoteCate.all
    #for search
    if params[:q]
      @note_items = NoteItem.where(:is_deleted => false).where("title like '%#{params[:q]}%'").paginate :note_item => params[:note_item] || 1, :per_note_item => 20, :order => 'updated_at DESC'
    else
      @note_items = NoteItem.where(:is_deleted => false).paginate :note_item => params[:note_item] || 1, :per_note_item => 20, :order => 'updated_at DESC'
    end
  end

  def show
    @note_item = NoteItem.find_by_id(params[:id] || 1)
  end

  # POST /note_items
  # POST /note_items.json
  def create
    params[:note_item][:note_cate] = NoteCate.find(params[:note_item][:note_cate].to_i)
    @note_item = NoteItem.new(params[:note_item])

    respond_to do |format|
      if @note_item.save
        format.html { redirect_to @note_item, notice: '您的信息添加成功.' }
        format.json { render json: @note_item, status: :created, location: @note_item }
      else
        format.html { render action: "new" }
        format.json { render json: @note_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /note_items/1
  # PUT /note_items/1.json
  def update
    @note_item = NoteItem.find(params[:id])

    respond_to do |format|
      if @note_item.update_attributes(params[:note_item])
        format.html { redirect_to @note_item, notice: 'NoteItem was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @note_item.errors, status: :unprocessable_entity }
      end
    end
  end
end
