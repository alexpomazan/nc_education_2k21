let dataDay = document.querySelector(".datatime__day");
let dataMonth = document.querySelector(".datatime__month");
let dataWday = document.querySelector(".datatime__wday");
let dataTime = document.querySelector(".datatime__time");
let dataHour = document.querySelector(".datatime__hour");
let dataMin = document.querySelector(".datatime__min");

(function () {
  let days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
})();

const date = new Date();

let Wday = date.getDayName() + "&nbsp;";
let month = date.getMonthName() + ", ";
let day = date.getDate();
day = day < 10 ? "0" + day : day;

function dateHours() {
  const date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  return hours;
}
function dateMins() {
  const date = new Date();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return minutes;
}
dataDay.innerHTML = day;
dataMonth.innerHTML = month;
dataWday.innerHTML = Wday;
dataHour.innerHTML = dateHours();
dataMin.innerHTML = dateMins();
setInterval(function () {
  dataHour.innerHTML = dateHours();
  dataMin.innerHTML = dateMins();
  dataTime.classList.add("_hiden");
}, 1000);
setInterval(function () {
  dataTime.classList.remove("_hiden");
}, 2000);

//infinite scroll
let htmlData;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    htmlData =
      '<div class="zen__row"> <div class="zen__item-wrap _size-big"> <div class="zen__item"> <div class="zen-card"> <div class="zen-card__header"> <a href="" class="link zen-card__chennel-info"> <div class="chennel-info__logo"> <div class="zen-ui-avatar _icon-size_36" style=" background-image: url(https://avatars.mds.yandex.net/get-zen-logos/246004/pub_592d3927e3cda8a0bf8d46bb_59f201dde86a9ec5337aa202/36x36_2x); background-color: rgb(240, 241, 245); width: 36px; height: 36px; " ></div> </div> <div class="chennel-info__title _black">ТАСС</div> </a> <div class="zen-card__controls"></div> </div> <div class="zen-card__content"> <div class="zen-card__image-wrap"> <div class="zen-card__image" style=" background-image: url(https://zen.yandex.ru/lz5XeGt8f/2V02Xz317/f36d43Z90/j4BwYMmQgMsdXrEx4wEU--Xb2itKcCNUTtXh3dSMs1wXMy5dBDZkGQ9jrJkLBapBTuV4p7S0Zf20tomczCz-fZaYJF3x4eXyQFvkLarEearM-tt-JyFmbXrl7MmtxfZIah8ibfVHZFgGKqmsqky7NDJYYfoRjG3A8Sp8eFCxQ5gXZKGtTMSQqiFqsUG-LUHT4LdC0nII1-2moalIQDSfCadn5o3ovtBMjm7B0J7Ia6C2bXRrkVUsWbUGiJRoqausC8SxWfjMJLPZgi2h-nVwN-w76iPWuDuBsiW50GB459lLezZVdC70WCKOIeDqkOs0eoGQp4n5_IWRmujolIXXdMekrcm8INS7Jb55cRK1QA9I2_7nmliHcd61nTwIhDvlk38-AWCCABiiilHgFth33Mbt-JP1KaxJGfYMKLz5h-g3_PE1HBzkP31qFV1GMayrvKMu9_rA_6FGxcm4qIh7RYd7NsFUFgwQcr5VTPJIFzQadTDPGXkELe32jOzwnYPkv8SB3XhEVKN5vtUlkt00QxirBgdS8IOx1r1N6DRUF52bM45BcHLIOK4aXawCRDeMOmU8ixVFtPlJGuQo-FEPGAcMdaXo_OCjTc7ROQrhpMc4z2IPUnjrUXKpkcy4MGehZ5uWNagucBwuYoVgysxryO4hZEvp1bgxYf48zITh24xbyHnt5LRkC4GaXW26bThvJENW59qsCyHaweFIPKAfVWv_dn1Qdngodoat8Fr4J9jKPUQ_zTnk3QlyzFyAFZtAd0xtNRQY2CdZsl2hFg20C3iL8idKeAOtuv010LA4L1mPwxZ90OIcLApG7XT6kJNgprm0D5VR7MnFHsywQPELCH-EfeFUdKh3ERJR1eKVNKOAe94jUvQTGdLN6RyAcA_lawsW_dzidDSG6jHsynhXuDIhvP9p6awFOT605ECJFwRrmNU1fDi0C51SidkaFUjDBAs2J8oIeymS3Vk0SIzr7fszgi0gYvQgemo5pH6I24w-haCbCU0EOZnayHQQ8R8Ik_S5teioDDcVQumhhqGU-3wj2osixDv5llnptFiwhxGnl9ph0LJQ_AL6zWQy5Gegkplse_n9ZLX5QjRYTOEjLEPsJSXkNABDzUYRRaYF6LsEP2qnKswnXfJJfSikOBPpP2P-YWhiHLx67rncSlxvRFbFbPvN4fwd8ZJITMyZs2QfaP1pZEzII8WSfXX64QD_kG9ev1I0i-F6XRG41Bh3SUeDkj2QlujQWmLBnHJ4a2j2eTiD_bEUcRWOMBR8AQsM5wQF4ZC8iB9Z3uVRfoUse2xvMgsy7C-RYrX5LPDYs5Fz14rJGObEsHZi6TxajOtcvkW0Z62lcCnpWgSs3HmTOE9ocbn8pCQfJcIFtSoFhCuAiyrrrkQjbWq5yTDsWIfZu0f2dTT6XEjmznXQ8pgTaEI1PH-RhTC94VKEePDxryj3nLkd5BzIW4VSJVXKfXRDAEOGi_aEj2Hu1Vk8TPSPzfuzCkl8eoh8CuJJdJbI99yWhegnxUmItSkG0LwYYW8st6CB0Shk3FeVVnFVvmlEd0yDDjs-TAsBRsXxTOxcrxUvgwJxqDYQcP7yCRhugG9g_kE0e015gMWZEjis7IH3lNuc5dE8uNAXWSJl2fZlvH-0I5aPFrgDaWK5rTggMBddb48GBWTGSHw-_q1URpRvsN5ByGvdKQDBCQKQdACF6zA32CVBnBjEP6UmESkSNUS_aKfmB6aEMznyWdXoNLi3UQ_j_rGYkhy8aoLxzDIY2yTSibALTekAhb1ivMh0ZY84_wS5DRBwADNxKnktmqk4x5y7ussyQB8Nrl0VgEQEL-3zi4IxSLY4NBZ6uVTKYPeQeokMf2VNnFWRGuREkBWHMPsU4RE46MAPuQYBzT496NMko_ZLPgCrvUrx1ZB4iD81w2smxbA2-LDWNv0cXiBjSM41EP_5ISDRFX4g1GCFc-y7zLElcIg4I0m2kX2Y); " ></div> </div> <div class="zen-card__title"> Вьетнамец попал в Россию и назвал 3 вещи, из-за которой наша страна не станет Европой </div> <div class="zen-card__text"> Несмотря на социалистический строй, во Вьетнаме давно развивается рыночная экономика. Успешные бизнесмены активно… </div> </div> </div> </div> </div> <div class="zen__item-wrap _size-small"> <div class="zen__item"> <div class="zen-card"> <div class="zen-card__header"> <a href="" class="link zen-card__chennel-info"> <div class="chennel-info__logo"> <div class="zen-ui-avatar _icon-size_36" style=" background-image: url(https://avatars.mds.yandex.net/get-zen-logos/246004/pub_5bc73bda17667700aaf44f9a_5edf8efe8d5c925baba78285/36x36_2x); background-color: rgb(240, 241, 245); width: 36px; height: 36px; " ></div> </div> <div class="chennel-info__title _black"> Яндекс.Новости </div> </a> <div class="zen-card__controls"></div> </div> <div class="zen-card__content"> <div class="zen-card__image-wrap"> <div class="zen-card__image" style=" background-image: url(https://zen.yandex.ru/lz5XeGt8f/tb20v0383/e8cb9djYW/x2ieoqoJDzZ3h4oqBI2qgv9ZZ0E1HVIP5WpuuGnCN76CGkDpvXjQbdHrODqkBFxJRQE3jXAKd9VRXrrBtioaSoZs1p-ScQ4zIoLDOxFIx9PqcFNQRFVOYtFDPuwB22fq6ysRhAVh0CzYqi0rOVFNEDm8LtDVMn_UHPJXISaq6vpfjE9vL10fV0uzilpZof-q-jX_uA0FFjbx7rpVvZpzc3oumPHJ9KiA4E5Fw5nVtSgZIcc5AWMaiZAyo4XmAl6WB4ATax91V7ZvB-rmeQ0q3mYxlxExVfImdW4-yeHy_8cCKpB51dBIMIQmsT9ZFTUM9Xk7jTXjYq1oFs_NGhbW8vPwG-sLuVfOa0sCot3VNsaqTZuVPSHKdsl2Ns3BxnOzhu7o5Zm4IFS8dsmbnfm9HOl9K5ml4yIBADo3Kfq6XlY7cEtTkx0DdrO3ygZpcdbG5qmjyWURil7Fis4NafIbT3ZKzLkJpEygXKoNr4HVgXTd0X_RAeP2LdjK582-NjbCd4BrB6cR1w4rD7ZazTmSJoKhqxVZgYoO7U5ewRmK5_PifpQNSdDAtGS-7SvN9akM2VlPTSHjnu14Vp9pRgIGYgcAQ6tPAQ92w7eiKgUlvkYWLS-R6aXywsW2wtnpfjc_ZlLsnU0AKGwodgH_8fFNeFWVy6U93_JNXIr7YfriEhKDlDdDdyFDUjvD6i6t_Xre-nUfoaHtDs61cqbFEepjQwbeZLV9fGCwYD6x2125VUjFSddlOc-KBUQC470-ilpa85x7l989g8Jrz76yqenGrhJx12URhe5-DcLW0fV-D9cCKvBV7bw87EDi8WdhzUWErRFfXem77uV4MkMtumLWfqeQV0PTLetmr_-SZvXhrjo2oWd9UcFyvtXq3iHxOseP-noQlVU43FhIqjlzVfm9tJ1JAyWh76KJaILnfe5-PpIzzLMHT52HtqufHjLV_drOgv1PLb2VcvL91tL9eWJDN1L2CHFp9HjEfIYx4wEVxYAxzaMtVV8eTUQa4y36igKG_xgzV1Mh0-aTXyIyzSXSxoLpNxUh0RbagTLutc1Kh8smfpBF-aSgJIQGQaslWSGoNckrzR1fMhV4VhMxih46CqsU72ezPaeGt1-W0p25hnIapbf5PR2mthUGaonBGid3bn5MAd24oNCo4vlTgeGhpNEB--0t1wIl8Gb75SoO1pYvkO9Hr40v3rcX2kZpVQpGGnmThRnFUlINtlqBjboHt4ZmPHlNtIzMQPoNG31lRQShzatdHTeu7cw-h5mC9n5yAwRLQ0uV63KXb9I64XmSLvopw-VVvVaGeWLyRZFOO3dyYmSJ6XjYwKw6NWeR0Vkc_XlXXQEP4m1YZpPNju7-XpukV3tz6Y8-E5PKJlWRXr6GoWdxxTHuRtlCnvmxwvvHskKc7Q1gDGTkMtV_1dUhhEVx09WBTz4RaL5jlRJGhm7bfGPDf2VDtq-b2jIBZUZS5jnLHR0lFgYNRjYh9Q63Z4IqcEWJiLxQeL61J3l1MezZ0QdJgXsupewyu-l-mraG0_Afn_Ndq35DQwZexTEiGuI9O8nF2ZqmDbIaTXHuA7O-dsR5YQysqERmVfPZ7SlEVdErSVn_ElXERicBgqYiLitIu38nvaPeI7dSyk05eh6G8QvBbbGeIu1C0j1tWqtfDlqc6XmszLw4AknLBdGtYP2Bw5Wd67oxoNo3bRri2l4bABMjIxE_dqeXQnL5OSbWdilfhV2Jfg51mtJRSdrLc-5eXBV17NCIRCL9I2mVVUT9YaO5xQuuvZBa7_mqtjoOQ2xP27eBu3I79y5OLWU6umpta11lpe4GDW7OIVE6Jwuu0vzJdfDcqFSG6X_t1R2M_U0rsdELujnMukttMo7SIld861OrvdPaIxtOsuWJDlb-IUOFKSniSo1eutFJzktjOiL43RVA9IhM9lGz6YHFsEGpL20B745JCOb3PfL-NuIftJtPyzmzvi9DroL4); " ></div> </div> <div class="zen-card__title"> "Большой брат еще не сжал клешни". Какое будущее готовят автоперевозчикам </div> <div class="zen-card__text"> Цифровизация поможет налоговой взять автоперевозки под абсолютный контроль: инспекторы будут знать о каждом литре… </div> </div> </div> </div> </div> </div>';
    resolve(htmlData);
  }, 100);
});
promise.then((data) => {
  htmlData = data;
});

window.addEventListener("scroll", function () {
  let zenContent = document.querySelector(".zen__content");
  let zenContentHeight = zenContent.offsetTop + zenContent.offsetHeight;
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let y = scrollY + windowHeight;
  if (y >= zenContentHeight) {
    zenContent.innerHTML += htmlData;
  }
});
