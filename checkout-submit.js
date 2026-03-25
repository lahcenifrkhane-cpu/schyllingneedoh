const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwWZR9c2C6SRs9kIfM5gR3Cnrp51malv67WFXl5XQ9VxufN7IryKRU52EGISNDSwrqz/exec";

function toObject(formData) {
  const result = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }
  return result;
}

function toQueryString(data) {
  return new URLSearchParams(data).toString();
}

async function sendToGoogleSheets(payload) {
  if (!SHEETS_WEB_APP_URL) {
    return;
  }

  // Apps Script often requires no-cors when called from static pages.
  await fetch(SHEETS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}

const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(checkoutForm);
    const payload = toObject(formData);

    try {
      await sendToGoogleSheets(payload);
    } catch (error) {
      console.error("Google Sheets submit failed", error);
    }

    const query = toQueryString(payload);
    window.location.href = `product-checkout.html?${query}`;
  });
}
