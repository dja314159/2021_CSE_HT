// variables
let userName = null;
let state = 'SUCCESS';

// functions
function Message(arg) {
    this.text = arg.text;
    this.message_side = arg.message_side;

    this.draw = function (_this) {
        return function () {
            let $message;
            $message = $($('.message_template').clone().html());
            $message.addClass(_this.message_side).find('.text').html(_this.text);
            $('.messages').append($message);

            return setTimeout(function () {
                return $message.addClass('appeared');
            }, 0); 
        };
    }(this);
    return this;
}

function getMessageText() {
    let $message_input;
    $message_input = $('.message_input');
    return $message_input.val();
}

function sendMessage(text, message_side) {
    let $messages, message;
    $('.message_input').val('');
    $messages = $('.messages');
    message = new Message({
        text: text,
        message_side: message_side
    });
    message.draw();
    $messages.animate({scrollTop: $messages.prop('scrollHeight')}, 300);
}

function greet() {
    setTimeout(function () {
        return sendMessage("안녕하세요! 저는 경북대학교 챗봇 KOBE 라고 해요!", 'left');
    }, 1000);

    setTimeout(function () {
        return sendMessage("사용할 닉네임을 알려주세요!", 'left');
    }, 2000);
}

function onClickAsEnter(e) {
    if (e.keyCode === 13) {
        onSendButtonClicked()
    }
}

function setUserName(username) {

    if (username != null && username.replace(" ", "" !== "")) {
        setTimeout(function () {
            return sendMessage("반가워요 " + username + " 님!! 닉네임이 설정되었어요!!", 'left');
        }, 1000);
        setTimeout(function () {
            return sendMessage("저는 경북대학교의 여러 정보를 알려주는 챗봇이에요.", 'left');
        }, 2000);
        setTimeout(function () {
            return sendMessage("학사일정, 맛집,코로나 정보에 대해 무엇이든 물어보세요!", 'left');
        }, 3000);

        return username;

    } else {
        setTimeout(function () {
            return sendMessage("올바른 닉네임을 이용해주세요.", 'left');
        }, 1000);

        return null;
    }
}

function requestChat(messageText, url_pattern) {
    $.ajax({
        url: "http://127.0.0.1:8080/" + url_pattern + '/' + userName + '/' + messageText,
        type: "GET",
        dataType: "json",
        success: function (data) {
            state = data['state'];

            if (state === 'SUCCESS') {
                return sendMessage(data['answer'], 'left');
            } else if (state === 'REQUIRE_LOCATION') {
                return sendMessage('어느 문쪽을 알려드릴까요?(북문 or 쪽문)', 'left');
            } else {
                return sendMessage(state, 'left');

            }
        },

        error: function (request, status, error) {
            console.log(error);

            return sendMessage('죄송합니다. 서버 연결에 실패했습니다......', 'left');
        }
    });
}

function onSendButtonClicked() {
    let messageText = getMessageText();
    sendMessage(messageText, 'right');

    if (userName == null) {
        userName = setUserName(messageText);

    } 
    else {
        if (messageText.includes('안녕')) 
        {
            setTimeout(function () {
                return sendMessage("안녕하세요!", 'left');
            }, 1000);
            setTimeout(function () {
                return sendMessage("학사일정, 맛집,코로나 정보에 대해 무엇이든 물어보세요!", 'left');
            }, 2000);
        }
        else if (messageText.includes('개강')) 
            {
                setTimeout(function () 
                    {
                        return sendMessage("2학기 개강일은 9월 1일 이에요!", 'left');
                    }, 1000);
            }
        else if (messageText.includes('종강')) 
            {
                setTimeout(function () 
                    {
                        return sendMessage("2학기 종강일은 12월 21일 이에요!", 'left');
                    }, 1000);
            }
        else if (messageText.includes('여름방학')) 
            {
                setTimeout(function () 
                    {
                        return sendMessage("여름방학은 8월 31일 까지에요,,,,ㅠㅠ", 'left');
                    }, 1000);
            }
            
        else if (messageText.includes('겨울방학')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("겨울방학은 12월 22일 이에요!", 'left');
                }, 1000);
        }        
        else if (messageText.includes('시험')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("중간고사는 10.25.~10.29, 기말고사는 12.15.~12.21. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('중간고사')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("중간고사는 10.25.~10.29 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('기말고사')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("기말고사는 12.15.~12.21. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('수꾸')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("수강 꾸러미는 7.20.~7.22. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('수강꾸러미')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("수강 꾸러미는 7.20.~7.22. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('수강 꾸러미')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("수강 꾸러미는 7.20.~7.22. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('수강신청')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("수강신청은 8.10.~8.12. 에요!", 'left');
                }, 1000);
        }
        else if (messageText.includes('수강 신청')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("수강신청은 8.10.~8.12. 에요!", 'left');
                }, 1000);
        }

        else if (messageText.includes('졸업')) 
        {
            setTimeout(function () 
                {
                    return sendMessage("졸업식은 8월 20일 이에요!", 'left');
                }, 1000);
        }

        else if (messageText.includes('코로나')) 
        {
            
            setTimeout(function () 
                {       
                    return sendMessage("코로나 확진자 수는 전일대비 + 1630명 이에요", 'left');
                }, 1000);
            setTimeout(function () 
                {       
                    return sendMessage("경북대 코로나 정보는 https://www.knu.ac.kr/wbbs/wbbs/bbs/btin/list.action?bbs_cde=34&menu_idx=224 이곳에서 확인 할 수 있어요", 'left');
                }, 2000);
        }
    


        
        else if (messageText.includes('고마워')) 
            {
                setTimeout(function () 
                    {
                        return sendMessage("천만에요. 더 물어보실 건 없나요?", 'left');
                    }, 1000);
            } 
        else if (messageText.includes('없어')) 
            {
                setTimeout(function () 
                {
                    return sendMessage("그렇군요. 알겠습니다!", 'left');
                }, 1000);


        } else if (state.includes('REQUIRE')) {
            return requestChat(messageText, 'fill_slot');
        } else {
            return requestChat(messageText, 'request_chat');
        }
    }
}