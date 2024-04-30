import loading from "../../assets/svg/loading.svg";
import approval from "../../assets/svg/approval-symbol-in-badge.svg";
import dress from "../../assets/svg/dress.svg";
import sewing from "../../assets/svg/sewing-machine.svg";
import clipboard from "../../assets/svg/clipboard-verification-symbol.svg";
import delivered from "../../assets/svg/delivered-box-verification-symbol.svg";

const schemaArray = [
  {
    id: 1,
    text: "1. Обработка входящей заявки",
    description:
      "Подача заявки клиентом, брифинг клиента, обсуждение деталей заказа",
    image: loading,
  },
  {
    id: 2,
    text: "2. Портверждение заказа клиентом",
    description: "Утверждение модели, фурнитуры, ткани, кроя",
    image: approval,
  },
  {
    id: 3,
    text: "3. Размещение заказа образца на производтсво",
    description: "Передача всей полученной информации на производство",
    image: dress,
  },
  {
    id: 4,
    text: "4. Пощив образца",
    description:
      "Закупка ткани, закупка фурнитуры, разработка лекала, декатировка ткани, раскрой ткани, пошив, ОТК",
    image: sewing,
  },
  {
    id: 5,
    text: "5. Утверждение образца",
    description:
      "Утверждение образца клиентом в онлайн формате или отправка логистической службой",
    image: dress,
  },
  {
    id: 6,
    text: "6. Подтверждение заказа",
    description: "Утверждение ткани, количество, расцветки, дата отгрузки",
    image: approval,
  },
  {
    id: 7,
    text: "7. Заключение договора",
    description:
      "Передача информации на производтсво, пошив размещенного заказа на производство",
    image: clipboard,
  },
  {
    id: 8,
    text: "8. Отгрузка товара",
    description:
      "Финальная проверка, упаковка товара по необходимым требованиям, отгрузка",
    image: delivered,
  },
];

export default schemaArray;
