require_relative 'config'

add  = "git subtree add --prefix "

PROJECTS.each do |folder, git_repo| 
    if Dir.exist?("../#{folder}")
#     Error !!!    system(`cd .. && echo "#{folder} already exists in the parent directory" `) !!!
# 	  Error !!!    system(`cd .. && puts "#{folder} already exists in the parent directory" `) !!!
#         !!! is not recognized as an internal or external command,
#        operable program or batch file.  !!!!
# Если папка с таким именем существует в родительском каталоге,
#  то выводить в консоль сообщение "#{folder} already exists in the parent directory"
# где 'folder' имя папки в родительском каталоге
    else
        system(`cd .. && #{add}#{folder} #{git_repo} main`)
    end
end

system(`git push`)
