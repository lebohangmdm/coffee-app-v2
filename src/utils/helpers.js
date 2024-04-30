export const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const apiKey = "f250dfa4d6904da99decb7969ed4e62c";

export const isValidEmail = (str) => {
  return /\S+@\S+\.\S+/.test(str);
};

export function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();

  return data.features[0].properties.formatted;
}
