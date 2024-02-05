ffmpeg -i $1 -i $2 -filter_complex concat=n=2:v=0:a=1 -c:a copy  $1.$2.wav

