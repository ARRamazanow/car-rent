
const carData = {
  ford: {
    models: ["Focus", "Fiesta", "Mustang"],
    years: ["2023", "2024", "2025"],
    body: ['hatchback', "coupe"]
  },
  hyundai: {
    models: ["i30", "Tucson", "Santa Fe"],
    years: ["2022", "2023", "2024"],
    body: ['hatchback', "suv"]
  },
  opel: {
    models: ["Astra", "Corsa", "Insignia"],
    years: ["2023", "2024", "2025"],
    body: ['hatchback', "coupe", "universalas"]
  },
  peugeot: {
    models: ["308", "3008", "5008"],
    years: ["2023", "2024", "2025"],
    body: ['hatchback', "suv"]
  },
  vw: {
    models: ["Golf", "Passat", "Tiguan"],
    years: ["2023", "2024", "2025"],
    body: ['hatchback', "universalas", "suv"]
  },
  mb: {
    models: ["A-class", "C-class", "E-class"],
    years: ["2021", "2024", "2025"],
    body: ['hatchback', "sedanas"]
  },
  skoda: {
    models: ["Fabia", "Octavia", "Superb"],
    years: ["2022", "2024", "2025"],
    body: ['hatchback', "sedanas"]
  }
};

function updateCarOptions() {
  const carSelect = document.getElementById('car');
  const modelSelect = document.getElementById('model');
  const yearSelect = document.getElementById('year');
  const bodySelect = document.getElementById('body');
  const selectedCar = carSelect.value;


  modelSelect.innerHTML = '<option value="----">----</option>';
  yearSelect.innerHTML = '<option value="----">----</option>';
  bodySelect.innerHTML = '<option value="----">----</option>';

  if (selectedCar !== '----') {
    const car = carData[selectedCar];

 
    car.models.forEach(model => {
      const option = document.createElement('option');
      option.value = model.toLowerCase();
      option.textContent = model;
      modelSelect.appendChild(option);
    });

   
    car.years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    
    car.body.forEach(body => {
      const option = document.createElement('option');
      option.value = body.toLowerCase();
      option.textContent = body;
      bodySelect.appendChild(option);
    });
  }
}
document.getElementById('car').addEventListener('change', updateCarOptions);
