document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".offer-option");
  const totalAmount = document.querySelector(".total-amount");

  const prices = {
    1: "$10.00 USD",
    2: "$18.00 USD",
    3: "$24.00 USD",
  };

  // Set option 2 as default
  const defaultOption = document.querySelector('[data-option="2"]');
  defaultOption.classList.add("active");
  const defaultProductOptions = defaultOption.querySelector(".product-options");
  if (defaultProductOptions) defaultProductOptions.classList.add("active");
  totalAmount.textContent = prices[2];

  options.forEach((option) => {
    const radio = option.querySelector("input[type='radio']");
    const productOptions = option.querySelector(".product-options");

    option.addEventListener("click", () => {
      // Set radio
      radio.checked = true;

      // Deactivate all
      options.forEach((o) => {
        o.classList.remove("active");
        const po = o.querySelector(".product-options");
        if (po) po.classList.remove("active");
      });

      // Activate selected
      option.classList.add("active");
      if (productOptions) productOptions.classList.add("active");

      // Update total
      totalAmount.textContent = prices[radio.value];
    });
  });
});
