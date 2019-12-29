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

      brigade.times = {
        dayStart: rnd(15),
        startTime: startTime[rnd(startTime.length)],
        hours: hours[rnd(hours.length)]
      }

      brigade.times.duration = rnd(brigade.times.dayStart) + 1
    })

    delete plant.num
    delete plant.fields

    console.log(plant)
  })

  return data
}

export default prepareData(PLANTS)
