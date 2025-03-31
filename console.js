import { CSV } from "https://js.sabae.cc/CSV.js";

const fn = "https://code4fukui.github.io/yesnochart/data/opendata-assist.csv";
const data = await CSV.fetchJSON(fn);

const show = (id) => {
  const item = data.find(i => i.id == id);
  if (!item) {
    console.log("open " + id);
    return;
  }
  if (confirm(item.question)) {
    show(item.answer1_id);
  } else {
    show(item.answer2_id);
  }
};
show(1);
