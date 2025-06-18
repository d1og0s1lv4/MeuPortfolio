const convertButton = document.querySelector(".convert-button");

const symbols = {
  BRL: { name: "Real", img: "assets/real.png", locale: "pt-BR" },
  USD: { name: "Dólar", img: "assets/dolar.png", locale: "en-US" },
  EUR: { name: "Euro", img: "assets/euro.png", locale: "de-DE" },
  GBP: { name: "Libra", img: "assets/libra.png", locale: "en-GB" },
  JPY: { name: "Iene Japonês", img: "assets/iene.png", locale: "ja-JP" },
  AUD: { name: "Dólar Australiano", img: "assets/aud.png", locale: "en-AU" },
  CAD: { name: "Dólar Canadense", img: "assets/cad.png", locale: "en-CA" },
  CHF: { name: "Franco Suíço", img: "assets/chf.png", locale: "de-CH" },
  ARS: { name: "Peso Argentino", img: "assets/ars.png", locale: "es-AR" }
};

async function convertValues() {
  const from = document.querySelector("#input-um").value;
  const to = document.querySelector("#input-dois").value;
  const amount = parseFloat(document.querySelector("#input-value").value);

  const valorReal = document.querySelector(".real-value");
  const anotherCoin = document.querySelector(".another-value");
  const originImg = document.querySelector(".origin-img");
  const originName = document.querySelector(".origin-name");
  const targetImg = document.querySelector(".currency-img");
  const targetName = document.querySelector(".currency-name");

  if (!amount || from === to) return;

  try {
    const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`);
    const data = await response.json();
    const key = `${from}${to}`;
    const rate = parseFloat(data[key].high);

    anotherCoin.innerHTML = new Intl.NumberFormat(symbols[to].locale, {
      style: "currency",
      currency: to
    }).format(amount * rate);

    valorReal.innerHTML = new Intl.NumberFormat(symbols[from].locale, {
      style: "currency",
      currency: from
    }).format(amount);

    originImg.src = symbols[from].img;
    originName.textContent = symbols[from].name;

    targetImg.src = symbols[to].img;
    targetName.textContent = symbols[to].name;
  } catch (error) {
    console.error("Erro ao buscar cotação: ", error);
    anotherCoin.textContent = "Erro na conversão.";
  }
}

convertButton.addEventListener("click", convertValues);