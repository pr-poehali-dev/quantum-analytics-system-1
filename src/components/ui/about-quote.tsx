import DotPattern from "@/components/ui/dot-pattern"

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        {/* Corner decorations */}
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 mx-auto max-w-5xl rounded-[40px] py-6 md:p-10 xl:py-20">

          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              Этот проект исследует, как социальные сети — ВКонтакте, TikTok, Instagram и YouTube — формируют мировоззрение, самооценку и поведение современных подростков. Используя научные источники, опросы и анализ данных, я попытался разобраться: соцсети — это инструмент развития или угроза психологическому здоровью?
            </p>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
              Главный вывод: однозначного ответа нет. Всё зависит от осознанности пользователя, цифровой культуры и поддержки взрослых. Цель проекта — не запретить соцсети, а научить подростков использовать их во благо.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}