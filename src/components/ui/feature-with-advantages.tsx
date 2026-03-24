import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Исследование</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Направления анализа
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Проект охватывает ключевые аспекты влияния социальных сетей на психологию и поведение подростков.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Психологическое здоровье</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Связь между использованием соцсетей и тревожностью, самооценкой подростков.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Кибербуллинг</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Масштабы травли в сети и её последствия для жертв и свидетелей.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Учёба и концентрация</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Как бесконечная лента влияет на успеваемость и способность удерживать внимание.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Зависимость</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Механизмы формирования цифровой зависимости у подростков.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Образ тела</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Влияние идеализированного контента на восприятие собственной внешности.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Социализация</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Как онлайн-общение меняет навыки реального взаимодействия.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }