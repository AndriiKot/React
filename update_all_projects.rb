projects = {
 "Only_React_01": 'https://github.com/AndriiKot/React_only__01.git',
 "Only_React_02": 'https://github.com/AndriiKot/React_only__02',
 "React_03": "https://github.com/AndriiKot/React_03.git",
 "React_Query_04": "https://github.com/AndriiKot/React_Query__01.git",
}

update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`#{update}#{folder} #{git_repo} main`)
end

system(`git push`)
