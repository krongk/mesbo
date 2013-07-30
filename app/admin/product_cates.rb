#encoding: utf-8
ActiveAdmin.register ProductCate do
  menu :label => '洗涤产品'
  menu :label => "产品分类", :parent => "洗涤产品"
end
