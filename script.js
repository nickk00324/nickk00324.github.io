videos = ["KFDS.mp4", "ROSPB.mp4", "BAB.mp4", "BMR.mp4","V7E.mp4"];

seed = Math.floor(Math.random() * videos.length);

video_player = document.getElementById("myVideo");

video_player.innerHTML = "<source src = '" + videos[seed] + "' type = 'video/mp4'>"

