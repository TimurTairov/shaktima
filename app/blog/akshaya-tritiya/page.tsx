import { Container } from "@/components/Container"
import Image from "next/image"
import at from '@/public/blog/pngwing.com (17).webp'

const page = () => {
  return (
    <Container>
      <h1 className="textColor w-full text-center text-2xl font-semibold my-2">Акшая тритья</h1>
      <div className="mt-5 flex justify-center">
        <Image src={at} alt="Акшая Тритья" className="" />
      </div>
      <div className="mt-14 flex flex-col gap-4 indent-5 md:indent-10">
        <p>
          Акшая Тритья, также известный как Акти или Акха Тидж, – ежегодный индуистский весенний праздник. Он приходится на третий титхи (лунный день) светлой половины (Шукла Пакша) месяца Вайсакха. Индусы в Индии отмечают его как благоприятный день, он означает "третий день бесконечного процветания".
        </p>
        <p>
          На санскрите слово akshaya означает "никогда не уменьшающийся" в смысле "процветание, надежда, радость, успех", а tritiya означает "третья фаза луны". Он назван в честь третьего лунного дня весеннего месяца Вайсакха в индуистском календаре.
        </p>
        <p>
          Акшая Тритья считается индуистами во многих регионах Индии и Непала благоприятным для новых предприятий, браков, дорогих инвестиций, таких как золото или другое имущество, и любых новых начинаний. Это также день поминовения усопших близких. Этот день является значимым для женщин, замужних и незамужних, которые молятся о благополучии мужчин в своей жизни или тех, с кем они могут обручиться в будущем. После молитвы они раздают прорастающий грамм (ростки), свежие фрукты и индийские сладости. Если Акшая Тритья выпадает на понедельник (Рохини), считается, что праздник будет еще более благоприятным. Пост, благотворительность и помощь другим в этот день – еще одна праздничная практика.
        </p>
        <p>
          Праздник связан с вручением Акшая Патры Драупади богом Кришной во время визита многочисленных мудрецов, включая мудреца Дурвасу. Во время своего изгнания в лесу пандавы голодали из-за недостатка пищи, а их жена Драупади страдала от этого, поскольку не могла оказать обычное гостеприимство гостям. Юдхиштхира, старший из братьев пандавов, помолился богу Сурье, и тот дал ему эту чашу, которая должна была оставаться полной до тех пор, пока Драупади не обслужит всех их гостей. Во время визита Дурвасы Кришна сделал для Драупади эту чашу неистощимой, чтобы волшебная чаша под названием Акшая Патра всегда оставалась полной пищей по их выбору, даже чтобы насытить всю вселенную, если потребуется.

        </p>
        <p>
          Индусы считают Акшая Тритью днем рождения Парашурамы, шестого аватара бога Вишну. Те, кто отмечает этот праздник в честь Парашурамы, иногда называют его Парашурама-джаянти. В качестве альтернативы некоторые посвящают свое почитание Кришне, восьмому аватару Вишну.
        </p>
        <p>
          Согласно одной из легенд, мудрец Вьяса начал читать индуистский эпос "Махабхарата" богу Ганеше в день Акшая Тритья. По другой легенде, в этот день на землю спустилась река Ганга. Храм Ямунотри и храм Ганготри открываются по благоприятному случаю Акшая Тритья во время паломничества Чота Чар Дхам, после того как они закрываются во время обильных снегопадами зим в гималайских регионах.
        </p>
        <p>
          Другое событие, связанное с этим днем, – визит Судамы к своему другу детства Кришне в Двараку, когда он получил в качестве благодеяния неограниченное богатство. Считается, что Кубера был назначен богом богатства в этот благоприятный день.
        </p>
        <p>
          В индийском штате Одиша Акшая Тритья празднуется во время начала посева риса для последующего сезона харифа. День начинается с ритуального поклонения матери-земле, быкам, другому традиционному сельскохозяйственному инвентарю и семенам, которые фермеры просят благословить хороший урожай. В этот день в Пури также начинается строительство колесниц для празднеств Ратха-ятры в храме Джаганнатха.
        </p>
        <p>В телугуязычных штатах Телангана и Андхра Прадеш праздник ассоциируется с процветанием, и женщины покупают золото и драгоценности.</p>
        <p>
          Этот день очень благоприятен для тех, кто покупает золото и серебро, покупает рис, кладет деньги на банковский счет, жертвует для бедных людей, покупает любые новые вещи или сосуды, посещает известные храмы.
        </p>
      </div>
      <div className="mt-14 flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4FiyyNgfnvs?si=4119QqIMTxYGOFGb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-md"></iframe>
      </div>
    </Container>
  )
}

export default page