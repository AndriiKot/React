require 'concurrent'
require_relative 'config'

Dir.chdir('..')
threads = []

PROJECTS.each do |folder, git_repo| 
    threads << Thread.new do
        result = system("git subtree pull --prefix #{folder} #{git_repo} main")
    end
end

threads.each(&:join)


push_thread = Thread.new do
    result = system("git push")
    unless result
        puts "Error pushing changes"
    end
end

push_thread.join
