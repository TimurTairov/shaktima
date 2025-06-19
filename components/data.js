import Image from "next/image";
import { LiaMountainSolid } from "react-icons/lia";
import { GiHeraldicSun } from "react-icons/gi";
import { FaDharmachakra } from "react-icons/fa6";
import { HiFaceSmile } from "react-icons/hi2";
import { IoBook } from "react-icons/io5";
import svg1 from '@/public/svg/chakra1.svg'
import svg2 from '@/public/svg/chakra2.svg'
import svg3 from '@/public/svg/lotus.svg'
import svg4 from '@/public/svg/yoga-ruka.svg'
import svg5 from '@/public/svg/snake.svg'
import svg6 from '@/public/svg/bull2.svg'
import svg7 from '@/public/svg/medicine.svg'
import svg8 from '@/public/svg/shiva.svg'

import guru1 from "@/public/guru/guru1.webp"
import guru2 from "@/public/guru/guru2.webp"
import guru3 from "@/public/guru/guru3.webp"



const benefitOne = {
  title: "Наш Учитель",
  desc: "Наш гуру - Свами Вишнудевананда Гири является реализованным мастером адвайта-веданты.",
  images: [
    {
      original: "https://sun9-77.userapi.com/impg/_IZhohXV7KqKcBEhXnVGj4jxLYRaLJe6sVlLsA/NXIKBj5V2l8.jpg?size=600x800&quality=95&sign=83c801386e1148bf077bf362396c02e3&type=album",
    },
    {
      original: "https://sun9-35.userapi.com/impg/9uBiuNx8ggRPCBLUhs7T6K6-oTNGoqgd3ifcKA/iP01QSN0V4A.jpg?size=600x800&quality=95&sign=3691999da478222df1644d3aa3da5f16&type=album",
    },
    {
      original: "https://sun9-68.userapi.com/impg/JmRrJtdL_lCl68BT3mxVa5i-DkSjXOFgxvaRzA/NXXqxc-UJ5A.jpg?size=600x800&quality=95&sign=5bd6794313ea9f053a2c3bed133c3471&type=album",
    },
    {
      original: "https://sun9-62.userapi.com/impg/a46HHzbiq_JRSTrYaU2HwKe46nb-U2GuPCu52A/nfPlRwmEQuo.jpg?size=600x800&quality=95&sign=b6c681e3c891430aeb22a7178670c3fd&type=album",
    },
    {
      original: "https://sun9-1.userapi.com/impg/64PJPe0YhUmWbN_1js8KAxIQfJHwR3cF08Hf1A/rVkQV__uobo.jpg?size=600x800&quality=95&sign=911ededb1d421c9725d2fb1dc1b67263&type=album",
    },
  ],
  bullets: [
    {
      title: "Духовный учитель",
      desc: "Имеющий полномочия инициировать в саннясу в традиции адвайта-веданты и йоги, садху, реализованный мастер-джняни в линии адвайта-веданты, философ, теолог, писатель, паломник-путешественник, имеющий учеников монахов и мирян по всему миру",
      icon: <HiFaceSmile />,
    },
    {
      title: "Автор более 50 книг и нескольких сотен статей по философии йоги",
      desc: "Наиболее значительные и известные труды и книги: двухтомник «Сияние драгоценных тайн лайя-йоги», «Песни пробужденного», «Вселенная джняни», «Духовная алхимия: путь внутреннего аскетизма», «Моя жизнь в Боге».",
      icon: <IoBook />,
    },
    {
      title: "Обучает",
      desc: "Джняна, раджа, бхакти, карма-йоге, кундалини, лайя-йоге, учениям ануттара-тантры сиддхов.",
      icon: <FaDharmachakra />,
    },
  ],
};

const benefitTwo = {
  title: "Наша традиция",
  desc: `В нашей традиции две основные линии передачи.`,
  images: [
    {
      original: 'https://sun9-1.userapi.com/impg/SN4kGJ1YeTxUg9Nt3YFNQQ7CAOD_c2YNcjMLGQ/f6dWujT9Qh8.jpg?size=600x800&quality=95&sign=0e07fc80eb743d66280d70835e79bf14&type=album',
      description: 'Общая линия передачи',

    },
    {
      original: 'https://sun9-41.userapi.com/impg/kXUFn0S9UxlTFdxGdcC-uY7NoJQp838q8KOVYw/tNCnN7r1mbM.jpg?size=600x800&quality=95&sign=38256a2dd5c380cc2e7f4d897eb9df11&type=album',
      description: 'Свами Вишнудевананда Гири',

    },
    {
      original: 'https://sun9-33.userapi.com/impg/DRdcCAJnFDBSjrbyOQdMFCKRGdlvln1rj5oT-Q/NyF1qDnnKWc.jpg?size=600x800&quality=95&sign=509b90386489533e00742617a3dbf64b&type=album',
      description: 'Свами Брахмананда',

    },
    {
      original: 'https://sun9-62.userapi.com/impg/w7AeHuak-sgO8Wq253N2tMZZk1Rh0GKwBcA2Xw/TkeSYY0eGaU.jpg?size=600x800&quality=95&sign=43bb81b77a6e1978888a010eb284c9a9&type=album',
      description: 'Шри Ади Шанкарачарья',

    },
    {
      original: 'https://sun9-53.userapi.com/impg/gh-V-JIijUDDbE5ZZSDCwzyimhFgQRZXaToG0w/efj1MmheIQU.jpg?size=600x800&quality=95&sign=d269833053af468639037deee1ca7e09&type=album',
      description: 'Бхагаван авадхута Даттатрейя',

    },
    {
      original: 'https://sun9-18.userapi.com/impg/3AlbBpcwPkI-AlzeLJ5vzJdu-Jy3545zIvvW0A/tJUI8ASxSyg.jpg?size=600x800&quality=95&sign=486753f3642723279319e181a221f41d&type=album',
      description: 'Риши Васиштха',

    },
    {
      original: 'https://sun9-4.userapi.com/impg/ppN9TsbORqNSwb85AD4u_IxxEe38FPLu_8Rfbw/rdBJCEvwP9w.jpg?size=600x800&quality=95&sign=86bfca5deeaf443785ec6679189b8ec5&type=album',
      description: 'Северная линия передачи',

    },
    {
      original: 'https://sun9-5.userapi.com/impg/7WKSl7uQr2SsZDZUALhK1tWCsYVbXy0mx6vd0g/FmqalOIRf7c.jpg?size=600x800&quality=95&sign=c49cb69d96f717790672429b08eba37a&type=album',
      description: 'Южная линия передачи',

    },
  ],
  bullets: [
    {
      title: "Северная линия передачи",
      desc: "Восходит к древнему монаше­скому ордену Джуна акхара, основанному тысячу лет назад Шри Шанкарачарьей в традиции десяти имен (дашанами санньяса). Нашего Гуру в эту традицию посвятил Сомнатх гири махарадж (Пайлот Бабаджи). От Пайлота Бабаджи линия преемственности ведет к его гуру-сиддху Хари бабе. От него - к просветленному мудрецу Аватар бабе, и далее через линию гуру к самому Шри Шанкарачарье. От Шри Шанкарачарьи линия преемственности ведет к его гуру Говиндападе, а от него - к Гаудападе. От Гаудапады она идет к Шукадеве, а от него к самому риши Вьясе, автору Вед. От Вьясы линия преемственности восходит к риши Васиштхе, сыну Творца и к гималайским мудрецам - бессмертному воплощению-аватару трех богов авадхуте Даттатрейе, святому Нараде и вечно юному Санаткумару, рожденному из ума Брахмы. Наконец на вершине этой древней линии преемственности пребывают великие боги Санатана Дхармы - Брахма, Вишну и Шива. ",
      icon: <LiaMountainSolid />,
    },
    {
      title: "Южная линия передачи",
      desc: `Ведет к южноиндийской традиции бессмертных йогов-сиддхов и восходит через Свами Вишнудевананду Гири к знаменитому в южной Индии йогу-чудотворцу Свами Шива Прабхакаре (гуру авадхуте Брахмананде) из штата Керала. От него она восходит к его учителю сиддху-риши Памбатти. От риши Памбатти она восходит к риши Сатьямуни, от Сатьямуни — к риши Нанди Девару, от Нанди Девара — к самому Шиве. Риши Нанди Девар достиг сварупа-самадхи в г. Каши (Бенарес). Его учителем был Сам Шива, а учениками Нанди Девара также являются риши Тирумулар, Патанджали, Дакшинамурти, Ромариши.`,
      icon: <GiHeraldicSun />,
    },
  ],
};

const benefitThree = {
  title: "Медитация Сиддхов",
  desc: `Это уникальная практика, основанная на древних учениях. Она помогает освободить ум от напряжения, настроиться на позитивные вибрации и открыть внутренние ресурсы.`,
  images: [
    // {
    //   original: 'https://sun9-5.userapi.com/impg/yIgr3OFnFscEX5ogaph7IQiN_nYOWcZAcCz8bg/CjFqUysiXjo.jpg?size=600x800&quality=95&sign=9f1c4d7ec7fef2a5721ed9dc4dabb550&type=album',
    // },
    {
      original: 'https://sun9-69.userapi.com/impg/cvh7RuE6NALz4_xUkXZyoq-QX7_Rma_OvPfzMg/sY_C5jCQ-UM.jpg?size=600x800&quality=95&sign=ee5aba62169b8a94281407f160023edb&type=album',
    },
    // {
    //   original: 'https://sun9-2.userapi.com/impg/p2o4qsu0okYIF_vlPg6WNbUWmoNioEyETw0Bng/Exbo29blFXQ.jpg?size=600x800&quality=95&sign=4e7873171deba69e3efec7ddee0e27b2&type=album',

    // },
    {
      original: 'https://sun9-38.userapi.com/impg/WzUc_aXqaazx50oWEZiVLEN-InuOmyTLpMsa5A/OTvOEXmOnZA.jpg?size=600x800&quality=95&sign=ed82a3cd5841fd9558832eabf84a26fd&type=album',
    },
    // {
    //   original: 'https://sun9-68.userapi.com/impg/xWVNREwpOfIFb8Ckqmr8i2p4DppuLSG_d4RnXw/hko6pACZGDo.jpg?size=600x800&quality=95&sign=c31494bd3f9545373e28b411080fcfb2&type=album',

    // },
    // {
    //   original: 'https://sun9-8.userapi.com/impg/xBVad3CD9A7mRSpm6ksWNIb8Vs131MSuIdPLKQ/RGTY7JpT96Y.jpg?size=600x800&quality=95&sign=da4a794e68cc4407baa6a4a51e1d7693&type=album',
    // },
    // {
    //   original: 'https://sun9-39.userapi.com/impg/tPqoLIbCnqTXUx__7dh_4hNzNOJpp-1A17RjVg/hLczNvCr2KY.jpg?size=600x800&quality=95&sign=8e727d06be12baa2c2462a6f194653a2&type=album',

    // },
    {
      original: 'https://sun9-20.userapi.com/impg/jvGMN1mouiHLRhNPLVDtBW-9ZvTd-gRGVkAsww/Hq1VrZxM1to.jpg?size=600x800&quality=95&sign=c57abab3bfd8d0a5a653e3db2399eb81&type=album',
    },
    // {
    //   original: 'https://sun9-25.userapi.com/impg/G_skGtW-MfHsDTFOf9FHcYj3bsgtNSc41Sy13w/D3YlGl8IB7Q.jpg?size=600x800&quality=95&sign=bf3af24f2d38a1545b36bf9cf1cc6530&type=album',

    // },
    // {
    //   original: 'https://sun9-80.userapi.com/impg/Nz6HnjTD-WsHmJKzjCAey0iltBjps1UhWqiSxw/chnKvBjPUHk.jpg?size=600x800&quality=95&sign=2a9429312d7e764d4ab2dbee6f2112d4&type=album',
    // },
    // {
    //   original: 'https://sun9-37.userapi.com/impg/L3iJoFBYkkrn6vPJi0QcGWKg_iIw6ABX82BrEg/64xy24Bbu5k.jpg?size=600x800&quality=95&sign=e11a42ba8decad0a8d5740ec5113a0af&type=album',
    // },
    // {
    //   original: 'https://sun9-23.userapi.com/impg/aM-cd1eW8cZ_ehEm5A3dnkdGjgaSIowSp1idEw/42pOBi64OiI.jpg?size=600x800&quality=95&sign=ab2a9d6be15be8f710f5977bd5c5f7d0&type=album',
    // },
    // {
    //   original: 'https://sun9-16.userapi.com/impg/ZGOsv6VcSosSny_EDs2CpriF3XdNkQIGR0mYow/W12PNNVIFRU.jpg?size=600x800&quality=95&sign=7dd5502138edc3441e56e45502b38aa1&type=album',

    // },
  ],
  bullets: [
    {
      title: "Концентрация",
      desc: "Улучшите навык концентрации внимания, который полезен не только в медитации, а также в учебе, работе или бизнесе",
      icon: <Image src={svg1} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Осознанность",
      desc: `Откройте новые уровни осознанования себя`,
      icon: <Image src={svg2} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Умиротворение",
      desc: `Научитесь снимать стресс и находить внутренний покой`,
      icon: <Image src={svg4} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Единомышленники",
      desc: "Получите поддержку единомышленников и взможность обмениваться опытом",
      icon: <Image src={svg3} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },

  ],
};

const benefitFour = {
  title: "Махасиддхи",
  desc: `Линия передачи из южной Индии напрямую связана с 18 тамильскими махасиддхами.`,
  images: [
    {
      original: 'https://sun9-78.userapi.com/impg/6LNmnQHx-9qE_oaFL9je7OKjhsaO1wdWiIvXoQ/IMX0qiH_7bc.jpg?size=600x800&quality=95&sign=d048403e52007caef6e6b143a641c596&type=album',
      description: 'Шива',
    },
    // {
    //   original: 'https://sun9-29.userapi.com/impg/DT0ceVclp_qZCM-0H-KMi9QR7_6Y9e8V9NFV8A/9i9OxSQkXOw.jpg?size=600x800&quality=95&sign=bcebd8d0610a655e4db14f5697133e50&type=album',
    //   description: 'Свами Брахмананда',
    // },
    {
      original: 'https://sun9-33.userapi.com/impg/N39E76YsnqRrVk6mZHirC1CzQZ8E_i9Ct4F7gw/ltHy86NLvI8.jpg?size=600x800&quality=95&sign=9d88accfdee5762b1e342b1f47aa2e62&type=album',
      description: 'Свами Брахмананда',
    },
    {
      original: 'https://sun9-79.userapi.com/impg/6aK7uRmUvQhlbzQSzanVTUluuvYt74IKvg5arg/XarbcRXw7Tw.jpg?size=600x800&quality=95&sign=f705f7f963fdf32498d8e0f0fa0b499e&type=album',
      description: 'Махасиддха Памбатти',

    },
    {
      original: 'https://sun9-63.userapi.com/impg/6dIMbFrOSsbEbn-nQ9gjtVt-_WsvsXU9NLSfsQ/wHfW3Ubv420.jpg?size=600x800&quality=95&sign=ab3b414bcc10ddc663255ce0e4a2439c&type=album',
      description: 'Махасиддха Сатьямуни',

    },

  ],
  bullets: [
    {
      title: "Шива Прабхакара Сиддхайоги Свами Брахмананда",
      desc: "Величайший сиддх, ученик Мастера традиции сиддхов Шри Памбатти, Гуру в традиции Авадхутов. Свами Брахмананда редко общался с людьми. Он был юродивым, радикальным, отрешенным от мирского, Мастером «безумной мудрости», безразличным к мнению других о нем, и как все садху ни под кого не подстраивался. Он не слишком любил говорить о себе, своей жизни, считая, что все это не полезно для садханы, а только отвлекает от самоисследования.",
      icon: <Image src={svg8} alt='svg' className="w-8 h-8 text-indigo-50" />,
    },
    {
      title: "Памбатти",
      desc: `Сиддхар Памбатти – великий святой южной Индии, последний из линии 18 тамильских махасиддхов, широко известных как в самой Индии, так и за ее пределами.`,
      icon: <Image src={svg5} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Сатьямуни (Саттаймуни)",
      desc: `Саттаймуни - один из 18 махасиддхов, инициированный Нанди-деваром и Дакшина-мурти. Саттаймуни считается экспертом в медицине, особенно в области омоложения. Его труды изучаются и используются по сей день.`,
      icon: <Image src={svg7} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },
    {
      title: "Нанди Девар",
      desc: "Нанди Девара называют первым гуру и основателем линии 18 тамильских махасид­дхов. Он передал знания, полученные от Шивы многим ученикам таким, как риши Тирумулар, Патанджали, Дакши­намурти, Ромариши и Сатьямуни.",
      icon: <Image src={svg6} alt='svg' className="w-7 h-7 text-indigo-50" />,
    },

  ],
};



export { benefitOne, benefitTwo, benefitThree, benefitFour };
