const BASE_URL = "https://api.adviceslip.com/advice";
const random_btn = document.querySelector(".card__btn");
const adviceNumber = document.querySelector(".card__advice-number");
const advice = document.querySelector(".card__advice");

const getAdvice = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.slip;
  } catch (errors) {
    const error = `Something went wrong - ${errors}`;
    return error;
  }
};

const updateAdvice = async () => {
  const data = await getAdvice();
  adviceNumber.innerHTML = `Advice #${data.id}`;
  advice.innerHTML = `"${data.advice}"`;
};

random_btn.addEventListener("click", updateAdvice);

updateAdvice();
