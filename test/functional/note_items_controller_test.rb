require 'test_helper'

class NoteItemsControllerTest < ActionController::TestCase
  setup do
    @note_item = note_items(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:note_items)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create note_item" do
    assert_difference('NoteItem.count') do
      post :create, note_item: @note_item.attributes
    end

    assert_redirected_to note_item_path(assigns(:note_item))
  end

  test "should show note_item" do
    get :show, id: @note_item.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @note_item.to_param
    assert_response :success
  end

  test "should update note_item" do
    put :update, id: @note_item.to_param, note_item: @note_item.attributes
    assert_redirected_to note_item_path(assigns(:note_item))
  end

  test "should destroy note_item" do
    assert_difference('NoteItem.count', -1) do
      delete :destroy, id: @note_item.to_param
    end

    assert_redirected_to note_items_path
  end
end
