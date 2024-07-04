require_relative 'config'

add  = "git subtree add --prefix "

PROJECTS.each do |folder, git_repo| 
    if Dir.exist?("../#{folder}")
        puts "!!! #{folder} already exists in the parent directory !!!"
    else
        system(`cd .. && #{add}#{folder} #{git_repo} main`)
    end
end

system(`git push`)
