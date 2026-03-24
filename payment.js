const params = new URLSearchParams(window.location.search);

const orderData = {
  firstName: params.get("firstName") || "",
  fullName: params.get("fullName") || "",
  country: params.get("country") || "",
  city: params.get("city") || "",
  phone: params.get("phone") || "",
  postalCode: params.get("postalCode") || "",
  address: params.get("address") || "",
  color: params.get("color") || "",
  quantity: params.get("quantity") || ""
};

const unitPrice = 19.99;
const quantity = Math.max(1, Number.parseInt(orderData.quantity || "1", 10) || 1);
const total = unitPrice * quantity;

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value || "-";
  }
}

setText("summaryFirstName", orderData.firstName);
setText("summaryName", orderData.fullName);
setText("summaryCountry", orderData.country);
setText("summaryCity", orderData.city);
setText("summaryPhone", orderData.phone);
setText("summaryPostalCode", orderData.postalCode);
setText("summaryAddress", orderData.address);
setText("summaryColor", orderData.color);
setText("summaryQuantity", String(quantity));
setText("summaryUnitPrice", `$${unitPrice.toFixed(2)}`);
setText("summaryLocation", `${orderData.city || "-"}, ${orderData.country || "-"}`);
setText("summaryOrderInfo", `${orderData.color || "-"} x${quantity}`);
setText("summaryTotal", `$${total.toFixed(2)}`);
