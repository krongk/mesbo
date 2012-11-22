module ProductItemsHelper

  def get_product_image_path(product_item)
    product_item.nil? ?  asset_path("product.jpg") : product_item.image_path
  end
end
