projects = {
 "React_01__useState": 'https://github.com/AndriiKot/React_only__01.git',
 "React_02__Cards_App": 'https://github.com/AndriiKot/React_only__02',
 "React_03__Fetch_API__Posts_App": "https://github.com/AndriiKot/React_03.git",
 "React_Query_01__Fetch_API__Posts_App": "https://github.com/AndriiKot/React_Query__01.git",
}

update = "git subtree pull --prefix "

projects.each do |folder, git_repo| 
    system(`cd .. && #{update}#{folder} #{git_repo} main`)
end

system(`git push`)
