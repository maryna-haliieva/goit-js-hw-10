function createCardRef(country) {
  const lang = country.languages.map(language => language.name).join(', ');
  return `<div class="box">
  <img src="${country.flags.svg}" alt="${country.name}" width="110" class="card__img">
  <h2>${country.name}</h2></div>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Languages</b>: ${lang}</p>`;
}
export { createCardRef };
