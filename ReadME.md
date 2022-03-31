# Wetube Reloaded

Home
join
login
search
home에서 바로 가면 global router

이런 그룹형 규칙은 꼭 안지켜도됨 마케팅적인 면에서 좀 
url이 지저분해 보일수도 있으니까.

profile-user => /users/:id
user-logout => /users/logout 
edit my user => /users/edit
delete my user => /users/delete

see-video => /video/:id
watch-video => /videos/:id/watch
watch-upload => /videos/upload
edit-video => /videos/:id/edit
delete-video => /video/:id/delete
comment-video => /video/comment
delete-comment-video => /videos/comments/delete

router란 주제를 기반으로 url를 그룹화해줌. 
url에서 주소를 추가해 나감
/video에서 /comments로 나가고 등등

1. video data control (ex. upload display delete...)
2. user data control