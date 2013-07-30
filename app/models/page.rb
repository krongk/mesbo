class Page < ActiveRecord::Base
  after_save :expire_cache

  def expire_cache
    cache_path = File.join(Rails.root, 'public', 'pages', self.id.to_s + '.html')
    FileUtils.rm_rf cache_path if File.exist?(cache_path)

    cache_path_name = File.join(Rails.root, 'public', 'pages', self.path_name + '.html')
    FileUtils.rm_rf cache_path_name if File.exist?(cache_path_name)
  end

end
