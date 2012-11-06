require 'test_helper'

class NoteCatesControllerTest < ActionController::TestCase
  setup do
    @note_cate = note_cates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:note_cates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create note_cate" do
    assert_difference('NoteCate.count') do
      post :create, note_cate: @note_cate.attributes
    end

    assert_redirected_to note_cate_path(assigns(:note_cate))
  end

  test "should show note_cate" do
    get :show, id: @note_cate.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @note_cate.to_param
    assert_response :success
  end

  test "should update note_cate" do
    put :update, id: @note_cate.to_param, note_cate: @note_cate.attributes
    assert_redirected_to note_cate_path(assigns(:note_cate))
  end

  test "should destroy note_cate" do
    assert_difference('NoteCate.count', -1) do
      delete :destroy, id: @note_cate.to_param
    end

    assert_redirected_to note_cates_path
  end
end
