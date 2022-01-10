
exports.seed = async function(knex) {
  await knex('sucs').insert([
    {
      situps: 10,
      crunches: 10,
      squats: 25
    },
    {
      situps: 20,
      crunches: 15,
      squats: 30
    },
    {
      situps: 5,
      crunches: 20,
      squats: 35
    },
    {
      situps: 10,
      crunches: 25,
      squats: 40
    },
    {
      situps: 5,
      crunches: 10,
      squats: 30
    },
    {
      situps: 15,
      crunches: 30,
      squats: 50
    },
    {
      situps: 20,
      crunches: 35,
      squats: 55
    },
    {
      situps: 30,
      crunches: 40,
      squats: 60
    },
    {
      situps: 0,
      crunches: 0,
      squats: 0
    },
    {
      situps: 10,
      crunches: 10,
      squats: 25
    },
    {
      situps: 40,
      crunches: 50,
      squats: 65
    },
    {
      situps: 45,
      crunches: 60,
      squats: 70
    },
    {
      situps: 5,
      crunches: 5,
      squats: 5
    },
    {
      situps: 10,
      crunches: 10,
      squats: 10
    },
    {
      situps: 20,
      crunches: 30,
      squats: 20
    },
    {
      situps: 25,
      crunches: 30,
      squats: 45
    },
    {
      situps: 40,
      crunches: 50,
      squats: 60
    },
    {
      situps: 0,
      crunches: 0,
      squats: 0
    },
    {
      situps: 5,
      crunches: 5,
      squats: 5
    },
    {
      situps: 10,
      crunches: 10,
      squats: 25
    },
    {
      situps: 20,
      crunches: 15,
      squats: 35
    },
    {
      situps: 20,
      crunches: 25,
      squats: 55
    },
    {
      situps: 10,
      crunches: 40,
      squats: 55
    },
    {
      situps: 10,
      crunches: 50,
      squats: 65
    },
    {
      situps: 15,
      crunches: 60,
      squats: 65
    },
    {
      situps: 20,
      crunches: 70,
      squats: 85
    },
    {
      situps: 0,
      crunches: 0,
      squats: 0
    },
    {
      situps: 25,
      crunches: 80,
      squats: 95
    },
    {
      situps: 30,
      crunches: 90,
      squats: 95
    },
    {
      situps: 40,
      crunches: 100,
      squats: 100
    }
  ]);
};
