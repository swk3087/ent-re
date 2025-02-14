//////////////////////////////////////
//////////////////////////////////////
{
    name: '1text', // 이름 지정
    template: '%1', // 표시할 내용
    skeleton: 'basic_text', // 형식(기본 텍스트)
    color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
    },
    params: [ // %n의 형식 지정
        { // %1의 형식 정의
            type: 'Text', // 텍스트 형식
            text: '엔트리 기능', // 표시 내용
            color: EntryStatic.colorSet.common.TEXT, // 검은색
            align: 'center'
        }
    ],
    def: [],
    map: {},
    class: 'text'
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: 'EntryLogiN', // 블럭 이름 지정
    template: '사용자 엔트리 로그인', // 표시할 내용
    skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
    color: { // 색깔
        default: '#23526a', //RGB 색깔
        darken: '#23526a' //RGB 색깔
    },
    params: [ // %n 정의
        { // %1 정의
            type: 'Block', // 형식 지정(입력값)
            accept: 'string'
        }
    ],
    func: async(sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        alert('사용자 엔트리 로그인');
        window.location.href = 'https://playentry.org/signin';
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
    }
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: 'IsMobilE', // 블럭 이름 지정
    template: '사용자 클라이언트가 모바일인가?', // 표시할 내용
    skeleton: 'basic_boolean_field', // 블럭 형식(basic은 일반 블럭)
    color: { // 색깔
        default: '#23526a', //RGB 색깔
        darken: '#23526a' //RGB 색깔
    },
    params: [ // %n 정의
        { // %1 정의
            type: 'Block', // 형식 지정(입력값)
            accept: 'string'
        }
    ],
    func: async(sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        alert('사용자 클라이언트가 모바일인가?');
        if (Entry.isMobile() == true) {
            return true;
        }
    }
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: '2text', // 이름 지정
    template: '%1', // 표시할 내용
    skeleton: 'basic_text', // 형식(기본 텍스트)
    color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
    },
    params: [ // %n의 형식 지정
        { // %1의 형식 정의
            type: 'Text', // 텍스트 형식
            text: '외부기능', // 표시 내용
            color: EntryStatic.colorSet.common.TEXT, // 검은색
            align: 'center'
        }
    ],
    def: [],
    map: {},
    class: 'text'
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: '3text', // 이름 지정
    template: '%1', // 표시할 내용
    skeleton: 'basic_text', // 형식(기본 텍스트)
    color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
    },
    params: [ // %n의 형식 지정
        { // %1의 형식 정의
            type: 'Text', // 텍스트 형식
            text: '커뮤니티 기능', // 표시 내용
            color: EntryStatic.colorSet.common.TEXT, // 검은색
            align: 'center'
        }
    ],
    def: [],
    map: {},
    class: 'text'
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: 'b1text', // 이름 지정
    template: '%1', // 표시할 내용
    skeleton: 'basic_text', // 형식(기본 텍스트)
    color: { // 색깔
        default: EntryStatic.colorSet.common.TRANSPARENT, // 투명
        darken: EntryStatic.colorSet.common.TRANSPARENT // 투명
    },
    params: [ // %n의 형식 지정
        { // %1의 형식 정의
            type: 'Text', // 텍스트 형식
            text: 'Made by swk, beta 0.2',
            color: EntryStatic.colorSet.common.TEXT, // 검은색
            class: 'bold',
            align: 'center'
        }
    ],
    def: [],
    map: {},
    class: 'text'
},
//////////////////////////////////////

//////////////////////////////////////
{
    name: 'PlusBlockGithuB', // 블럭 이름 지정
    template: '추가블럭 깃허브로 이동', // 표시할 내용
    skeleton: 'basic', // 블럭 형식(basic은 일반 블럭)
    color: { // 색깔
        default: '#23526a', //RGB 색깔
        darken: '#23526a' //RGB 색깔
    },
    params: [ // %n 정의
        { // %1 정의
            type: 'Block', // 형식 지정(입력값)
            accept: 'string'
        }
    ],
    func: async(sprite, script) => { // 실행할 JS 코드
        // script.getValue('위에 map에서 설정한 변수 이름', script) 이 코드로 입력값 로드 가능
        alert('추가블럭 깃허브로 이동');
        window.location.href = 'https://github.com/swk3087/ent-re';
        return script.callReturn() // 일반 블럭 코드 뒤에는 반드시 붙여주세요
    }
}
//////////////////////////////////////