"""
@auther Hyunwoong
@since 7/1/2020
@see https://github.com/gusdnd852
"""
from flask import render_template

from kochat.app import KochatApi
from kochat.data import Dataset
from kochat.loss import CRFLoss, CosFace, CenterLoss, COCOLoss, CrossEntropyLoss
from kochat.model import intent, embed, entity
from kochat.proc import DistanceClassifier, GensimEmbedder, EntityRecognizer, SoftmaxClassifier

from demo.scenario import restaurant
# from scenario import dust, weather, travel, restaurant
# 에러 나면 이걸로 실행해보세요!

import re
import bs4              #BeautifulSoup
from bs4 import BeautifulSoup
import urllib.request   #통신 라이브러리




dataset = Dataset(ood=False)
emb = GensimEmbedder(model=embed.FastText())

clf = DistanceClassifier(
    model=intent.CNN(dataset.intent_dict),
    loss=CenterLoss(dataset.intent_dict),
)

rcn = EntityRecognizer(
    model=entity.LSTM(dataset.entity_dict),
    loss=CRFLoss(dataset.entity_dict)
)

kochat = KochatApi(
    dataset=dataset,
    embed_processor=(emb, True),
    intent_classifier=(clf, True),
    entity_recognizer=(rcn, True),
    scenarios=[restaurant]
)

def corona_crawl():

    target_url = 'https://www.knu.ac.kr/wbbs/wbbs/bbs/btin/list.action?bbs_cde=34&menu_idx=224'
    html = urllib.request.urlopen(target_url).read()
    soup = BeautifulSoup(html, 'html.parser')

    url = "https://www.knu.ac.kr/wbbs/wbbs/bbs/btin/viewBtin.action?bbs_cde=34&btin.bbs_cde=34&btin.doc_no=1324017&btin.appl_no=000000&btin.page=1&btin.search_type=&btin.search_text=&popupDeco=false&btin.note_div=row&menu_idx=224"

    html = urllib.request.urlopen(url) #naver news 페이지를 읽어온다.

    parser = bs4.BeautifulSoup(html, "html.parser") #html 기반으로 파싱
    article = parser.find("div", {"class":"board_cont"})#div 태그 중 클래스 이름이 newsnow_tx_inner 인 녀석들을 추출합니다.

    temp = []

    temp.append(str(article))

    res = temp[0].replace("<br/>","\n")

    res = re.sub('<.+?>', '', res, 0, re.I|re.S).lstrip()

    f = open("corona.txt","w")

    f.write(res)

    f.close()




@kochat.app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    corona_crawl()
    kochat.app.template_folder = kochat.root_dir + 'templates'
    kochat.app.static_folder = kochat.root_dir + 'static'
    kochat.app.run(port=8080, host='127.0.0.1')
