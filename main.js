
EntryStatic.getAllBlocks = () => {
    return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
    Entry.playground.mainWorkspace.blockMenu._generateCategoryView([{
        category: 'start',
        visible: true
    }, {
        category: 'flow',
        visible: true
    }, {
        category: 'moving',
        visible: true
    }, {
        category: 'looks',
        visible: true
    }, {
        category: 'brush',
        visible: true
    }, {
        category: 'text',
        visible: true
    }, {
        category: 'sound',
        visible: true
    }, {
        category: 'judgement',
        visible: true
    }, {
        category: 'calc',
        visible: true
    }, {
        category: 'variable',
        visible: true
    }, {
        category: 'func',
        visible: true
    }, {
        category: 'analysis',
        visible: true
    }, {
        category: 'ai_utilize',
        visible: true
    }, {
        category: 'expansion',
        visible: true
    }, {
        category: 'arduino',
        visible: false
    }, {
        category: category,
        visible: true
    }]);
    for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
        if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
            $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
        }
    }
    Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
    Entry.playground.blockMenu._generateCategoryCode(category);
    if (options) {
        if (options.background) {
            $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
            $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
            if (options.backgroundSize) {
                $(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
            }
        }
        if (options.name) {
            $(`#entryCategory${category}`)[0].innerText = options.name
        }
    }
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
        Entry.block[blockname] = {
            color: color.color,
            outerLine: color.outerline,
            skeleton: skeleton,
            statement: [],
            params: params.params,
            events: {},
            def: {
                params: params.def,
                type: blockname
            },
            paramsKeyMap: params.map,
            class: _class ? _class : 'default',
            func: func,
            template: template
        }
    } // 블록 추가 시작

//////////0.1/
addBlock('fetch', '%1 가져오기', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }],
        def: [{
            type: 'text',
            params: ['https://playentry.org/api/discuss/findNotice']
        }],
        map: {
            APIURL: 0
        }
    }, 'text', async(sprite, script) => {
        let res = await fetch(script.getValue('APIURL', script))
        let data = await res.json()
        return data
    }, 'basic_string_field')
    ////////////////////

////////////////////
addBlock('array_number', '배열 %1 의 %2 번째 항목', {
    color: EntryStatic.colorSet.block.default.HARDWAR,
    outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Block',
        accept: 'string'
    }],
    def: [{
        type: 'text',
        params: [`['1', '2']`]
    }, {
        type: 'text',
        params: ['1']
    }],
    map: {
        ARRAY: 0,
        NUM: 1
    }
}, 'text', (sprite, script) => {
    let array = eval(script.getValue('ARRAY', script))
    let done = array[script.getValue('NUM', script) - 1]
    return done
}, 'basic_string_field');
////////////////////

////////////////////
addBlock('json_length', 'JSON %1 의 항목 수', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Block',
            accept: 'string'
        }],
        def: [{
            type: 'text',
            params: [`{ 'title': 'Hello, world!' }`]
        }, {
            type: 'text',
            params: ['title']
        }],
        map: {
            JSON: 0
        }
    }, 'text', (sprite, script) => {
        let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
        return done
    }, 'basic_string_field')
    ////////////////////

////////////////////
addBlock('json_key', 'JSON %1 의 %2 항목', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Block',
            accept: 'string'
        }],
        def: [{
            type: 'text',
            params: [`{ 'title': 'Hello, world!' }`]
        }, {
            type: 'text',
            params: ['title']
        }],
        map: {
            JSON: 0,
            KEY: 1
        }
    }, 'text', (sprite, script) => {
        let array = eval(script.getValue('JSON', script))
        let done = array[script.getValue('KEY', script)]
        return done
    }, 'basic_string_field')
    ////////////////////

////////////////////
addBlock('array_length', '배열 %1 의 항목 수', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }],
        def: [{
            type: 'text',
            params: [`['1', '2']`]
        }],
        map: {
            ARRAY: 0
        }
    }, 'text', (sprite, script) => {
        let done = eval(script.getValue('ARRAY', script)).length
        return done
    }, 'basic_string_field')
    ////////////////////

////////////////////
addBlock('toast', '%1 제목과 %2 내용의 %3 경고를 %4 출력하기%5', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Dropdown',
            options: [
                ['성공 했을때 뜨는 일종의경고', 'success'],
                ['잘못된 블럭을 섰을때 나오는경고', 'warning'],
                ['오류가 발생했을때 나오는경고', 'alert']
            ],
            fontSize: 11,
            arrowColor: '#FFD974',
            value: 'success'
        }, {
            type: 'Dropdown',
            options: [
                ['사라지지않게', 'true'],
                ['잠시 뒤 사라지게', 'false']
            ],
            fontSize: 11,
            arrowColor: '#FFD974',
            value: 'true'
        }, {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [{
                type: 'text',
                params: [`스폐셜`]
            }, {
                type: 'text',
                params: [`블럭`]
            },
            null,
            null,
            null
        ],
        map: {
            TITLE: 0,
            CONTENT: 1,
            TYPE: 2,
            HIDE: 3
        }
    }, 'text', (sprite, script) => {
        let hide
        if (script.getValue('HIDE', script) == 'true') {
            hide = true
        } else {
            hide = false
        }
        eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
        return script.callReturn()
    })
    ////////////////////

////////////////////
addBlock('console', '%1 내용을 이컴퓨터(브라우저) 콘솔에 %2 하기%3', {
    color: EntryStatic.colorSet.block.default.HARDWAR,
    outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Dropdown',
        options: [
            ['log', 'log'],
            ['warn', 'warn'],
            ['error', 'error'],
            ['info', 'info']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'log'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11,
    }],
    def: [{
            type: 'text',
            params: [`엔트리`]
        },
        null,
        null
    ],
    map: {
        CONTENT: 0,
        TYPE: 1
    }
}, 'text', (sprite, script) => {
    eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
    return script.callReturn()
}), console.log("스페셜블럭 로딩이 반정도 완료되었습니다."), alert("스페셜블럭 로딩이 반정도 완료되었습니다.");
////////////////////

////////////////////
addBlock('console_clear', '이컴퓨터(브라우저) 콘솔 모두 지우기%1', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [
            null
        ],
        map: {}
    }, 'text', (sprite, script) => {
        console.clear()
        return script.callReturn()
    })
    ////////////////////

////////////////////
addBlock('entry_console', '%1 내용을 엔트리 콘솔에 출력하기%2', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [{
                type: 'text',
                params: [`엔트리`]
            },
            null
        ],
        map: {
            CONTENT: 0
        }
    }, 'text', (sprite, script) => {
        Entry.console.print(script.getValue('CONTENT', script))
        return script.callReturn()
    })
    ////////////////////

////////////////////
addBlock('entry_console_clear', '엔트리 콘솔 모두 지우기%1', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [
            null
        ],
        map: {}
    }, 'text', (sprite, script) => {
        Entry.console.clear()
        return script.callReturn()
    })
    ////////////////////

////////////////////
addBlock('get_browser', '컴퓨터이름 (브라우저이름)', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [],
        def: [],
        map: {}
    }, 'text', (sprite, script) => {
        return Entry.userAgent
    }, 'basic_string_field')
    ////////////////////

////////////////////
addBlock('change_var', '%1 값을 %2 으로 변경%3', {
    color: EntryStatic.colorSet.block.default.HARDWAR,
    outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11,
    }],
    def: [{
            type: 'text',
            params: [`user.username`]
        }, {
            type: 'text',
            params: ['entry']
        },
        null
    ],
    map: {
        VARNAME: 0,
        VALUE: 1
    }
}, 'text', (sprite, script) => {
    eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
    return script.callReturn()
});
////////////////////

////////////////////
addBlock('entry_console_clear', '스폐셜블럭들을 만들사람은 john0817이고, 기타 블록 제작자는 또라띠까입니다.%1', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [
            null
        ],
        map: {}
    }, 'text', (sprite, script) => {
        Entry.console.clear()
        return script.callReturn()
    })
    ////////////////////

////////////////////
addBlock('post_commu', '%1 제목과 %2 내용의 글을 엔트리이야기에 올리기%3', {
        color: EntryStatic.colorSet.block.default.HARDWAR,
        outerLine: EntryStatic.colorSet.block.darken.HARDWAR
    }, {
        params: [{
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Block',
            accept: 'string'
        }, {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }],
        def: [{
                type: 'text',
                params: [`엔트리 추천 도서 지금 바로 보기!`]
            }, {
             