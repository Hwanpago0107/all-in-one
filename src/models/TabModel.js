const data = [
  {
    id: 1,
    name: 'Todo',
    image: '../static/images/alt.svg'
  },
  {
    id: 2,
    name: '최근 검색어',
    image: '../static/images/air-play.svg'
  },
  {
    id: 3,
    name: '다른 검색어',
    image: '../static/images/book.svg'
  },
  {
    id: 4,
    name: '기타 검색어',
    image: '../static/images/box.svg'
  },
  {
    id: 5,
    name: '메뉴',
    image: '../static/images/menu.svg'
  }
]

export default {
  list() {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}