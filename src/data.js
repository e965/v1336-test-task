const PLANTS = [
  {
    num: 1,
    fields: [
      'Павловское', 'Чикулаевское', 'Чернушинское', 'Трушниковское', 'Этышское', 'Дороховское'
    ],
    brigadesNum: 20
  }, {
    num: 2,
    fields: [
      'Красноярско-Куединское', 'Гондыревское', 'Степеновское', 'Аксаитовское'
    ],
    brigadesNum: 12
  }, {
    num: 3,
    title: 'Цех №3',
    fields: [
      'Шагирто-Гожанское', 'Аптугайское', 'Шагирское', 'Кудрявцевское', 'Быркинское', 'Альняшское'
    ],
    brigadesNum: 16
  }
]

let rnd = max => Math.floor(Math.random() * max)

let wellNum = 0

let getWellNum = () => {
  return wellNum += 1 + rnd(10)
}

let prepareData = data => {
  let startTime = [0, 6, 12, 18]
  let hours = [8, 12]

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

      brigade.times = {}
      brigade.times.startDate = new Date(Date.now() - rnd(12) * 24 * 60 * 60 * 1000).setHours(0, 0, 0, 0)
      brigade.times.startTime = new Date(brigade.times.startDate).setHours(startTime[rnd(startTime.length)], 0, 0, 0)
      brigade.times.endTime = new Date(brigade.times.startTime + hours[rnd(hours.length)] * 60 * 60 * 1000).getTime()
    })

    delete plant.num
    delete plant.fields
  })

  return data
}

export default prepareData(PLANTS)
