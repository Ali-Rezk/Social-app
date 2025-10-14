export default function formateDate(date) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("default", { month: "short" });
  const year = d.getFullYear();
  const hour = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return `${day} ${month} ${year} ${hour}`;
}
