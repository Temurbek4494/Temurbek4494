const input = document.getElementById("numberInput") as HTMLInputElement;
const button = document.getElementById("calcBtn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

button.addEventListener("click", () => {
  const value = Number(input.value);
  if (isNaN(value)) {
    result.textContent = "Iltimos, raqam kiriting!";
  } else {
    result.textContent = `Natija: ${value * 2}`;
  }
});
