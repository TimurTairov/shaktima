import { Metadata } from 'next'
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: 'Ловушка нео-адвайты | блог',
  description: 'Как не попасть в ловушку нео-адвайты'
}

const NeoAdwayta = () => {
  return (
    <Container >
      <h1 className="textColor w-full text-center text-2xl font-semibold my-2">Как не попасть в ловушку поверхностной Адвайты</h1>
      <div className=" mx-2 mt-5 ">
        <p className="mt-5 indent-5 md:indent-10">
          Адвайта — это мощнейшее мировоззрение, я бы сказал, это самое мощное мировоззрение, которое может быть вообще во вселенной для человека или любого
          существа. Это учение практикуют не только люди, но и боги, асуры, сиддхи, риши, дакини и другие существа.
        </p>
        <p className="mt-5 indent-5 md:indent-10">
          И у каждой традиции есть свое особое понимание Пути. И я не имею ввиду только адвайта-веданту Шри Шанкарачарьи. Сюда можно отнести и тантрическую
          адвайту кашмирского шиваизма и адвайту тантрического шактизма, учения сиддхов-авадхутов традиции сахаджья, а также буддийские и бонские
          недвойственные учения. Все эти учения недвойственные и обладают огромной трансформирующей силой, даже когда просто их слышишь. Они быстро дают готовой
          душе сильную внутреннюю веру, ясность, радость, свободу и понимание. Они дают абсолютное видение, дают возможность увидеть краешком глаза, услышать
          краешком уха, коснуться дыхания Абсолюта. Однако есть и большой соблазн неверной, поверхностной трактовки воззрения адвайты и ошибочной опоры на
          подобные учения в относительной жизни. Когда это происходит, мы называем это «нигилизмом» — формой заблуждения, ошибочного понимания. В чем это может
          проявиться?
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <p>Например, когда мы под предлогом воззрения адвайты:</p>
          <div><p className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>1</p> Отрицаем важность Бога, Божественной милости и благодати (ануграха шакти), веры, преданности, прибежища, гуру, парампары и традиции.</div>
          <div><p className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>2</p> Когда мы отвергаем закон кармы и необходимость накопления заслуг (саттвической энергии) через богослужения, раскаяние, анализ, хорошее поведение,
            поклонение, паломничества, совершение подношений, пожертвований, служение святым и священным объектам, таким как дхарма и сангха.</div>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>3</span> Отвергаем важность зарождения желания Освобождения, «мумукшуттвы», постоянной личной садханы, приложения усилия, тапаса, самодисциплины, умеренной
            или аскетичной жизни, проведения длительных затворов. </p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>4</span> Отвергаем принятие духовных авторитетов, важность дикши, обучения у гуру, связи гуру-ученик, самаи, благодатной силы гуру-таттвы. </p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>5</span> Отвергаем важность обучения, опоры на священные тексты, возможность нисхождения благодати через священные тексты (шастра-крипа) и переоцениваем
            опору только на внутренние опыты.</p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>6</span> Отвергаем постепенное восхождение по духовному Пути через ежедневную практику. </p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>7</span> Отвергаем божественную иерархию, например, более высокое положение богов, риши, сиддхов, святых.</p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>8</span> Отвергаем возможность понимания знаков продвижения по духовному Пути и проверки их.</p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>9</span> Отвергаем духовную эстетику, важность атмосферы, коллективные ритуальные практики, поклонение и любые внешние формы практики, хорошо помогающие начинающим. </p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>10</span> Отвергаем важность хорошей компании (садху, сангха), общинную жизнь, сотрудничество, ашрамы, храмы, статусы и уклады жизни, эффективно помогающие
            нам на Пути; пренебрежительно относимся к санньяси, к монашеской жизни в целом, вместо уважения. </p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>11</span> Отвергаем важность самаи, любви, сострадания, духовную этику, важность воспитания и очищения души через поклонение, паломничества, покаяние,
            смирение, служение и выработку качеств садху.</p>
          <p><span className='bg-indigo-600 dark:bg-indigo-400 text-gray-200 dark:text-gray-800 size-6 inline-flex justify-center items-center p-1 rounded-full'>12</span> Отвергаем какую-либо возможность изменить внешние условия на более полезные для духовной жизни, считая, что одного недвойственного воззрения
            достаточно.</p>
        </div>
        <p className="mt-5 indent-5 md:indent-10">
          Если мы все это отвергаем просто под предлогом того, что это якобы не имеет отношения к самой адвайте, это означает, что нам не удалось понять точку
          зрения святых и мы запутались в воззрении адвайты, вернее, не в самом воззрении, а в том, как его правильно и с пользой применять в конкретно нашей
          жизни.
        </p>
        <p className="mt-5 indent-5 md:indent-10">Итак, если вы знаете это и помните эти наставления, вы сможете избежать эти нигилистические ловушки.</p>
        <p className="mt-5 text-right">Из сатсанга Шри Гуру Свами Вишнудевананда Гири Махараджа</p>
      </div>
    </Container>
  )
}

export default NeoAdwayta
