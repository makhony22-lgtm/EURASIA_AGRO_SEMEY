// Универсальная система переводов для всего сайта
function initTranslations() {
    // Встроенные переводы (без загрузки JSON файлов)
    const translations = {
        ru: {
            navigation: {
                menu_home: "О компании",
                menu_responsibility: "Ответственность", 
                menu_activity: "Вид деятельности",
                menu_news: "Новости",
                menu_vacancies: "Вакансии",
                menu_contacts: "Контакты"
            },
            // INDEX.HTML
            index: {
                hero_title: "Агропромышленная компания полного цикла",
                hero_desc: "Современный агропромышленный холдинг полного цикла, напрямую из Казахстанских степей",
                about_title: "О нас",
                about_desc1: "Eurasia Agro Semey - это вертикально интегрированная агропромышленная компания, объединяющая ключевые направления агробизнеса. В структуру компании входят мясоперерабатывающий комбинат «Semey Meat Company», современная откормочная площадка «Semey Feedlot», а также агрофирма «Приречное», специализирующееся на выращивании овощных культур.",
                about_desc2: "Компания контролирует весь цикл производства — от выращивания сельскохозяйственной продукции и откорма скота до переработки мяса, обеспечивая стабильное качество, безопасность и надежность поставок.",
                about_feature1: "Современное оборудование европейского производства",
                about_feature2: "Полный цикл производства от откорма до готовой продукции",
                about_feature3: "Строгий контроль качества на всех этапах",
                about_feature4: "Квалифицированный персонал с многолетним опытом",
                about_feature5: "Экологически ответственное производство",
                leadership_title: "Руководство",
                leadership_desc: "Наша команда профессионалов"
            },
            // ВИД ДЕЯТЕЛЬНОСТИ
            activity: {
                hero_processing_title: "Мясоперерабатывающий комплекс",
                hero_processing_desc: "Современное производство с полным циклом переработки мяса",
                hero_feedlot_title: "Откормочная площадка",
                hero_feedlot_desc: "Передовые технологии выращивания и откорма КРС",
                btn_more: "Подробнее",
                processing_title: "Мясоперерабатывающий комплекс",
                processing_desc1: "Наш современный комплекс оснащен европейским оборудованием последнего поколения, что позволяет производить широкий ассортимент качественной мясной продукции.",
                processing_desc2: "Мы применяем передовые технологии обработки и строгий контроль качества на каждом этапе производства.",
                feature_equipment: "Современное оборудование",
                feature_equipment_desc: "Производственные линии европейского производства для высокого качества продукции",
                feature_cooling: "Холодильное хозяйство",
                feature_cooling_desc: "Современные холодильные камеры для правильного хранения при оптимальной температуре",
                feature_quality: "Контроль качества",
                feature_quality_desc: "Многоступенчатый контроль на всех этапах — от сырья до готовой продукции",
                feedlot_title: "Откормочная площадка",
                feedlot_desc1: "Современный животноводческий комплекс с комфортными условиями содержания обеспечивает высокое качество мяса и благополучие животных.",
                feedlot_desc2: "Наша откормочная площадка построена с учетом всех современных требований и оснащена необходимой инфраструктурой.",
                feature_infrastructure: "Современная инфраструктура",
                feature_infrastructure_desc: "Площадки обеспечивают комфортные условия содержания животных круглый год",
                feature_feeding: "Качественное кормление",
                feature_feeding_desc: "Сбалансированные рационы для оптимального роста и здоровья животных",
                feature_veterinary: "Ветеринарный контроль",
                feature_veterinary_desc: "Постоянный мониторинг здоровья поголовья и профилактические мероприятия"
            },
            // ОТВЕТСТВЕННОСТЬ
            responsibility: {
                badge: "Корпоративная Социальная Ответственность",
                hero_title: "Ответственность",
                hero_subtitle: "Мы строим устойчивое будущее через социальную ответственность, этичное ведение бизнеса и заботу о людях и окружающей среде",
                impact_title: "Социально-экономическое воздействие",
                impact_desc: "Наша компания стремится к позитивному влиянию на общество, создавая рабочие места, поддерживая местные сообщества и инвестируя в развитие региона",
                policy_title: "Наша политика и этика",
                policy_desc: "Честность, прозрачность и соблюдение высочайших этических стандартов лежат в основе нашего бизнеса"
            },
            // НОВОСТИ
            news: {
                hero_title: "Новости и истории",
                hero_desc: "Узнайте о важных событиях, достижениях и развитии нашей компании",
                featured_badge: "Главное событие",
                featured_title: "Открытие современного мясоперерабатывающего комплекса в регионе Абай",
                section_title: "Последние новости"
            },
            // ВАКАНСИИ
            vacancies: {
                hero_title: "Категории работ",
                hero_desc: "Выберите направление для работы в нашей компании",
                filter_department: "Категории работ",
                filter_location: "Локация",
                filter_btn: "Найти вакансии",
                section_title: "Категории работ",
                section_desc: "Выберите подходящее направление",
                cta_title: "Не нашли подходящую вакансию?",
                cta_desc: "Отправьте нам свое резюме, и мы свяжемся с вами, когда появится подходящая позиция. Мы всегда рады талантливым и целеустремленным специалистам.",
                cta_btn: "Отправить резюме"
            },
            // КОНТАКТЫ
            contacts: {
                hero_title: "Свяжитесь с нами",
                hero_desc: "Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества",
                address_title: "Адрес",
                phone_title: "Телефон",
                email_title: "Email",
                requisites_title: "Реквизиты",
                form_title: "Напишите нам",
                form_desc: "Заполните форму, и мы свяжемся с вами в ближайшее время",
                form_name: "Ваше имя",
                form_email: "Email",
                form_phone: "Телефон",
                form_subject: "Тема обращения",
                form_message: "Сообщение",
                form_btn: "Отправить сообщение",
                additional_title: "Как с нами связаться",
                additional_coop: "Сотрудничество",
                additional_suppliers: "Поставщикам",
                additional_vacancies: "Вакансии"
            }
        },
        kz: {
            navigation: {
                menu_home: "Компания туралы",
                menu_responsibility: "Жауапкершілік",
                menu_activity: "Қызмет түрі", 
                menu_news: "Жаңалықтар",
                menu_vacancies: "Бос орындар",
                menu_contacts: "Байланыстар"
            },
            // INDEX.HTML
            index: {
                hero_title: "Толық циклді агроөнеркәсіптік компания",
                hero_desc: "Қазақстан даласынан тікелей келетін заманауи толық циклді агроөнеркәсіптік холдинг",
                about_title: "Біз туралы",
                about_desc1: "Eurasia Agro Semey - бұл агробизнестің негізгі бағыттарын біріктіретін тік интеграцияланған агроөнеркәсіптік компания. Компания құрылымына «Semey Meat Company» ет өңдеу комбинаты, «Semey Feedlot» заманауи семіздендіру алаңы, сонымен қатар көкөніс өсіруге мамандандырылған «Приречное» агрофирмасы кіреді.",
                about_desc2: "Компания өндірістің толық циклін бақылайды — ауыл шаруашылығы өнімдерін өсіруден және малды семіздендіруден бастап етті өңдеуге дейін, тұрақты сапа, қауіпсіздік және жеткізілімнің сенімділігін қамтамасыз етеді.",
                about_feature1: "Еуропалық өндірістің заманауи жабдықтары",
                about_feature2: "Семіздендіруден дайын өнімге дейінгі толық өндіріс циклі",
                about_feature3: "Барлық кезеңдерде қатаң сапа бақылауы",
                about_feature4: "Көп жылдық тәжірибесі бар білікті қызметкерлер",
                about_feature5: "Экологиялық жауапты өндіріс",
                leadership_title: "Басшылық",
                leadership_desc: "Біздің кәсіпқойлар тобы"
            },
            // ВИД ДЕЯТЕЛЬНОСТИ
            activity: {
                hero_processing_title: "Ет өңдеу кешені",
                hero_processing_desc: "Етті толық циклмен өңдеудің заманауи өндірісі",
                hero_feedlot_title: "Семіздендіру алаңы",
                hero_feedlot_desc: "ІҚМ өсіру мен семіздендірудің озық технологиялары", 
                btn_more: "Толығырақ",
                processing_title: "Ет өңдеу кешені",
                processing_desc1: "Біздің заманауи кешен соңғы буынның еуропалық жабдықтарымен жабдықталған, бұл сапалы ет өнімдерінің кең ассортиментін өндіруге мүмкіндік береді.",
                processing_desc2: "Біз өндірістің әрбір кезеңінде озық өңдеу технологиялары мен қатаң сапа бақылауын қолданамыз.",
                feature_equipment: "Заманауи жабдық",
                feature_equipment_desc: "Жоғары сапалы өнім үшін еуропалық өндірістің өндірістік желілері",
                feature_cooling: "Тоңазытқыш шаруашылығы",
                feature_cooling_desc: "Оңтайлы температурада дұрыс сақтауға арналған заманауи тоңазытқыш камералар",
                feature_quality: "Сапа бақылауы",
                feature_quality_desc: "Шикізаттан дайын өнімге дейінгі барлық кезеңдерде көп сатылы бақылау",
                feedlot_title: "Семіздендіру алаңы",
                feedlot_desc1: "Ыңғайлы ұстау жағдайлары бар заманауи мал шаруашылығы кешені ет сапасы мен жануарлардың әл-ауқатын қамтамасыз етеді.",
                feedlot_desc2: "Біздің семіздендіру алаңымыз барлық заманауи талаптарды ескере отырып салынған және қажетті инфрақұрылыммен жабдықталған.",
                feature_infrastructure: "Заманауи инфрақұрылым",
                feature_infrastructure_desc: "Алаңдар жыл бойы жануарларды ыңғайлы ұстау жағдайларын қамтамасыз етеді",
                feature_feeding: "Сапалы азықтандыру",
                feature_feeding_desc: "Жануарлардың оңтайлы өсуі мен денсаулығы үшін теңдестірілген рациондар",
                feature_veterinary: "Ветеринариялық бақылау",
                feature_veterinary_desc: "Мал басының денсаулығын тұрақты бақылау және алдын алу шаралары"
            },
            // ОТВЕТСТВЕННОСТЬ
            responsibility: {
                badge: "Корпоративтік Әлеуметтік Жауапкершілік",
                hero_title: "Жауапкершілік",
                hero_subtitle: "Біз әлеуметтік жауапкершілік, этикалық бизнес жүргізу және адамдар мен қоршаған орта туралы қамқорлық арқылы тұрақты болашақ құрамыз",
                impact_title: "Әлеуметтік-экономикалық әсер",
                impact_desc: "Біздің компания қоғамға оң әсер етуге, жұмыс орындарын құруға, жергілікті қауымдастықтарды қолдауға және өңірді дамытуға инвестиция салуға тырысады",
                policy_title: "Біздің саясат пен этика",
                policy_desc: "Адалдық, ашықтық және ең жоғары этикалық стандарттарды сақтау біздің бизнесіміздің негізінде жатыр"
            },
            // НОВОСТИ
            news: {
                hero_title: "Жаңалықтар мен оқиғалар",
                hero_desc: "Біздің компанияның маңызды оқиғалары, жетістіктері және дамуы туралы біліңіз",
                featured_badge: "Басты оқиға",
                featured_title: "Абай өңірінде заманауи ет өңдеу кешенінің ашылуы",
                section_title: "Соңғы жаңалықтар"
            },
            // ВАКАНСИИ
            vacancies: {
                hero_title: "Жұмыс санаттары",
                hero_desc: "Біздің компанияда жұмыс істеу үшін бағытты таңдаңыз",
                filter_department: "Жұмыс санаттары",
                filter_location: "Орналасқан жері",
                filter_btn: "Бос орындарды табу",
                section_title: "Жұмыс санаттары",
                section_desc: "Қолайлы бағытты таңдаңыз",
                cta_title: "Қолайлы бос орынды таба алмадыңыз ба?",
                cta_desc: "Бізге резюмеңізді жіберіңіз, қолайлы позиция пайда болғанда біз сізбен хабарласамыз. Біз әрқашан талантты және мақсатқа ұмтылған мамандарды қуантамыз.",
                cta_btn: "Резюме жіберу"
            },
            // КОНТАКТЫ
            contacts: {
                hero_title: "Бізбен байланысыңыз",
                hero_desc: "Біз әрқашан сіздің сұрақтарыңызға жауап беруге және ынтымақтастық мүмкіндіктерін талқылауға дайынбыз",
                address_title: "Мекенжайы",
                phone_title: "Телефон",
                email_title: "Email",
                requisites_title: "Деректемелер",
                form_title: "Бізге жазыңыз",
                form_desc: "Форманы толтырыңыз, біз сізбен жақын арада хабарласамыз",
                form_name: "Сіздің атыңыз",
                form_email: "Email",
                form_phone: "Телефон",
                form_subject: "Өтініш тақырыбы",
                form_message: "Хабарлама",
                form_btn: "Хабарлама жіберу",
                additional_title: "Бізбен қалай байланысуға болады",
                additional_coop: "Ынтымақтастық",
                additional_suppliers: "Жеткізушілерге",
                additional_vacancies: "Бос орындар"
            }
        },
        en: {
            navigation: {
                menu_home: "About Company",
                menu_responsibility: "Responsibility",
                menu_activity: "Activities",
                menu_news: "News", 
                menu_vacancies: "Vacancies",
                menu_contacts: "Contacts"
            },
            // INDEX.HTML
            index: {
                hero_title: "Full-cycle Agro-industrial Company",
                hero_desc: "Modern full-cycle agro-industrial holding, straight from the Kazakh steppes",
                about_title: "About Us",
                about_desc1: "Eurasia Agro Semey is a vertically integrated agro-industrial company that combines key areas of agribusiness. The company's structure includes the Semey Meat Company meat processing plant, the modern Semey Feedlot fattening area, as well as the Prirechnoye farm, which specializes in growing vegetables.",
                about_desc2: "The company controls the entire production cycle - from growing agricultural products and fattening livestock to meat processing, ensuring stable quality, safety and reliability of supplies.",
                about_feature1: "Modern equipment of European production",
                about_feature2: "Full production cycle from fattening to finished products",
                about_feature3: "Strict quality control at all stages",
                about_feature4: "Qualified personnel with many years of experience",
                about_feature5: "Environmentally responsible production",
                leadership_title: "Leadership",
                leadership_desc: "Our team of professionals"
            },
            // ВИД ДЕЯТЕЛЬНОСТИ
            activity: {
                hero_processing_title: "Meat Processing Complex",
                hero_processing_desc: "Modern production with full cycle meat processing",
                hero_feedlot_title: "Feedlot",
                hero_feedlot_desc: "Advanced technologies for cattle breeding and fattening",
                btn_more: "Learn More",
                processing_title: "Meat Processing Complex",
                processing_desc1: "Our modern complex is equipped with the latest generation European equipment, which allows us to produce a wide range of high-quality meat products.",
                processing_desc2: "We apply advanced processing technologies and strict quality control at every stage of production.",
                feature_equipment: "Modern Equipment",
                feature_equipment_desc: "European production lines for high-quality products",
                feature_cooling: "Refrigeration Facilities",
                feature_cooling_desc: "Modern refrigeration chambers for proper storage at optimal temperature",
                feature_quality: "Quality Control",
                feature_quality_desc: "Multi-stage control at all stages - from raw materials to finished products",
                feedlot_title: "Feedlot",
                feedlot_desc1: "Modern livestock complex with comfortable keeping conditions ensures high meat quality and animal welfare.",
                feedlot_desc2: "Our feedlot is built taking into account all modern requirements and equipped with necessary infrastructure.",
                feature_infrastructure: "Modern Infrastructure",
                feature_infrastructure_desc: "Facilities provide comfortable conditions for keeping animals year-round",
                feature_feeding: "Quality Feeding",
                feature_feeding_desc: "Balanced rations for optimal growth and health of animals",
                feature_veterinary: "Veterinary Control",
                feature_veterinary_desc: "Constant monitoring of livestock health and preventive measures"
            },
            // ОТВЕТСТВЕННОСТЬ
            responsibility: {
                badge: "Corporate Social Responsibility",
                hero_title: "Responsibility",
                hero_subtitle: "We build a sustainable future through social responsibility, ethical business practices and care for people and the environment",
                impact_title: "Social and Economic Impact",
                impact_desc: "Our company strives for positive impact on society, creating jobs, supporting local communities and investing in regional development",
                policy_title: "Our Policy and Ethics",
                policy_desc: "Honesty, transparency and adherence to the highest ethical standards are the foundation of our business"
            },
            // НОВОСТИ
            news: {
                hero_title: "News and Stories",
                hero_desc: "Learn about important events, achievements and development of our company",
                featured_badge: "Featured Event",
                featured_title: "Opening of modern meat processing complex in Abai region",
                section_title: "Latest News"
            },
            // ВАКАНСИИ
            vacancies: {
                hero_title: "Job Categories",
                hero_desc: "Choose a direction to work in our company",
                filter_department: "Job Categories",
                filter_location: "Location",
                filter_btn: "Find Vacancies",
                section_title: "Job Categories",
                section_desc: "Choose the right direction",
                cta_title: "Haven't found a suitable vacancy?",
                cta_desc: "Send us your resume and we will contact you when a suitable position appears. We are always happy to welcome talented and goal-oriented specialists.",
                cta_btn: "Submit Resume"
            },
            // КОНТАКТЫ
            contacts: {
                hero_title: "Contact Us",
                hero_desc: "We are always ready to answer your questions and discuss cooperation opportunities",
                address_title: "Address",
                phone_title: "Phone",
                email_title: "Email",
                requisites_title: "Details",
                form_title: "Write to Us",
                form_desc: "Fill out the form and we will contact you shortly",
                form_name: "Your Name",
                form_email: "Email",
                form_phone: "Phone",
                form_subject: "Subject",
                form_message: "Message",
                form_btn: "Send Message",
                additional_title: "How to Contact Us",
                additional_coop: "Cooperation",
                additional_suppliers: "For Suppliers",
                additional_vacancies: "Vacancies"
            }
        }
    };
    
    let originalTexts = {};
    let isOriginalTextsSaved = false;
    
    function saveOriginalTexts() {
        if (isOriginalTextsSaved) return;
        
        // Сохраняем меню
        const menuItems = document.querySelectorAll('.nav-links a');
        originalTexts.menu = Array.from(menuItems).map(item => item.textContent);
        
        // Сохраняем все элементы с data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (!originalTexts[key]) {
                originalTexts[key] = element.textContent;
            }
        });
        
        isOriginalTextsSaved = true;
        console.log('Оригинальные тексты сохранены');
    }
    
    function applyTranslation(lang) {
        const t = translations[lang];
        
        // Применяем переводы для всех элементов с data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const value = getNestedValue(t, key);
            if (value) {
                element.textContent = value;
                console.log(`Переведен элемент: ${key} -> ${value}`);
            } else {
                console.warn(`Перевод не найден для ключа: ${key}`);
            }
        });
    }
    
    function getNestedValue(obj, path) {
        // Для ключей типа "index_hero_title" ищем в obj.index.hero_title
        // Для ключей типа "activity_processing_title" ищем в obj.activity.processing_title
        
        const parts = path.split('_');
        if (parts.length < 2) return null;
        
        const section = parts[0]; // например "index", "activity", "responsibility"
        const key = parts.slice(1).join('_'); // например "hero_title", "processing_title"
        
        if (obj[section] && obj[section][key] !== undefined) {
            return obj[section][key];
        }
        
        return null;
    }
    
    function restoreOriginalTexts() {
        // Восстанавливаем меню
        const menuItems = document.querySelectorAll('.nav-links a');
        menuItems.forEach((item, index) => {
            if (originalTexts.menu && originalTexts.menu[index]) {
                item.textContent = originalTexts.menu[index];
            }
        });
        
        // Восстанавливаем все элементы с data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (originalTexts[key]) {
                element.textContent = originalTexts[key];
            }
        });
    }
    
    // Простая функция переводов
    window.switchLanguage = function(lang, event) {
        console.log('Переключение на язык:', lang);
        
        // Сохраняем оригинальные тексты при первом вызове
        saveOriginalTexts();
        
        // Обновляем активную кнопку
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Получаем кнопку из события
        const targetBtn = event ? event.target : null;
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
        
        if (lang === 'ru') {
            restoreOriginalTexts();
        } else {
            applyTranslation(lang);
        }
        
        // Сохраняем выбранный язык
        localStorage.setItem('selectedLanguage', lang);
        console.log('Перевод завершен для языка:', lang);
    };
    
    // Загружаем сохраненный язык при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        
        // Устанавливаем активную кнопку языка
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
            if ((savedLanguage === 'ru' && btn.textContent.includes('Рус')) ||
                (savedLanguage === 'kz' && btn.textContent.includes('Каз')) ||
                (savedLanguage === 'en' && btn.textContent.includes('Eng'))) {
                btn.classList.add('active');
            }
        });
        
        // Применяем переводы только если язык не русский
        if (savedLanguage !== 'ru') {
            switchLanguage(savedLanguage, { target: document.querySelector('.language-btn.active') });
        }
    });
}

// Инициализируем переводы
initTranslations();