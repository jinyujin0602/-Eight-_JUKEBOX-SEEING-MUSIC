JUKEBOX 와 SEEING MUSIC을 이용한 가사를 다양한 장르의 음악으로 제작해주고 Seeing Music에 넣어 음악의 시각화를 보여준다. 

본 프로젝트는 JUKEBOX(OpenAI : JukeBox) 와 SEEING MUSIC(Magenta)의 배경 기술인 인공 신경망 개념(Neural Network)의 이해를 돕고자 제작하였으며 많은 사람들이 손쉽게 상호 작용하는 특별한 음악을 제작할 수 있다는 점을 이용하여 캡스톤 프로젝트에 도움 되길 위한 바람으로 작성한다. 

[본 프로젝트를 실행하는 순서 - Jukebox]

1. Google colab인 One Click Jukebox with Autosave v2.ipynb를 실행한다. 
2. One Click Jukebox with Autosave v2.ipynb에서 audio_file 부분의 경로가 본인 드라이브의 경로와 같은지 확인해준다.(다를 경우 /content/gdrive/MyDrive/본인이 설정하고 싶은 이름.wav)
3. Run time이 안될 경우, 노트북 상단에서 "Run time"을 클릭한 다음 "Restart Run time"을 클릭합니다. 그런 다음 모든 것을 다시 실행하십시오.
3. 위에서 순서대로 Run time을 누른다.
4. "/content/gdrive/MyDrive/본인이 설정하고 싶은 이름.wav "이 위치에 가사로 생성된 음악이 있을 것이다.
5. 가사를 바꾸고 싶다면 your_lyrics = """에서 원하는 가사를 작성하는 것을 추천한다.
6. 다양한 장르의 음악 추출을 하고 싶다면 "힙합 팝 펑크 디스코" 중 하나로 변경하거나 jukebox/jukebox/data/ids/v2_genre_ids.txt을 참고
7. 다양한 가수의 음악 추출을 하고 싶다면 jukebox/jukebox/data/ids/v2_artist_ids.txt 참고

[본 프로젝트를 실행하는 순서 - Seeing Music]

8. 추출된 음악 파일을 https://creatability.withgoogle.com/seeing-music/사이트를 들어가서 Choose your own file에 넣는다.
9. 이제 너만의 가사로 다양한 장르와 가수로 추출된 음악 파일이 DDSF를 이용한 시각화로 보일 것이다.
