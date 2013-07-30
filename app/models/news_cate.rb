class NewsCate < ActiveRecord::Base
  has_many :news_items
 
  after_save :expire_cate_cache

  def expire_cate_cache
    cache_index_path = File.join(Rails.root, 'public', 'index.html')
    cache_cate_path = File.join(Rails.root, 'public', 'news_cates', self.name + '.html')
    cache_cate_path2 = File.join(Rails.root, 'public', 'news_cates', self.id.to_s + '.html')
    FileUtils.rm_rf cache_index_path if File.exist?(cache_index_path)
    FileUtils.rm_rf cache_cate_path if File.exist?(cache_cate_path)
    FileUtils.rm_rf cache_cate_path2 if File.exist?(cache_cate_path2)
  end
end
