"""
@auther Hyunwoong
@since 7/1/2020
@see https://github.com/gusdnd852
"""

from kocrawl.dust import DustCrawler
from kocrawl.weather import WeatherCrawler
from kochat.app import Scenario
from kocrawl.map import MapCrawler
#import SchoolCrawler
#import CoronaCrawler

"""school = Scenario(
    intent='school',
    api=SchoolCrawler().request,
    scenario={
        'SCHOOL' : ['개강']
    }
)

corona = Scenario(
    intent='corona',
    api=CoronaCrawler().request,
    scenario={
        'CORONA' : ['코로나']
    }
)
"""



restaurant = Scenario(
    intent='restaurant',
    api=MapCrawler().request,
    scenario={
        'LOCATION': [],
        'RESTAURANT': []
    }
)
