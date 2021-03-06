class NewsItem < ActiveRecord::Base
  belongs_to :news_cate

  after_save :expire_cache
  after_create :expire_cate_cache

  def self.recent(count, cate = 0, image = false)
  	conditions = cate > 0 ? "news_cate_id = #{cate}" : "true"
  	conditions += " AND image_path IS NOT NULL" if image
    NewsItem.where(conditions).order("updated_at DESC").limit(count)
  end

  #if id = 1 return 1..9
  #if id = 5 return 1..10
  #if id = 7 return 2..12
  def self.recent_related(id)
    low = id > 5 ? id-4 : 1
    height = id > 10 ? id + 5 : id + (10 - id)
    NewsItem.where("id in(#{(low..height).to_a.join(',')})").order("updated_at DESC")
  end

  def expire_cache
    cache_path = File.join(Rails.root, 'public', 'news_items', self.id.to_s + '.html')
    FileUtils.rm_rf cache_path if File.exist?(cache_path)
  end

  def expire_cate_cache
    cache_index_path = File.join(Rails.root, 'public', 'index.html')
    cache_cate_path = File.join(Rails.root, 'public', 'news_cates', self.news_cate.name + '.html')
    cache_cate_path2 = File.join(Rails.root, 'public', 'news_cates', self.id.to_s + '.html')
    FileUtils.rm_rf cache_index_path if File.exist?(cache_index_path)
    FileUtils.rm_rf cache_cate_path if File.exist?(cache_cate_path)
    FileUtils.rm_rf cache_cate_path2 if File.exist?(cache_cate_path2)
  end
  
end