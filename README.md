# KOBE / Knu Obliging chat Bot Embodied


## 주제

경북대학교 학생들을 위한 챗봇

![image](https://user-images.githubusercontent.com/62656584/126735166-3537bd59-0f08-422b-a200-2a1941fcec21.png)



## 동기 및 목적

- 대면 등교를 했더라면 동기들과 소통하며 정보를 쉽게 얻을 수 있지만 코로나-19 로 인해 정보를 쉽게 얻을 수 없습니다.
- 챗봇을 만들어 정보에 대한 접근성을 높여 이러한 불편함을 해소하고자 합니다.

## 제작
- 본 챗봇은 오픈소스 kochat, kocrawl을 기반으로 제작되었습니다.
- 학사일정은 front-end 영역에 정보를 미리 저장 해두어 처리하였습니다.
- 맛집 정보는 질의 학습 데이터 2,755개로 GensimEmbedding을 통해 학습시켰습니다.
- 코로나 정보는 공식 사이트와 교내 코로나 19 게시판의 정보를 담아 왔습니다.

## 용도

1) 학사 일정(시험기간, 개강일, 종강일, 성적 발표일 등)이나 최근 공지사항을 확인하는데 있어서 매번 학교 홈페이지에 접속해야하는 불편함이 있어 이를 챗봇을 통해 해소하고자 합니다.
2) 또한, 경북대 학생들의 주요 생활권에서 어떤 식당을 가면 좋을지 또한 사용자의 입력을 받거나, 별점순 혹은 무작위로 추천 해 줍니다.
3) 가장 최근 경북대에서의 코로나 소식에 대한 질의응답을 수행 합니다.

## 영향

- 정보에 대한 접근성 향상으로 꼭 필요한 정보를 놓치지 않게 함.
- 식사에 대한 고민을 줄일 수 있음.
- 코로나 확진자에 대한 빠른 파악으로 2차 감염 최소화
 

## 비즈니스 모델

- 하단 광고 배너를 통한 광고 수익
- 북문, 쪽문 등의 식당과 광고제휴를 통해 상위에 별도로 노출 되도록 함

## 사용법

1. kocrawl 라이브러리를 설치해야 합니다.(pip install kocrawl)
2. demo/application.py 를 실행하면 자동으로 학습이되고 플라스크가 실행 됩니다.
 
## 시연영상

https://youtu.be/-FKQRuG4ks8
<iframe width="1380" height="487" src="https://www.youtube.com/embed/-FKQRuG4ks8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
