require_relative 'config'

add  = "git subtree add --prefix "

PROJECTS.each do |folder, git_repo| 
    system(`cd .. && #{add}#{folder} #{git_repo} main`)
end

system(`git push`)
