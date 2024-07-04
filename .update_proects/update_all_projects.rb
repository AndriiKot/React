require_relative 'config'

update = "git subtree pull --prefix "

PROJECTS.each do |folder, git_repo| 
    system(`cd .. && #{update}#{folder} #{git_repo} main`)
end

system(`git push`)
