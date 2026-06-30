import { useState } from 'react';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    icon: 'Calculator',
    title: 'Бухгалтерское обслуживание',
    text: 'Ведение учёта, отчётность в налоговую и фонды, расчёт зарплаты и налогов под ключ.',
    grad: 'from-violet-600 to-fuchsia-600',
  },
  {
    icon: 'Settings2',
    title: 'Настройка 1С: Бухгалтерия',
    text: 'Установка, обновление и точная настройка 1С под вашу деятельность и систему налогообложения.',
    grad: 'from-fuchsia-600 to-pink-600',
  },
  {
    icon: 'Boxes',
    title: 'Настройка 1С: Склад',
    text: 'Складской учёт, номенклатура, остатки и движение товаров — порядок в каждой позиции.',
    grad: 'from-pink-600 to-orange-500',
  },
];

const stats = [
  { value: '12+', label: 'лет в профессии' },
  { value: '300+', label: 'довольных клиентов' },
  { value: '100%', label: 'сдача отчётности в срок' },
];

const faq = [
  {
    q: 'Какие услуги по бухгалтерии вы оказываете?',
    a: 'Полное сопровождение: ведение бухгалтерского и налогового учёта, расчёт зарплаты, подготовка и сдача отчётности в ФНС, СФР и Росстат, восстановление учёта и консультации по выбору системы налогообложения.',
  },
  {
    q: 'Помогаете ли с настройкой 1С с нуля?',
    a: 'Да. Устанавливаем и настраиваем 1С под вашу деятельность: план счетов, учётную политику, реквизиты организации, обмен с банком и торговым оборудованием. После настройки обучаем работе.',
  },
  {
    q: 'Что включает настройка складского учёта в 1С?',
    a: 'Заводим номенклатуру и единицы измерения, настраиваем складские ордера, партионный учёт, инвентаризацию и контроль остатков. Вы видите реальное движение товаров в любой момент.',
  },
  {
    q: 'Работаете с ИП и ООО на разных системах налогообложения?',
    a: 'Да — УСН (доходы и доходы-расходы), патент, ОСНО. Подберём оптимальный режим и корректно отразим всё в учёте и в 1С.',
  },
  {
    q: 'Можно ли работать удалённо?',
    a: 'Конечно. Документы передаём через защищённые каналы и облако, настройку 1С выполняем удалённо. Личное присутствие не требуется.',
  },
  {
    q: 'Как начать сотрудничество?',
    a: 'Оставьте заявку — проведём бесплатную консультацию, оценим объём задач и предложим прозрачную стоимость без скрытых платежей.',
  },
];

const Index = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="min-h-screen bg-[#fdfcff] font-sans text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-white/40">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid place-items-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 text-white font-display font-extrabold text-lg shadow-lg shadow-fuchsia-500/30">
              Б
            </span>
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight">
              Борщевская
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-fuchsia-600 transition-colors">Услуги</a>
            <a href="#about" className="hover:text-fuchsia-600 transition-colors">О нас</a>
            <a href="#faq" className="hover:text-fuchsia-600 transition-colors">Вопросы</a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 hover:bg-slate-700 transition-colors"
          >
            Связаться
            <Icon name="ArrowUpRight" size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 md:pt-44 pb-24 md:pb-32 bg-grid overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-400/30 blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-400/25 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-orange-300/30 blur-3xl animate-blob [animation-delay:6s]" />

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full glass border border-white/60 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Бухгалтерия и 1С под ключ
            </span>
            <h1 className="mt-7 font-display font-black tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
              Порядок в учёте
              <br />
              и <span className="text-gradient">в вашей 1С</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Бухгалтерское обслуживание, настройка 1С Бухгалтерии и Складского учёта.
              Берём рутину на себя — вы развиваете бизнес.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-[length:200%_auto] animate-gradient-shift text-white font-semibold text-base px-8 py-4 shadow-xl shadow-fuchsia-500/30 hover:scale-105 transition-transform"
              >
                Получить консультацию
                <Icon name="Sparkles" size={18} />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-base px-8 py-4 hover:border-slate-400 transition-colors"
              >
                Наши услуги
                <Icon name="ArrowDown" size={18} />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl border border-white/60 py-5 px-2">
                  <div className="font-display font-black text-3xl md:text-4xl text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
              Услуги
            </span>
            <h2 className="mt-3 font-display font-black text-4xl md:text-5xl tracking-tight">
              Всё для вашего учёта
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl bg-white border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.grad} text-white shadow-lg`}
                >
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.text}</p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 px-8 md:px-16 py-16 md:py-20">
            <div className="absolute -top-20 -right-10 w-96 h-96 rounded-full bg-fuchsia-600/30 blur-3xl animate-float" />
            <div className="absolute -bottom-24 -left-10 w-96 h-96 rounded-full bg-violet-600/30 blur-3xl animate-float [animation-delay:2s]" />
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight leading-tight">
                  Спокойствие <span className="text-gradient">в каждой цифре</span>
                </h2>
                <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                  Мария Борщевская и команда — профессионалы с многолетним опытом в бухгалтерии
                  и автоматизации на 1С. Мы понимаем малый и средний бизнес и говорим с вами
                  на простом языке.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Отчётность сдаётся вовремя — без штрафов и нервов',
                  'Прозрачная стоимость без скрытых платежей',
                  'Настройка и поддержка 1С удалённо',
                  'Личное внимание к каждому клиенту',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3 glass rounded-2xl border border-white/10 p-4">
                    <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400 text-white shrink-0">
                      <Icon name="Check" size={14} />
                    </span>
                    <span className="text-slate-100 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
              Вопросы и ответы
            </span>
            <h2 className="mt-3 font-display font-black text-4xl md:text-5xl tracking-tight">
              Об услугах и 1С
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Собрали ответы на самые частые вопросы клиентов.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm data-[state=open]:border-fuchsia-300 data-[state=open]:shadow-fuchsia-500/10"
              >
                <AccordionTrigger className="text-left font-display font-bold text-base md:text-lg hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="pb-20 md:pb-28">
        <div className="container">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500 bg-[length:200%_auto] animate-gradient-shift px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <h2 className="font-display font-black text-4xl md:text-6xl text-white tracking-tight">
                Готовы навести порядок?
              </h2>
              <p className="mt-5 text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                Оставьте заявку — проведём бесплатную консультацию и оценим ваши задачи.
              </p>
              <a
                href="tel:+79085548326"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-bold text-base px-8 py-4 shadow-xl hover:scale-105 transition-transform"
              >
                <Icon name="Phone" size={18} />
                Заказать консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 text-white font-display font-extrabold text-lg shadow-lg">
                Б
              </span>
              <span className="font-display font-extrabold text-xl tracking-tight">Борщевская</span>
            </div>
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-fuchsia-600 transition-colors">Услуги</a>
              <a href="#about" className="hover:text-fuchsia-600 transition-colors">О нас</a>
              <a href="#faq" className="hover:text-fuchsia-600 transition-colors">Вопросы</a>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 text-center md:text-left text-sm text-slate-500 space-y-1">
            <p>ИП Борщевская Мария Александровна</p>
            <p>ИНН 642800070725</p>
            <p className="text-slate-400">© {year} Борщевская. Бухгалтерские услуги и настройка 1С.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;