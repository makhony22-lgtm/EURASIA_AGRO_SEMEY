function initTranslations() {
    const translations = {
        ru: {
            //ПАНЕЛЬ НАВИГАЦИИ
            navigation: {
                menu_home: "О компании", menu_responsibility: "Ответственность",
                menu_activity: "Вид деятельности", menu_news: "Новости",
                menu_vacancies: "Вакансии", menu_contacts: "Контакты"
            },
            //ГЛАВНАЯ
            index: {
                hero_title: "Агропромышленная компания полного цикла",
                hero_desc: "Современный агропромышленный холдинг полного цикла, напрямую из Казахстанских степей",
                about_title: "О нас",
                about_desc1:"Eurasia Agro Semey - это вертикально интегрированная агропромышленная компания, объединяющая ключевые направления агробизнеса. В структуру компании входят мясоперерабатывающий комбинат «Semey Meat Company», современный откормочная площадка «Semey Feedlot», а также агрофирма «Приречное», специализирующееся на выращивании овощных культур.",
                about_desc2:"Компания контролирует весь цикл производства - от выращивания сельскохозяйственной продукции и откорма скота до переработки мяса, обеспечивая стабильное качество, безопасность и надежность поставок.",
                about_feature1:"Современное оборудование европейского производства",
                about_feature2:"Полный цикл производства от откорма до готовой продукции",
                about_feature3:"Строгий контроль качества на всех этапах",
                about_feature4:"Квалифицированный персонал с многолетним опытом",
                about_feature5:"Экологически ответственное производство",
                leadership_title: "Руководство",
                leadership_desc: "Наша команда профессионалов",
                about_1p1:"Имангажинов Кайрат Данабекович", about_1p2:"Заместитель директора по производству", about_1p3:"Опытный руководитель производственных процессов с многолетним стажем в агропромышленной отрасли.",
                about_2p1:"Исембаев Сергазы Кангужанович", about_2p2:"Исполнительный директор", about_2p3:"Стратегический лидер, обеспечивающий эффективное управление всеми направлениями деятельности компании.",
                about_3p1:"Чакенова Гульнара Оралтаевна", about_3p2:"Главный бухгалтер", about_3p3:"Профессионал в области финансового учета и контроля, обеспечивающий прозрачность финансовых операций.",
                about_4p1:"Изатов Асет Азатович", about_4p2:"Руководитель финансового отдела", about_4p3:"Специалист по финансовому планированию и управлению денежными потоками компании.",
                about_5p1:"Межибовский Владислав Ильич", about_5p2:"Начальник отдела снабжения", about_5p3:"Эксперт в области логистики и снабжения, обеспечивающий бесперебойные поставки для производства.",
                about_6p1:"Сагидолдаев Даурен Канатович", about_6p2:"Менеджер по коммерции", about_6p3:"Профессионал в области продаж и развития коммерческих отношений с партнерами и клиентами.",
                about_7p1:"Тюлюбаева Сауле Нурлановна", about_7p2:"HR-менеджер", about_7p3:"Специалист по управлению персоналом, развитию кадрового потенциала и корпоративной культуры.",
                about_8p1:"Калиев Канат Сагидолдаевич", about_8p2:"Генеральный директор", about_8p3:"Специалист, формирующий стратегию и обеспечивающий системное управление деятельностью компании.",
            },
            //ВИД ДЕЯТЕЛЬНОСТИ
            activity: {
                hero_processing_title: "Мясоперерабатывающий комплекс",
                hero_processing_desc: "Современное производство с полным циклом переработки мяса",
                hero_feedlot_title: "Откормочная площадка",
                hero_feedlot_desc: "Передовые технологии выращивания и откорма КРС",
                btn_more: "Подробнее",
                processing_title: "Мясоперерабатывающий комплекс",
                processing_desc1:"Наш современный комплекс оснащен европейским оборудованием последнего поколения, что позволяет производить широкий ассортимент качественной мясной продукции.",
                processing_desc2:"Мы применяем передовые технологии обработки и строгий контроль качества на каждом этапе производства.",
                feature_equipment: "Современное оборудование",
                feature_equipment_desc:"Производственные линии европейского производства для высокого качества продукции",
                feature_cooling: "Холодильное хозяйство",
                feature_cooling_desc:"Современные холодильные камеры для правильного хранения при оптимальной температуре",
                feature_quality: "Контроль качества",
                feature_quality_desc:"Многоступенчатый контроль на всех этапах - от сырья до готовой продукции",
                feedlot_title:"Откормочная площадка",
                feedlot_desc1:"Современный животноводческий комплекс с комфортными условиями содержания обеспечивает высокое качество мяса и благополучие животных.",
                feedlot_desc2:"Наша откормочная площадка построена с учетом всех современных требований и оснащена необходимой инфраструктурой.",
                feature_infrastructure:"Современная инфраструктура",
                feature_infrastructure_desc:"Площадки обеспечивают комфортные условия содержания животных круглый год",
                feature_feeding:"Качественное кормление",
                feature_feeding_desc:"Сбалансированные рационы для оптимального роста и здоровья животных",
                feature_veterinary:"Ветеринарный контроль",
                feature_veterinary_desc:"Постоянный мониторинг здоровья поголовья и профилактические мероприятия",
            },
            //ОТВЕТСТВЕННОСТЬ
            responsibility: {
                badge: "Корпоративная Социальная Ответственность",
                hero_title: "Ответственность",
                hero_subtitle: "Мы строим устойчивое будущее через социальную ответственность, этичное ведение бизнеса и заботу о людях и окружающей среде",
                ha:"50+  тыс. Га",
                ha_title:"Земельный банк",
                years:"20 лет",
                years_title:"Средний опыт специалистов",
                proc:"100%",
                proc_title:"Экологические стандарты",
                impact_title: "Социально-экономическое воздействие",
                impact_desc:"Наша компания стремится к позитивному влиянию на общество, создавая рабочие места, поддерживая местные сообщества и инвестируя в развитие региона",
                impact1:"Реализация проекта имеет значительное социально-экономическое значение и направлена на устойчивое развитие регионов Абайской области. В рамках проекта предусмотрено создание новых рабочих мест на производственных и логистических объектах комплекса, что способствует снижению уровня безработицы и повышению качества жизни местного населения.",
                impact2:"Одновременно проект обеспечивает устойчивую занятость для более чем 1,000 индивидуальных фермеров и крестьянских хозяйств, вовлечённых в производственно-сбытовую цепочку. Поддержка малых сельскохозяйственных производителей способствует развитию предпринимательской инициативы, повышению производственной культуры и внедрению современных методов ведения хозяйства.",
                impact3:"С учётом социально-экономических особенностей сельскохозяйственных и животноводческих регионов, реализация проекта оказывает позитивный эффект на местные сообщества. Доход, получаемый участниками проекта, обеспечивает финансовую стабильность более чем для 5,000 человек в домохозяйствах, улучшая их доступ к образованию, здравоохранению и базовой инфраструктуре.",
                impact4:"Компания рассматривает данный проект как долгосрочное партнёрство с сельскими регионами, направленное не только на экономическую эффективность, но и на социальную ответственность. Мы стремимся создавать условия для устойчивого роста, повышения благосостояния населения и укрепления социального потенциала регионов, в которых мы работаем.",
                policy_title: "Наша политика и этика",
                policy_desc:"Честность, прозрачность и соблюдение высочайших этических стандартов лежат в основе нашего бизнеса",
                etika:"Корпоративная этика",
                etika_title:"Мы строим бизнес на принципах честности, добросовестности и уважения ко всем заинтересованным сторонам. Каждое решение принимается с учетом этических норм и долгосрочных последствий.",
                etika1:"Нулевая терпимость к коррупции и мошенничеству", 
                etika2:"Прозрачность в деловых операциях и отчетности",
                etika3:"Честная конкуренция и соблюдение антимонопольного законодательства",
                etika4:"Защита конфиденциальной информации клиентов и партнеров",
                etika5:"Этичное взаимодействие с поставщиками и подрядчиками",
                kachbez:"Качество и безопасность",
                kachbez_title:"Безопасность нашей продукции и производственных процессов является абсолютным приоритетом. Мы применяем международные стандарты контроля качества.",
                kachbez1:"Система контроля качества на всех этапах производства",
                kachbez2:"Сертификация по международным стандартам безопасности пищевых продуктов",
                kachbez3:"Лабораторный контроль сырья и готовой продукции",
                kachbez4:"Прослеживаемость продукции от поставщика до потребителя",
                kachbez5:"Быстрое реагирование на любые вопросы качества",
                prava:"Права сотрудников",
                prava_title:"Уважение к правам и достоинству каждого сотрудника создает основу для продуктивной и безопасной рабочей среды. Мы обеспечиваем равные возможности для всех.",
                prava1:"Запрет дискриминации по любым признакам",
                prava2:"Равная оплата за равный труд",
                prava3:"Право на объединение и коллективные переговоры",
                prava4:"Защита от домогательств и насилия на рабочем месте",
                prava5:"Конфиденциальная система подачи жалоб",
            },
            //НОВОСТИ
            news: {
                hero_title: "Новости и истории",
                hero_desc: "Узнайте о важных событиях и развитии нашей компании",
                featured_badge: "Главное событие",
                section_title: "Последние новости",
                december_18: "18 декабря 2024",
                featured_title1:"Открытие современного мясоперерабатывающего комплекса в регионе Абай",
                featured_title2:"Сегодня состоялось торжественное открытие мясоперерабатывающего комплекса Eurasia Agro Semey. Это важная веха в развитии пищевой промышленности региона. Современное предприятие, оснащенное европейским оборудованием, создаст более 500 рабочих мест и обеспечит высокое качество продукции.",
                read:"Читать полностью",
                upload:"Загрузить еще",
            },
            //ВАКАНСИИ
            vacancies: {
                hero_title: "Категории работ",
                hero_desc: "Выберите направление для работы в нашей компании",
                categorii:"Категории работ",
                vsye_categorii:"Все категории",
                rabota_v_ofise:"Работа в офисе",
                myasocombinat:"Мясокомбинат",
                prirech:"Приречное",
                locatsiya:"Локация",
                vsye_locatcii:"Все локации",
                semey:"Алматы",
                almaty:"Семей",
                filter_btn: "Найти вакансии",
                section_title:"Категории работ",
                section_desc:"Выберите подходящее направление",
                cta_title: "Не нашли подходящую вакансию?",
                cta_desc:"Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция. Мы всегда рады талантливым и целеустремленным специалистам.",
                cta_btn: "Отправить резюме"
            },
            //КОНТАКТЫ
            contacts: {
                hero_title: "Свяжитесь с нами",
                hero_desc:"Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества",
                address_title: "Адрес", 
                address1:"Семей, ул. Сеченова, 6",
                address2:"Абайская область, Казахстан",
                phone_title: "Телефон", 
                phone3:"Пн-Пт: 9:00 - 18:00",
                email_title: "Email",
                requisites_title:"Реквизиты",
                requisites1:"БИН: 160740001659",
                requisites2:"ТОО: Eurasia Agro Semey",
                form_title: "Напишите нам", 
                form_desc:"Заполните форму, и мы свяжемся с вами в ближайшее время",
                form_name:"Ваше имя",
                form_name0:"Введите ваше имя",
                form_phone:"Телефон",
                form_subject:"Тема обращения",
                opt0:"Выберите тему",
                opt1:"Сотрудничество",
                opt2:"Закупка продукции",
                opt3:"Поставка сырья",
                opt4:"Вакансии",
                opt5:"Другое",
                form_message:"Сообщение",
                form_message0:"Расскажите о вашем вопросе или предложении",
                form_btn: "Отправить сообщение",
                map:"Семей, ул. Сеченова, 6, Абайская область",
                additional_title:"Как с нами связаться",
                additional_coop:"Сотрудничество",
                additional_coop1:"Заинтересованы в партнерстве? Свяжитесь с нашим отделом продаж для обсуждения условий сотрудничества",
                additional_suppliers:"Поставщикам",
                additional_suppliers1:"Если вы фермер или поставщик сырья, напишите нам для обсуждения долгосрочного сотрудничества",
                additional_vacancies:"Вакансии",
                additional_vacancies1:"Хотите присоединиться к нашей команде? Отправьте резюме на hr@eurasiaagro.kz или посетите раздел вакансий",
            },
            //ФУТЕР
            footer: {
                desc: "Высококачественная мясная продукция для Казахстана и мира",
                about: "О компании", onass: "О нас", ruk: "Руководство",
                info: "Информация", resp: "Ответственность", act: "Вид деятельности",
                news: "Новости", vac: "Вакансии", cont: "Контакты", bin: "БИН: 160740001659",
                address: "Семей, ул. Сеченова, 6", region: "область Абай, Казахстан",
                rights: "Все права защищены."
            }
        },
        kz: {
            //ПАНЕЛЬ НАВИГАЦИИ
            navigation: {
                menu_home: "Компания туралы", menu_responsibility: "Жауапкершілік",
                menu_activity: "Қызмет түрі", menu_news: "Жаңалықтар",
                menu_vacancies: "Бос орындар", menu_contacts: "Байланыстар"
            },
            //ГЛАВНАЯ
            index: {
                hero_title: "Толық циклді агроөнеркәсіптік компания",
                hero_desc: "Қазақстан даласынан тікелей келетін заманауи толық циклді агроөнеркәсіптік холдинг",
                about_title: "Біз туралы",
                about_desc1:"Eurasia Agro Semey - агробизнестің негізгі бағыттарын біріктіретін тігінен біріктірілген Агроөнеркәсіптік компания. Компанияның құрылымына «Semey Meat Company» ет өңдеу комбинаты, «Semey Feedlot» заманауи бордақылау алаңы, сондай-ақ көкөніс дақылдарын өсіруге маманданған «Өзен бойындағы» агрофирмасы кіреді.",
                about_desc2:"Компания тұрақты сапаны, қауіпсіздікті және жеткізілім сенімділігін қамтамасыз ете отырып, ауылшаруашылық өнімдерін өсіруден және малды бордақылаудан бастап етті өңдеуге дейінгі бүкіл өндіріс циклін бақылайды.",
                about_feature1:"Еуропалық өндірістің заманауи жабдықтары",
                about_feature2:"Бордақылаудан дайын өнімге дейінгі өндірістің толық циклі",
                about_feature3:"Барлық кезеңдерде сапаны қатаң бақылау",
                about_feature4:"Көп жылдық тәжірибесі бар білікті қызметкерлер",
                about_feature5:"Экологиялық жауапты өндіріс",
                leadership_title: "Басшылық",
                leadership_desc: "Біздің кәсіпқойлар командасы",
                about_1p1:"Имангажинов Кайрат Данабекович", about_1p2:"Өндіріс жөніндегі директордың орынбасары", about_1p3:"Агроөнеркәсіп саласында көпжылдық тәжірибесі бар өндірістік процестердің білікті басшысы.",
                about_2p1:"Исембаев Сергазы Кангужанович", about_2p2:"Атқарушы директор", about_2p3:"Компания қызметінің барлық бағыттарын тиімді басқаруды қамтамасыз ететін стратегиялық көшбасшы.",
                about_3p1:"Чакенова Гульнара Оралтаевна", about_3p2:"Бас бухгалтер", about_3p3:"Қаржылық есеп пен бақылау саласындағы кәсіби маман, қаржылық операциялардың ашықтығын қамтамасыз етеді.",
                about_4p1:"Изатов Асет Азатович", about_4p2:"Қаржы бөлімінің басшысы", about_4p3:"Компанияның қаржылық жоспарлауына және ақша ағындарын басқаруға маманданған сарапшы.",
                about_5p1:"Межибовский Владислав Ильич", about_5p2:"Жабдықтау бөлімінің басшысы", about_5p3:"Өндірісті үздіксіз қамтамасыз ететін логистика және жабдықтау саласындағы сарапшы.",
                about_6p1:"Сагидолдаев Даурен Канатович", about_6p2:"Коммерция жөніндегі менеджер", about_6p3:"Серіктестер мен клиенттермен коммерциялық қатынастарды дамыту және сату саласындағы кәсіби маман.",
                about_7p1:"Тюлюбаева Сауле Нурлановна", about_7p2:"HR-менеджер", about_7p3:"Персоналды басқару, кадрлық әлеуетті дамыту және корпоративтік мәдениет бойынша маман.",
                about_8p1: "Қалиев Қанат Сағидолдаұлы", about_8p2: "Бас директор", about_8p3: "Компания қызметін жүйелі басқаруды қамтамасыз етіп, стратегияны қалыптастыратын маман."
            },
            //ВИД ДЕЯТЕЛЬНОСТИ
            activity: {
                hero_processing_title: "Ет өңдеу кешені",
                hero_processing_desc: "Етті толық циклмен өңдеудің заманауи өндірісі",
                hero_feedlot_title: "Семіздендіру алаңы",
                hero_feedlot_desc: "ІҚМ өсіру мен семіздендірудің озық технологиялары",
                btn_more: "Толығырақ",
                processing_title: "Ет өңдеу кешені",
                processing_desc1:"Біздің заманауи кешеніміз сапалы ет өнімдерінің кең ассортиментін өндіруге мүмкіндік беретін соңғы буынның еуропалық жабдықтарымен жабдықталған.",
                processing_desc2:"Біз өндірістің әр кезеңінде өңдеудің озық технологияларын және сапаны қатаң бақылауды қолданамыз.",
                feature_equipment: "Заманауи жабдық",
                feature_equipment_desc:"Өнімнің жоғары сапасын қамтамасыз ететін еуропалық өндірістегі өндірістік желілер",
                feature_cooling: "Тоңазытқыш шаруашылығы",
                feature_cooling_desc:"Оңтайлы температурада дұрыс сақтауға арналған заманауи тоңазытқыш камералар",
                feature_quality: "Сапа бақылауы",
                feature_quality_desc:"Шикізаттан дайын өнімге дейінгі барлық кезеңдерде көпсатылы бақылау",
                feedlot_title:"Бордақылау алаңы",
                feedlot_desc1:"Қолайлы ұстау жағдайлары бар заманауи мал шаруашылығы кешені еттің жоғары сапасын және жануарлардың әл-ауқатын қамтамасыз етеді.",
                feedlot_desc2:"Біздің бордақылау алаңымыз барлық заманауи талаптарды ескере отырып салынған және қажетті инфрақұрылыммен жабдықталған.",
                feature_infrastructure:"Заманауи инфрақұрылым",
                feature_infrastructure_desc:"Алаңдар жануарларды жыл бойы жайлы ұстау жағдайларымен қамтамасыз етеді",
                feature_feeding:"Сапалы азықтандыру",
                feature_feeding_desc:"Жануарлардың оңтайлы өсуі мен денсаулығы үшін теңгерімді рациондар",
                feature_veterinary:"Ветеринариялық бақылау",
                feature_veterinary_desc:"Мал басының денсаулығын тұрақты бақылау және алдын алу шаралары",
            },
            //ОТВЕТСВЕННОСТЬ
            responsibility: {
                badge: "Корпоративтік Әлеуметтік Жауапкершілік",
                hero_title: "Жауапкершілік",
                hero_subtitle: "Біз әлеуметтік жауапкершілік, этикалық бизнес жүргізу және адамдар мен қоршаған ортаға қамқорлық жасау арқылы тұрақты болашақты құрамыз",
                ha:"50+ мың Га",
                ha_title:"Жер банк",
                years:"20 жыл",
                years_title:"Мамандардың орташа тәжірибесі",
                proc:"100%",
                proc_title:"Экологиялық стандарттар",
                impact_title: "Әлеуметтік-экономикалық әсер",
                impact_desc:"Біздің компания жұмыс орындарын құру, жергілікті қауымдастықтарды қолдау және аймақты дамытуға инвестиция салу арқылы қоғамға оң әсер етуге ұмтылады",
                impact1:"Жобаны іске асыру Абай облысы өңірлерінің тұрақты дамуына бағытталған және маңызды әлеуметтік-экономикалық мәнге ие. Жоба аясында кешеннің өндірістік және логистикалық нысандарында жаңа жұмыс орындарын құру көзделген, бұл жұмыссыздық деңгейін төмендетуге және жергілікті халықтың өмір сүру сапасын арттыруға ықпал етеді.",
                impact2:"Сонымен қатар жоба өндірістік-өткізу тізбегіне тартылған 1,000-нан астам жеке фермерлер мен шаруа қожалықтарын тұрақты жұмыспен қамтуды қамтамасыз етеді. Шағын ауыл шаруашылығы өндірушілерін қолдау кәсіпкерлік бастаманың дамуына, өндірістік мәдениетті арттыруға және заманауи шаруашылық жүргізу әдістерін енгізуге ықпал етеді.",
                impact3:"Ауыл шаруашылығы және мал шаруашылығы аймақтарының әлеуметтік-экономикалық ерекшеліктерін ескере отырып, жобаны іске асыру жергілікті қауымдастықтарға оң әсер етеді. Жоба қатысушылары алатын табыс үй шаруашылықтарындағы 5,000-нан астам адамның қаржылық тұрақтылығын қамтамасыз етіп, білім беру, денсаулық сақтау және базалық инфрақұрылымға қолжетімділігін жақсартады.",
                impact4:"Компания бұл жобаны ауылдық өңірлермен ұзақ мерзімді серіктестік ретінде қарастырады, ол тек экономикалық тиімділікке ғана емес, сонымен қатар әлеуметтік жауапкершілікке бағытталған. Біз тұрақты өсуді, халықтың әл-ауқатын арттыруды және қызметіміз жүзеге асырылатын өңірлердің әлеуметтік әлеуетін нығайтуды қамтамасыз ететін жағдайлар жасауға ұмтыламыз.",
                policy_title: "Біздің саясат пен этика",
                policy_desc:"Адалдық, ашықтық және ең жоғары этикалық стандарттарды сақтау - біздің бизнесіміздің негізі.",
                etika:"Корпоративтік этика",
                etika_title:"Біз бизнесімізді адалдық, жауапкершілік және барлық мүдделі тараптарға құрмет көрсету қағидаттары негізінде жүргіземіз. Әрбір шешім этикалық нормалар мен ұзақ мерзімді салдарларды ескере отырып қабылданады.",
                etika1:"Сыбайлас жемқорлық пен алаяқтыққа нөлдік төзімділік",
                etika2:"Іскерлік операциялар мен есептіліктің ашықтығы",
                etika3:"Әділ бәсекелестік және монополияға қарсы заңнаманы сақтау",
                etika4:"Клиенттер мен серіктестердің құпия ақпаратын қорғау",
                etika5:"Жеткізушілермен және мердігерлермен этикалық өзара іс-қимыл",
                kachbez:"Сапа және қауіпсіздік",
                kachbez_title:"Өнімдеріміз бен өндірістік процестердің қауіпсіздігі - абсолютті басымдық. Біз сапаны бақылаудың халықаралық стандарттарын қолданамыз.",
                kachbez1:"Өндірістің барлық кезеңдерінде сапаны бақылау жүйесі",
                kachbez2:"Азық-түлік қауіпсіздігі бойынша халықаралық стандарттар бойынша сертификаттау",
                kachbez3:"Шикізат пен дайын өнімнің зертханалық бақылауы",
                kachbez4:"Өнімнің жеткізушіден тұтынушыға дейінгі қадағалануын қамтамасыз ету",
                kachbez5:"Сапаға қатысты кез келген мәселелерге жедел әрекет ету",
                prava:"Қызметкерлердің құқықтары",
                prava_title:"Әрбір қызметкердің құқықтары мен қадір-қасиетін құрметтеу өнімді әрі қауіпсіз жұмыс ортасының негізін қалайды. Біз баршаға тең мүмкіндіктерді қамтамасыз етеміз.",
                prava1:"Кез келген белгі бойынша кемсітушілікке тыйым салу",
                prava2:"Бірдей еңбек үшін тең ақы төлеу",
                prava3:"Бірігу және ұжымдық келіссөздер жүргізу құқығы",
                prava4:"Жұмыс орнындағы қысым мен зорлық-зомбылықтан қорғау",
                prava5:"Шағымдарды құпия түрде беру жүйесі",
            },
            //НОВОСТИ
            news: {
                hero_title: "Жаңалықтар мен оқиғалар",
                hero_desc: "Біздің компанияның маңызды оқиғалары туралы біліңіз",
                featured_badge: "Басты оқиға",
                section_title: "Соңғы жаңалықтар",
                december_18: "18 желтоқсан 2024",
                featured_title1:"Абай өңірінде заманауи ет өңдеу кешенінің ашылуы.",
                featured_title2:"Бүгін Eurasia Agro Semey ет өңдеу кешенінің салтанатты ашылуы өтті. Бұл аймақтың тамақ өнеркәсібін дамытудағы маңызды кезең. Еуропалық жабдықтармен жабдықталған заманауи кәсіпорын 500-ден астам жұмыс орнын ашады және өнімнің жоғары сапасын қамтамасыз етеді.",
                read:"Толық оқыңыз",
                upload:"Көбірек жүктеу",
            },
            //ВАКАНСИИ
            vacancies: {
                hero_title: "Жұмыс санаттары",
                hero_desc: "Біздің компанияда жұмыс істеу үшін бағытты таңдаңыз",
                categorii:"Жұмыс санаттары",
                vsye_categorii:"Барлық санаттар",
                rabota_v_ofise:"Кеңседе жұмыс істеу",
                myasocombinat:"Ет комбинаты",
                prirech:"Өзен бойындағы",
                locatsiya:"Орналасқан жері",
                vsye_locatcii:"Барлық орындар",
                semey:"Семей",
                almaty:"Алматы",
                filter_btn: "Бос орындарды табу",
                section_title:"Жұмыс санаттары",
                section_desc:"Дұрыс бағытты таңдаңыз",
                cta_title: "Қолайлы бос орынды таба алмадыңыз ба?",
                cta_desc:"Бізге түйіндемеңізді жіберіңіз, біз сізге дұрыс позиция пайда болған кезде хабарласамыз. Біз әрқашан талантты және ынталы мамандарға қуаныштымыз.",
                cta_btn: "Резюме жіберу"
            },
            //КОНТАКТЫ
            contacts: {
                hero_title: "Бізбен байланысыңыз",
                hero_desc:"Біз әрқашан сіздің сұрақтарыңызға жауап беруге және ынтымақтастық мүмкіндіктерін талқылауға дайынбыз",
                address_title: "Мекенжайы", 
                address1:"Семей, Сеченов көшесі, 6",
                address2:"Абай облысы, Қазақстан",
                phone_title: "Телефон", 
                phone3:"Дс-Жм: 9:00 - 18:00",
                email_title: "Email",
                requisites_title:"Деректемелер",
                requisites1:"БСН: 160740001659",
                requisites2:"ЖШС: Eurasia Agro Semena",
                form_title: "Бізге жазыңыз", 
                form_desc:"Пішінді толтырыңыз, біз сізге жақын арада хабарласамыз",
                form_name:"Сіздің атыңыз",
                form_name0:"Атыңызды енгізіңіз",
                form_phone:"Телефон",
                form_subject:"Өтініш тақырыбы",
                opt0: "Тақырыпты таңдаңыз",
                opt1: "Ынтымақтастық",
                opt2: "Өнім сатып алу",
                opt3: "Шикізат жеткізу",
                opt4: "Бос жұмыс орындары",
                opt5: "Басқа",
                form_message:"Хабарлама",
                form_message0:"Cұрағыңыз немесе ұсынысыңыз туралы айтыңыз",
                form_btn: "Хабарлама жіберу",
                map:"Семей, Сеченов көшесі, 6, Абай облысы",
                additional_title: "Бізбен қалай байланысуға болады",
                additional_coop: "Ынтымақтастық",
                additional_coop1: "Серіктестікке қызығушылық танытасыз ба? Ынтымақтастық шарттарын талқылау үшін сату бөлімімен байланысыңыз",
                additional_suppliers: "Жеткізушілерге",
                additional_suppliers1: "Егер сіз фермер немесе шикізат жеткізушісі болсаңыз, ұзақ мерзімді ынтымақтастықты талқылау үшін бізге жазыңыз",
                additional_vacancies: "Бос жұмыс орындары",
                additional_vacancies1: "Біздің командаға қосылғыңыз келе ме? Түйіндемеңізді hr@eurasiaagro.kz поштасына жіберіңіз немесе бос жұмыс орындары бөліміне кіріңіз",

            },
            //ФУТЕР
            footer: {
                desc: "Қазақстан мен әлем үшін жоғары сапалы ет өнімдері",
                about: "Компания туралы", onass: "Біз туралы", ruk: "Басшылық",
                info: "Ақпарат", resp: "Жауапкершілік", act: "Қызмет түрі",
                news: "Жаңалықтар", vac: "Бос орындар", cont: "Байланыс", bin: "БСН: 160740001659",
                address: "Семей қ., Сеченов к-сі, 6", region: "Абай облысы, Қазақстан",
                rights: "Барлық құқықтар қорғалған."
            }
        },
        en: {
            //ПАНЕЛЬ НАВИГАЦИИ
            navigation: {
                menu_home: "About Company", menu_responsibility: "Responsibility",
                menu_activity: "Activities", menu_news: "News",
                menu_vacancies: "Vacancies", menu_contacts: "Contacts"
            },
            //ИНДЕКС
            index: {
                hero_title: "Full-cycle Agro-industrial Company",
                hero_desc: "Modern full-cycle agro-industrial holding",
                about_title: "About Us",
                about_desc1:"Eurasia Agro Semey is a vertically integrated agro-industrial company that unites key areas of agribusiness. The company's structure includes the «Semey Meat Company» meat processing plant, the modern «Semey Feedlot» feedlot, as well as the «Riverside» agricultural company specializing in the cultivation of vegetable crops.",
                about_desc2:"The company controls the entire production cycle, from growing agricultural products and fattening livestock to meat processing, ensuring stable quality, safety and reliability of supplies.",
                about_feature1:"Modern European-made equipment",
                about_feature2:"Full production cycle from fattening to finished products",
                about_feature3:"Strict quality control at all stages",
                about_feature4:"Qualified staff with many years of experience",
                about_feature5:"Environmentally responsible production",
                leadership_title: "Management",
                leadership_desc: "Our team of professionals",
                about_1p1:"Imangazhinov Kairat Danabekovich", about_1p2:"Deputy Director for Production", about_1p3:"An experienced manager of production processes with many years of expertise in the agro-industrial sector.",
                about_2p1:"Isembayev Sergazy Kanguzhanovich", about_2p2:"Executive Director", about_2p3:"A strategic leader ensuring effective management of all areas of the company’s operations.",
                about_3p1:"Chakenova Gulnara Oraltaevna", about_3p2:"Chief Accountant", about_3p3:"A professional in financial accounting and control, ensuring transparency of financial operations.",
                about_4p1:"Izatov Asset Azatovich", about_4p2:"Head of the Financial Department", about_4p3:"A specialist in financial planning and cash flow management of the company.",
                about_5p1:"Mezhibovsky Vladislav Ilyich", about_5p2:"Head of the Supply Department", about_5p3:"An expert in logistics and supply management, ensuring uninterrupted deliveries for production.",
                about_6p1:"Sagidoldayev Dauren Kanatovich", about_6p2:"Commercial Manager", about_6p3:"A professional in sales and the development of commercial relationships with partners and clients.",
                about_7p1:"Tyulyubayeva Saule Nurlanovna", about_7p2:"HR Manager", about_7p3:"A specialist in human resource management, staff development, and corporate culture.",
                about_8p1: "Kaliev Kanat Sagidoldaevich", about_8p2: "Chief Executive Officer", about_8p3: "A specialist who develops strategy and ensures systematic management of the company's activities.",
            },
            //ВИД ДЕЯТ
            activity: {
                hero_processing_title: "Meat Processing Complex",
                hero_processing_desc: "Modern production with full cycle meat processing",
                hero_feedlot_title: "Feedlot",
                hero_feedlot_desc: "Advanced technologies for cattle breeding",
                btn_more: "Learn more",
                processing_title: "Meat processing complex",
                processing_desc1:"Our modern complex is equipped with the latest generation of European equipment, which allows us to produce a wide range of high-quality meat products.",
                processing_desc2:"We apply advanced processing technology and strict quality control at every stage of production.",
                feature_equipment: "Modern equipment",
                feature_equipment_desc:"European-manufactured production lines ensuring high product quality",
                feature_cooling: "Refrigeration facilities",
                feature_cooling_desc:"Modern refrigeration chambers for proper storage at optimal temperatures",
                feature_quality: "Quality control",
                feature_quality_desc:"Multi-stage control at all stages - from raw materials to finished products",
                feedlot_title:"Fattening site",
                feedlot_desc1:"A modern livestock complex with comfortable housing conditions ensures high meat quality and animal welfare.",
                feedlot_desc2:"Our fattening site is built in accordance with all modern requirements and equipped with the necessary infrastructure.",
                feature_infrastructure:"Modern infrastructure",
                feature_infrastructure_desc:"The facilities provide comfortable housing conditions for animals year-round",
                feature_feeding:"Quality feeding",
                feature_feeding_desc:"Balanced diets for optimal growth and animal health",
                feature_veterinary:"Veterinary control",
                feature_veterinary_desc:"Continuous monitoring of herd health and preventive measures",
            },
            //ОТВЕТСВЕННОСТЬ
            responsibility: {
                badge: "Corporate Social Responsibility",
                hero_title: "Responsibility",
                hero_subtitle: "We are building a sustainable future through social responsibility, ethical business conduct, and caring for people and the environment",
                ha:"50+ thous. Ha",
                ha_title:"Land bank",
                years:"20 years",
                years_title:"Average professional experience",
                proc:"100%",
                proc_title:"Environmental standards",
                impact_title: "Social and Economic Impact",
                impact_desc:"Our company strives to have a positive impact on society by creating jobs, supporting local communities and investing in the development of the region",
                impact1:"The implementation of the project has significant socio-economic importance and is aimed at the sustainable development of the regions of the Abai Region. Within the framework of the project, new jobs are planned to be created at the production and logistics facilities of the complex, contributing to a reduction in unemployment and an improvement in the quality of life of the local population.",
                impact2:"At the same time, the project provides stable employment for more than 1,000 individual farmers and peasant farms involved in the production and supply chain. Support for small agricultural producers promotes the development of entrepreneurial initiative, improvement of production culture, and adoption of modern farming methods.",
                impact3:"Taking into account the socio-economic characteristics of agricultural and livestock regions, the implementation of the project has a positive effect on local communities. The income earned by project participants provides financial stability for more than 5,000 people in households, improving their access to education, healthcare, and basic infrastructure.",
                impact4:"The company considers this project as a long-term partnership with rural regions, aimed not only at economic efficiency but also at social responsibility. We strive to create conditions for sustainable growth, improving public welfare, and strengthening the social potential of the regions where we operate.",
                policy_title: "Our Policy and Ethics",
                policy_desc:"Integrity, transparency, and adherence to the highest ethical standards form the foundation of our business.",
                etika:"Corporate Ethics",
                etika_title:"We build our business on the principles of integrity, good faith, and respect for all stakeholders. Every decision is made with consideration of ethical standards and long-term consequences.",
                etika1:"Zero tolerance for corruption and fraud",
                etika2:"Transparency in business operations and reporting",
                etika3:"Fair competition and compliance with antitrust legislation",
                etika4:"Protection of confidential information of clients and partners",
                etika5:"Ethical interaction with suppliers and contractors",
                kachbez:"Quality and Safety",
                kachbez_title:"The safety of our products and production processes is an absolute priority. We apply international quality control standards.",
                kachbez1:"Quality control system at all stages of production",
                kachbez2:"Certification in accordance with international food safety standards",
                kachbez3:"Laboratory testing of raw materials and finished products",
                kachbez4:"Product traceability from supplier to consumer",
                kachbez5:"Prompt response to any quality-related issues",
                prava:"Employee Rights",
                prava_title:"Respect for the rights and dignity of every employee forms the basis for a productive and safe working environment. We ensure equal opportunities for everyone.",
                prava1:"Prohibition of discrimination of any kind",
                prava2:"Equal pay for equal work",
                prava3:"Right to freedom of association and collective bargaining",
                prava4:"Protection from harassment and violence in the workplace",
                prava5:"Confidential grievance reporting system",
            },
            //НОВОСТИ
            news: {
                hero_title: "News and Stories",
                hero_desc: "Learn about important events",
                featured_badge: "Featured Event",
                section_title: "Latest News",
                december_18: "December 18, 2024",
                featured_title1:"Opening of a modern meat processing complex in the Abai region",
                featured_title2:"The ceremonial opening of the Eurasia Agro Semey meat processing complex took place today. This is an important milestone in the development of the region's food industry. The modern enterprise, equipped with European equipment, will create more than 500 jobs and ensure high-quality products.",
                read:"Read all",
                upload:"Upload more"
            },
            //ВАКАНСИИ
            vacancies: {
                hero_title: "Job Categories",
                hero_desc: "Choose a direction to work in our company",
                categorii:"Job categories",
                vsye_categorii:"All categories",
                rabota_v_ofise:"Office work",
                myasocombinat:"Meat processing plant",
                prirech:"Riverside",
                locatsiya:"Location",
                vsye_locatcii:"All locations",
                semey:"Semey",
                almaty:"Almaty",
                filter_btn: "Find Vacancies",
                section_title:"Job categories",
                section_desc:"Choose the appropriate direction",
                cta_title: "Haven't found a suitable vacancy?",
                cta_desc:"Send us your resume, and we'll contact you when a suitable position opens. We're always looking for talented and motivated professionals.",
                cta_btn: "Submit Resume",
                map:"",
            },
            //КОНТАКТЫ
            contacts: {
                hero_title: "Contact Us",
                hero_desc:"We are always ready to answer your questions and discuss the possibilities of cooperation.",
                address_title: "Address", 
                address1:"Semey, Sechenov STR., 6",
                address2:"Abay region, Kazakhstan",
                phone_title: "Phone", 
                phone3:"Mon-Fri: 9:00 - 18:00",
                email_title: "Email",
                requisites_title:"Requisites",
                requisites1:"BIN: 160740001659",
                requisites2:"LLP: Eurasia Agro Semey",
                form_title: "Write to Us", 
                form_desc:"Fill out the form and we will contact you as soon as possible",
                form_name:"Your name",
                form_name0:"Enter your name",
                form_phone:"Phone",
                form_subject:"Request subject",
                opt0: "Select a topic",
                opt1: "Cooperation",
                opt2: "Product procurement",
                opt3: "Raw material supply",
                opt4: "Vacancies",
                opt5: "Other",
                form_message:"Message",
                form_message0:"Tell us about your question or suggestion.",
                map:"Semey, Sechenov St., 6, Abai region",
                form_btn: "Send Message",
                additional_title: "How to contact us",
                additional_coop: "Cooperation",
                additional_coop1: "Interested in partnership? Contact our sales department to discuss cooperation terms",
                additional_suppliers: "For suppliers",
                additional_suppliers1: "If you are a farmer or raw material supplier, please contact us to discuss long-term cooperation",
                additional_vacancies: "Vacancies",
                additional_vacancies1: "Would you like to join our team? Send your resume to hr@eurasiaagro.kz or visit the vacancies section",

            },
            //ФУТЕР
            footer: {
                desc: "High quality meat products for Kazakhstan and the world",
                about: "About company", onass: "About us", ruk: "Leadership",
                info: "Information", resp: "Responsibility", act: "Type of activity",
                news: "News", vac: "Vacancies", cont: "Contacts", bin: "BIN: 160740001659",
                address: "Semey, Sechenov str., 6", region: "Abai region, Kazakhstan",
                rights: "All rights reserved."
            }
        }
    };

    let originalTexts = {};

    window.switchLanguage = function(lang, event) {
        if (event) event.preventDefault();
        
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(el => {
            const path = el.getAttribute('data-translate');
            if (!originalTexts[path]) {
                originalTexts[path] = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
                ? el.placeholder
                : el.textContent;
            }

            // --- АНИМАЦИЯ ---
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
                const isInput = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
                if (lang === 'ru') { 
                    if (isInput) {
                        el.placeholder = originalTexts[path];
                    } else {
                        el.textContent = originalTexts[path];
                    }
                } else {
                    const parts = path.split('_');
                    const section = parts[0];
                    const key = parts.slice(1).join('_');
                    
                    if (translations[lang][section] && translations[lang][section][key]) {
                        if (isInput) {
                            el.placeholder = translations[lang][section][key];
                        } else {
                            el.textContent = translations[lang][section][key];
                        }
                    }
                }
                el.style.opacity = '1';
            }, 300);
        });

        localStorage.setItem('selectedLanguage', lang);
        
        // Подсветка активной кнопки
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
            const btnText = btn.textContent.toLowerCase();
            if ((lang === 'kz' && btnText.includes('қаз')) ||
                (lang === 'ru' && btnText.includes('рус')) ||
                (lang === 'en' && btnText.includes('eng'))) {
                btn.classList.add('active');
            }
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem('selectedLanguage') || 'ru';
        if (saved !== 'ru') setTimeout(() => window.switchLanguage(saved), 150);
    });
}

initTranslations();
