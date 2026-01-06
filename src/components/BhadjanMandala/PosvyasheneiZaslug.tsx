import MyAccordion from './MyAccordion'

const PosvyasheneiZaslug = () => {
  return (
    <div className='w-full mt-5 md:mt-7 lg:mt-10 flex justify-center'>
      <MyAccordion id='PosvyasheneiZaslug' title='Посвящение заслуг' big className='max-w-xl'>
        <div className="mt-5 lg:mt-10 w-full flex flex-col gap-5 font-light">
          <div className="w-full flex flex-wrap items-center justify-center py-5">
            <audio
              controls
              controlsList="nodownload"
              src="/sounds/BhadjanMandala/PosvyasheneiZaslug.mp3"
              className="w-full"
            ></audio>
          </div>

          <p className="font-medium">
            Пусть все живые существа вступят на путь Дхармы
            благодаря заслуге, обретенной мной.
          </p>
          <p className="font-medium">
            Пусть сколько бы ни было страдающих душой и телом во всех
            сторонах света, благодаря моей заслуге они обретут
            океан счастья и радости.
          </p>
          <p className="font-medium">
            Пусть живые существа, как бы ни были больны, быстро
            избавятся от своих болезней, и пусть все болезни живых
            существ никогда не появляются снова.
          </p>
          <p className="font-medium">
            Благодаря этим моим заслугам пусть все живые существа
            оставят все свои пороки и вступят на путь Дхармы.
            Пусть они никогда не расстаются с мыслью о Просветлении.
            Пусть все чувствующие существа живут неизмеримо долго.
          </p>
          <p className="font-medium">
            Пусть во всех храмах и монастырях читают и декламируют
            священные тексты. Пусть сангха всегда будет в гармонии,
            и цели ее будут достижимы.
          </p>
          <p className="font-medium">
            Пусть монахи, стремящиеся практиковать, найдут
            уединенные места и, отбросив все колебания,
            созерцают свой Атман.
          </p>
          <p className="font-medium">
            До тех пор, пока существует небо, пусть живые существа
            пребывают во благе. До тех пор пусть и я буду жить, чтобы
            рассеивать страдания существ.
          </p>
          <p className="font-medium">
            Да будет драгоценная сангха пребывать в согласии, хранить
            чистоту обетов и самайя и будет богатой духовными
            достижениями.
          </p>
          <p className="font-medium">
            Да будет у меня, идущего по пути йогина, безупречная
            самайя, и да исполнятся все мои желания.
          </p>
          <p className="font-medium">
            Да войдут все живые существа во врата высших
            недвойственных Учений и достигнут бескрайнего
            царства Нирваны.
          </p>
        </div>
      </MyAccordion>
    </div>
  )
}

export default PosvyasheneiZaslug