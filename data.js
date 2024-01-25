const words = [
  "указатель",
  "радуга",
  "мармелад",
  "поиск",
  "прятки",
  "сторож",
  "копейка",
  "леопард",
  "аттракцион",
  "дрессировка",
  "ошейник",
  "карамель",
  "водолаз",
  "защита",
  "батарея",
  "решётка",
  "квартирант",
  "дельфинарий",
  "непогода",
  "полиция",
  "перекрёсток",
  "башня",
  "стрелка",
  "градусник",
  "бутылка",
  "щипцы",
  "наволочка",
  "павлин",
  "карточка",
  "записка",
  "лестница",
  "переулок",
  "сенокос",
  "рассол",
  "закат",
  "сигнализация",
  "журнал",
  "заставка",
  "тиранозавр",
  "микрофон",
  "прохожий",
  "квитанция",
  "пауза",
  "новости",
  "скарабей",
  "серебро",
  "творог",
  "осадок",
  "корзина",
  "овчарка",
  "телескоп",
  "микроб",
  "угощение",
  "экскаватор",
  "пришелец",
  "айсберг",
  "пластик",
  "доставка",
  "вторник",
  "льдина",
  "интерес",
  "троллейбус",
  "футболист",
  "лисёнок",
  "баклажан",
  "лягушка",
  "джокер",
  "котлета",
  "накидка",
  "дикобраз",
  "барбарис",
  "работник",
  "кристалл",
  "доспехи",
  "велосипед",
  "черепаха",
];

const ASCII = [
  `
   |----*
       |
       |
       |
     =====`,
  `
   |----*
   O    |
        |
        |
      =====`,
  `
   |----*
   O    |
   |    |
        |
      =====`,
  `
   |----*
   O    |
  /|    |
        |
      =====`,
  `
   |----*
   O    |
  /|\\   |
        |
      ===== `,
  `
   |----*
   O    |
  /|\\   |
  /     |
      =====`,
  `
   |----*
   O    |
  /|\\   |
  / \\   |
      =====`,
];

const validLetters = new Set([
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "ё",
]);

module.exports = {
  words,
  ASCII,
  validLetters,
};
