import { v4 as uuidv4 } from "uuid";

export const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const apiKey = "f250dfa4d6904da99decb7969ed4e62c";

export const isValidEmail = (str) => {
  return /\S+@\S+\.\S+/.test(str);
};

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(dateStr));
}

export const orderNum = () => {
  const str = uuidv4();
  return `#${str.substring(0, 7)}`;
};

export function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(`Unable to retrieve your location: ${error.message}`);
        }
      );
    }
  });
}

export const formatAddress = (str) => {
  return str.split(", ").slice(0, 2).join(", ");
};

export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  console.log(data);

  return data.features[0].properties.formatted;
}
