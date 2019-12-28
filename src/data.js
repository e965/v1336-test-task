const PLANTS = [
  {
    num: 1,
    fields: [
      'Павловское', 'Чикулаевское', 'Чернушинское', 'Трушниковское', 'Этышское', 'Дороховское'
    ],
    brigadesNum: 10
  }, {
    num: 2,
    fields: [
      'Красноярско-Куединское', 'Гондыревское', 'Степеновское', 'Аксаитовское'
    ],
    brigadesNum: 6
  }, {
    num: 3,
    title: 'Цех №3',
    fields: [
      'Гожанское', 'Москудьинское', 'Шагирское'
    ],
    brigadesNum: 8
  }
]

let rnd = max => Math.floor(Math.random() * max)

let wellNum = 0

let getWellNum = () => {
  return wellNum += 1 + rnd(10)
}

let prepareData = data => {
  data.forEach(plant => {
    plant.title = `Цех №${plant.num}`

    plant.brigades = []
    for (let i = 0; i <= plant.brigadesNum; i++) {
      plant.brigades.push({})
    }
    delete plant.brigadesNum

    plant.brigades.forEach((brigade, i) => {
      brigade.title = `Бригада ${plant.num < 10 ? `0${plant.num}` : plant.num}${i < 10 ? `0${i}` : i}`

      brigade.field = plant.fields[rnd(plant.fields.length)]

      brigade.wells = []
      for (let i = 0; i <= 10; i++) {
        brigade.wells.push(getWellNum())
      }
    })

    delete plant.num
    delete plant.fields
  })

  return data
}

export default prepareData(PLANTS)
