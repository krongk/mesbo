#encoding: utf-8
# == Usage
# > ruby migrate_data.rb 
# this script use to migrate local data to common.
# steps:
# 1. check local db
#		 format contenet to huxun/wenba_post_format
# => 	 add column is_exported to xx_post_format
# 2. run migrater.rb 

$:.unshift(File.dirname(__FILE__))
require "rubygems"
require "local_tables"
require "common_tables"
require "pp"
require 'chinese_pinyin'

class Migrator
	def initialize
	end
  
  def run
		puts 'start post...'
		count = 0
		['MesboNote'].each do |klass|
			mod = eval "ForagerLocal::#{klass}"
			loop  do
				result = mod.where(:is_exported => 'n').limit(500)
				
				break if result.size == 0
			  result.each do |l_post|
				  migrate(mod, l_post)
			  end
		  end
		end
		puts 'done...'
	end

	def migrate(mod, l_post)
	  begin
	  	if ForagerCommon::NoteItem.find_by_external_path(l_post.original_url)
	  		mod.update(l_post.id, :is_exported => 'd-url')
	  		print 'dup '
	  		return
	  	end
	  	if ForagerCommon::NoteItem.find_by_title(l_post.title)
	  		mod.update(l_post.id, :is_exported => 'd-title')
	  		print 'dup '
	  		return
	  	end
	  	
	  	if l_post.description.nil?
	  	  mod.update(l_post.id, :is_exported => 'blank')
	  		print 'blank '
	  		return
	    end

		c_category              = ForagerCommon::NoteCate.find_or_create_by_name(l_post.note_cate)
		if c_category.en_name.nil?
		  c_category.en_name = Pinyin.t(c_category.name)
		  c_category.save!
		end

		c_post                  = ForagerCommon::NoteItem.new
		c_post.note_cate_id     = c_category.id
		c_post.title            = l_post.title
		c_post.external_path    = l_post.original_url
		c_post.image_url  			= l_post.img_url
		c_post.contact_name = l_post.contact_name
		c_post.contact_phone = l_post.contact_phone
		c_post.contact_email = l_post.contact_email
		c_post.contact_qq = l_post.contact_qq
		c_post.contact_other = l_post.contact_other
		c_post.region_id = 23
		c_post.city_id = 234
		c_post.district_id = get_district_id(l_post.district)
		c_post.address = l_post.address
		c_post.description = l_post.description

		c_post.save!

		mod.update(l_post.id, :is_exported => 'y')
		print l_post.id
		print ' '
	   rescue => ex
		   puts ex.message
       mod.update(l_post.id, :is_exported => 'f')
	   end
	end

	
	private
	def get_district_id(name)
		districts = ForagerCommon::District.where(:city_id => 234).where("name regexp '#{name}'")
		return districts.first.id if districts.size == 1
		name = name.gsub(/ .*$/, '')
		districts = ForagerCommon::District.where(:city_id => 234).where("name regexp '#{name}'")
		return districts.first.id if districts.size == 1
		districts = ForagerCommon::District.where(:city_id => 234).where("name = '成都周边'")
		return districts.first.id if districts.size == 1
	end
end

if __FILE__ == $0
  Migrator.new.run
end