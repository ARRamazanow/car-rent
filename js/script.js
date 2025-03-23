const carData = {
    Ford: {
      models: ["Focus", "Fiesta", "Mustang"],
      bodyTypes: ["Hatchback", "Sedan", "Coupe"],
      years: ["2020", "2021", "2022"]
    },
    Hyundai: {
      models: ["Elantra", "Sonata", "Tucson"],
      bodyTypes: ["Sedan", "SUV", "Hatchback"],
      years: ["2019", "2020", "2021"]
    },
    Opel: {
      models: ["Astra", "Corsa", "Mokka"],
      bodyTypes: ["Hatchback", "Sedan", "SUV"],
      years: ["2018", "2019", "2020"]
    },
    Peugeot: {
      models: ["208", "3008", "508"],
      bodyTypes: ["Hatchback", "SUV", "Sedan"],
      years: ["2018", "2019", "2020"]
    },
    VW: {
      models: ["Golf", "Polo", "Tiguan"],
      bodyTypes: ["Hatchback", "Sedan", "SUV"],
      years: ["2020", "2021", "2022"]
    },
    MB: {
      models: ["A-Class", "C-Class", "E-Class"],
      bodyTypes: ["Sedan", "Coupe", "SUV"],
      years: ["2020", "2021", "2022"]
    },
    Skoda: {
      models: ["Octavia", "Superb", "Kodiaq"],
      bodyTypes: ["Sedan", "Hatchback", "SUV"],
      years: ["2019", "2020", "2021"]
    }
  };

  // Получаем элементы DOM
  const carsSelect = document.getElementById('cars');
  const additionalFieldsDiv = document.getElementById('additionalFields');
  const modelsSelect = document.getElementById('models');
  const bodyTypeSelect = document.getElementById('bodyType');
  const yearSelect = document.getElementById('year');

  // Слушаем событие выбора автомобиля
  carsSelect.addEventListener('change', function() {
    const selectedCar = carsSelect.value;

    // Если выбран автомобиль, показываем дополнительные поля
    if (selectedCar && carData[selectedCar]) {
      additionalFieldsDiv.style.display = 'block';

      // Заполняем модели
      fillSelect(modelsSelect, carData[selectedCar].models);
      // Заполняем кузовы
      fillSelect(bodyTypeSelect, carData[selectedCar].bodyTypes);
      // Заполняем годы
      fillSelect(yearSelect, carData[selectedCar].years);
    } else {
      additionalFieldsDiv.style.display = 'none';
    }
  });

  // Функция для заполнения <select> значениями
  function fillSelect(selectElement, options) {
    selectElement.innerHTML = ''; // Очищаем текущие значения

    options.forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      selectElement.appendChild(option);
    });
  }