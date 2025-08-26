var userLang = navigator.language || navigator.userLanguage;

// Tiếng Việt (Vietnamese)
if (userLang.startsWith('vi')) {
    document.documentElement.lang = "vi";
    document.getElementById('txt-slogan').textContent = "Ứng dụng cho trẻ em học tiếng Anh và nâng cao trí thông minh!";
    document.getElementById('txt-desc-1').textContent = "King English Kids là một ứng dụng học tiếng Anh thú vị và dễ sử dụng dành cho trẻ em. Với sự kết hợp giữa học từ vựng, luyện nghe và đọc tiếng Anh, ứng dụng này mang lại một môi trường học tập tương tác và hấp dẫn, giúp trẻ em nắm bắt kiến thức một cách hiệu quả và vui nhộn.";
    document.getElementById('txt-desc-2').textContent = "Với tính năng học từ vựng, trẻ em có thể khám phá những từ mới thông qua hình ảnh sinh động và âm thanh sống động. Ứng dụng cung cấp các chủ đề phong phú như động vật, màu sắc, số đếm, đồ chơi và nhiều hơn nữa. Trẻ em sẽ được nghe và nhìn các từ tiếng Anh, cùng với phiên âm và nghĩa của chúng. Điều này giúp trẻ em xây dựng nền tảng từ vựng vững chắc từ nhỏ.";
    document.getElementById('txt-send-feedback').textContent = "Gửi phản hồi";
    document.getElementById('txt-intro').textContent = "Giới thiệu";
    document.getElementById('txt-download').textContent = "Tải ứng dụng";
    document.getElementById('txt-download-2').textContent = "Tải ứng dụng";
}

// Tiếng Ả Rập (Arabic)
if (userLang.startsWith('ar')) {
    document.documentElement.lang = "ar";
    document.getElementById('txt-slogan').textContent = "تطبيق للأطفال لتعلم اللغة الإنجليزية وتعزيز ذكائهم!";
    document.getElementById('txt-desc-1').textContent = "King English Kids هو تطبيق لتعلم اللغة الإنجليزية يتميز بجاذبيته وسهولة استخدامه، وهو مصمم خصيصًا للأطفال. يجمع التطبيق بين تعلم المفردات، التدريب على الاستماع، وتمارين القراءة باللغة الإنجليزية، مما يخلق بيئة تعلم تفاعلية وممتعة، تُمكّن الأطفال من اكتساب المعرفة بشكل فعال أثناء الاستمتاع.";
    document.getElementById('txt-desc-2').textContent = "مع ميزة تعلم المفردات، يمكن للأطفال استكشاف كلمات جديدة من خلال صور نابضة بالحياة وأصوات مفعمة بالحيوية. يوفر التطبيق مجموعة واسعة من المواضيع مثل الحيوانات، الألوان، الأرقام، الألعاب، والمزيد. سيستمع الأطفال إلى الكلمات الإنجليزية ويرونها مع نطقها ومعانيها. يساعد هذا الأطفال على بناء أساس قوي للمفردات منذ سن مبكرة.";
    document.getElementById('txt-send-feedback').textContent = "إرسال ملاحظات";
    document.getElementById('txt-intro').textContent = "مقدمة";
    document.getElementById('txt-download').textContent = "تحميل التطبيق";
    document.getElementById('txt-download-2').textContent = "تحميل التطبيق";
}

// Tiếng Hindi (Hindi)
if (userLang.startsWith('hi')) {
    document.documentElement.lang = "hi";
    document.getElementById('txt-slogan').textContent = "बच्चों के लिए अंग्रेजी सीखने और उनकी बुद्धिमत्ता बढ़ाने के लिए एक ऐप!";
    document.getElementById('txt-desc-1').textContent = "King English Kids एक आकर्षक और उपयोगकर्ता के अनुकूल अंग्रेजी सीखने का ऐप है, जिसे विशेष रूप से बच्चों के लिए डिज़ाइन किया गया है। यह ऐप शब्दावली सीखने, सुनने का अभ्यास, और अंग्रेजी पढ़ने के अभ्यास को मिलाकर एक इंटरैक्टिव और आनंददायक शिक्षण वातावरण बनाता है, जिससे बच्चे मज़े के साथ ज्ञान को प्रभावी ढंग से ग्रहण कर सकते हैं।";
    document.getElementById('txt-desc-2').textContent = "शब्दावली सीखने की सुविधा के साथ, बच्चे जीवंत चित्रों और जीवंत ध्वनियों के माध्यम से नए शब्दों का अन्वेषण कर सकते हैं। ऐप जानवरों, रंगों, संख्याओं, खिलौनों और अन्य कई विषयों की एक विस्तृत श्रृंखला प्रदान करता है। बच्चे अंग्रेजी शब्दों को सुनेंगे और देखेंगे, साथ ही उनके उच्चारण और अर्थ को भी जानेंगे। इससे बच्चों को कम उम्र से ही एक मजबूत शब्दावली आधार बनाने में मदद मिलती है।";
    document.getElementById('txt-send-feedback').textContent = "प्रतिक्रिया भेजें";
    document.getElementById('txt-intro').textContent = "परिचय";
    document.getElementById('txt-download').textContent = "ऐप डाउनलोड करें";
    document.getElementById('txt-download-2').textContent = "ऐप डाउनलोड करें";
}


// Tiếng Tây Ban Nha (Spanish)
if (userLang.startsWith('es')) {
    document.documentElement.lang = "es";
    document.getElementById('txt-slogan').textContent = "¡Una aplicación para que los niños aprendan inglés y mejoren su inteligencia!";
    document.getElementById('txt-desc-1').textContent = "King English Kids es una aplicación de aprendizaje de inglés atractiva y fácil de usar, diseñada específicamente para niños. Combinando el aprendizaje de vocabulario, la práctica de la escucha y los ejercicios de lectura en inglés, esta aplicación crea un entorno de aprendizaje interactivo y agradable, permitiendo a los niños adquirir conocimientos de manera efectiva mientras se divierten.";
    document.getElementById('txt-desc-2').textContent = "Con la función de aprendizaje de vocabulario, los niños pueden explorar nuevas palabras a través de imágenes vibrantes y sonidos animados. La aplicación ofrece una amplia gama de temas como animales, colores, números, juguetes y más. Los niños escucharán y verán palabras en inglés, junto con su pronunciación y significados. Esto ayuda a los niños a construir una base sólida de vocabulario desde una edad temprana.";
    document.getElementById('txt-send-feedback').textContent = "Enviar comentarios";
    document.getElementById('txt-intro').textContent = "Introducción";
    document.getElementById('txt-download').textContent = "Descargar la aplicación";
    document.getElementById('txt-download-2').textContent = "Descargar la aplicación";
}


// Tiếng Pháp (French)
if (userLang.startsWith('fr')) {
    document.documentElement.lang = "fr";
    document.getElementById('txt-slogan').textContent = "Une application pour les enfants pour apprendre l'anglais et améliorer leur intelligence !";
    document.getElementById('txt-desc-1').textContent = "King English Kids est une application d'apprentissage de l'anglais attrayante et conviviale, spécialement conçue pour les enfants. En combinant l'apprentissage du vocabulaire, la pratique de l'écoute et les exercices de lecture en anglais, cette application crée un environnement d'apprentissage interactif et agréable, permettant aux enfants d'acquérir efficacement des connaissances tout en s'amusant.";
    document.getElementById('txt-desc-2').textContent = "Avec la fonctionnalité d'apprentissage du vocabulaire, les enfants peuvent explorer de nouveaux mots à travers des images colorées et des sons animés. L'application propose une large gamme de thèmes tels que les animaux, les couleurs, les chiffres, les jouets et bien plus encore. Les enfants écouteront et verront les mots anglais, ainsi que leur prononciation et leur signification. Cela aide les enfants à se constituer une base solide de vocabulaire dès le plus jeune âge.";
    document.getElementById('txt-send-feedback').textContent = "Envoyer des commentaires";
    document.getElementById('txt-intro').textContent = "Introduction";
    document.getElementById('txt-download').textContent = "Télécharger l'application";
    document.getElementById('txt-download-2').textContent = "Télécharger l'application";
}

// Tiếng Nhật (Japanese)
if (userLang.startsWith('ja')) {
    document.documentElement.lang = "ja";
    document.getElementById('txt-slogan').textContent = "子供が英語を学び、知能を高めるためのアプリ！";
    document.getElementById('txt-desc-1').textContent = "King English Kidsは、特に子供向けにデザインされた魅力的で使いやすい英語学習アプリです。語彙学習、リスニング練習、英語の読解練習を組み合わせ、このアプリはインタラクティブで楽しい学習環境を作り出し、子供たちが楽しみながら効果的に知識を身につけることができるようにします。";
    document.getElementById('txt-desc-2').textContent = "語彙学習機能を使って、子供たちは鮮やかな画像や生き生きとした音を通じて新しい言葉を探求できます。このアプリは、動物、色、数字、おもちゃなど、さまざまなトピックを提供しています。子供たちは英単語を聞いたり見たりして、発音や意味を学びます。これにより、子供たちは幼い頃から強固な語彙の基礎を築くことができます。";
    document.getElementById('txt-send-feedback').textContent = "フィードバックを送信";
    document.getElementById('txt-intro').textContent = "紹介";
    document.getElementById('txt-download').textContent = "アプリをダウンロード";
    document.getElementById('txt-download-2').textContent = "アプリをダウンロード";
}

// Tiếng Hàn (Korean)
if (userLang.startsWith('ko')) {
    document.documentElement.lang = "ko";
    document.getElementById('txt-slogan').textContent = "아이들이 영어를 배우고 지능을 향상시키는 앱!";
    document.getElementById('txt-desc-1').textContent = "King English Kids는 어린이를 위해 특별히 설계된 매력적이고 사용하기 쉬운 영어 학습 앱입니다. 이 앱은 어휘 학습, 듣기 연습, 영어 읽기 연습을 결합하여 상호작용적이고 즐거운 학습 환경을 조성하며, 어린이들이 재미있게 지식을 효과적으로 습득할 수 있도록 도와줍니다.";
    document.getElementById('txt-desc-2').textContent = "어휘 학습 기능을 통해 어린이들은 생동감 넘치는 이미지와 활기찬 소리를 통해 새로운 단어를 탐색할 수 있습니다. 이 앱은 동물, 색깔, 숫자, 장난감 등 다양한 주제를 제공합니다. 어린이들은 영어 단어를 듣고 보고 발음과 의미를 함께 배웁니다. 이는 어린이들이 어릴 때부터 강력한 어휘 기초를 다지는 데 도움을 줍니다.";
    document.getElementById('txt-send-feedback').textContent = "피드백 보내기";
    document.getElementById('txt-intro').textContent = "소개";
    document.getElementById('txt-download').textContent = "앱 다운로드";
    document.getElementById('txt-download-2').textContent = "앱 다운로드";
}

// Tiếng Trung (Chinese)
if (userLang.startsWith('zh')) {
    document.documentElement.lang = "zh";
    document.getElementById('txt-slogan').textContent = "一款帮助儿童学习英语并提高智力的应用！";
    document.getElementById('txt-desc-1').textContent = "King English Kids 是一款专为儿童设计的有趣且用户友好的英语学习应用。通过结合词汇学习、听力练习和英语阅读练习，这款应用创建了一个互动且愉快的学习环境，使孩子们能够在享受乐趣的同时有效地掌握知识。";
    document.getElementById('txt-desc-2').textContent = "通过词汇学习功能，孩子们可以通过生动的图片和活泼的声音探索新词汇。该应用提供了广泛的主题，如动物、颜色、数字、玩具等。孩子们会听到和看到英语单词，并了解其发音和含义。这有助于孩子们从小就建立坚实的词汇基础。";
    document.getElementById('txt-send-feedback').textContent = "发送反馈";
    document.getElementById('txt-intro').textContent = "简介";
    document.getElementById('txt-download').textContent = "下载应用";
    document.getElementById('txt-download-2').textContent = "下载应用";
}

// Tiếng Malaysia (Malay)
if (userLang.startsWith('ms')) {
    document.documentElement.lang = "ms";
    document.getElementById('txt-slogan').textContent = "Aplikasi untuk kanak-kanak belajar bahasa Inggeris dan meningkatkan kecerdasan mereka!";
    document.getElementById('txt-desc-1').textContent = "King English Kids ialah aplikasi pembelajaran bahasa Inggeris yang menarik dan mesra pengguna, direka khas untuk kanak-kanak. Menggabungkan pembelajaran kosa kata, latihan mendengar, dan latihan membaca bahasa Inggeris, aplikasi ini mewujudkan persekitaran pembelajaran yang interaktif dan menyeronokkan, membolehkan kanak-kanak memperoleh pengetahuan dengan berkesan sambil berseronok.";
    document.getElementById('txt-desc-2').textContent = "Dengan ciri pembelajaran kosa kata, kanak-kanak boleh meneroka perkataan baharu melalui imej yang terang dan bunyi yang ceria. Aplikasi ini menawarkan pelbagai topik seperti haiwan, warna, nombor, mainan dan banyak lagi. Kanak-kanak akan mendengar dan melihat perkataan bahasa Inggeris bersama-sama sebutan dan maknanya. Ini membantu kanak-kanak membina asas kosa kata yang kukuh dari usia muda.";
    document.getElementById('txt-send-feedback').textContent = "Hantar Maklum Balas";
    document.getElementById('txt-intro').textContent = "Pengenalan";
    document.getElementById('txt-download').textContent = "Muat turun aplikasi";
    document.getElementById('txt-download-2').textContent = "Muat turun aplikasi";
}

// Tiếng Indonesia (Indonesian)
if (userLang.startsWith('id')) {
    document.documentElement.lang = "id";
    document.getElementById('txt-slogan').textContent = "Aplikasi untuk anak-anak belajar bahasa Inggris dan meningkatkan kecerdasan mereka!";
    document.getElementById('txt-desc-1').textContent = "King English Kids adalah aplikasi pembelajaran bahasa Inggris yang menarik dan mudah digunakan, dirancang khusus untuk anak-anak. Menggabungkan pembelajaran kosakata, latihan mendengarkan, dan latihan membaca bahasa Inggris, aplikasi ini menciptakan lingkungan belajar yang interaktif dan menyenangkan, memungkinkan anak-anak untuk memahami pengetahuan secara efektif sambil bersenang-senang.";
    document.getElementById('txt-desc-2').textContent = "Dengan fitur pembelajaran kosakata, anak-anak dapat menjelajahi kata-kata baru melalui gambar yang hidup dan suara yang ceria. Aplikasi ini menawarkan berbagai topik seperti hewan, warna, angka, mainan, dan banyak lagi. Anak-anak akan mendengar dan melihat kata-kata dalam bahasa Inggris, bersama dengan pengucapan dan maknanya. Ini membantu anak-anak membangun dasar kosakata yang kuat sejak usia dini.";
    document.getElementById('txt-send-feedback').textContent = "Kirim Umpan Balik";
    document.getElementById('txt-intro').textContent = "Pengantar";
    document.getElementById('txt-download').textContent = "Unduh aplikasi";
    document.getElementById('txt-download-2').textContent = "Unduh aplikasi";
}

// Tiếng Nga (Russian)
if (userLang.startsWith('ru')) {
    document.documentElement.lang = "ru";
    document.getElementById('txt-slogan').textContent = "Приложение для детей, помогающее изучать английский язык и развивать интеллект!";
    document.getElementById('txt-desc-1').textContent = "King English Kids — это увлекательное и удобное приложение для изучения английского языка, специально разработанное для детей. Сочетая изучение словарного запаса, упражнения на слух и чтение на английском языке, это приложение создает интерактивную и приятную учебную среду, позволяя детям эффективно осваивать знания, получая удовольствие от процесса.";
    document.getElementById('txt-desc-2').textContent = "С помощью функции изучения словарного запаса дети могут исследовать новые слова через яркие изображения и живые звуки. Приложение предлагает широкий выбор тем, таких как животные, цвета, числа, игрушки и многое другое. Дети будут слышать и видеть английские слова, а также их произношение и значения. Это помогает детям создавать прочную основу словарного запаса с раннего возраста.";
    document.getElementById('txt-send-feedback').textContent = "Отправить отзыв";
    document.getElementById('txt-intro').textContent = "Введение";
    document.getElementById('txt-download').textContent = "Скачать приложение";
    document.getElementById('txt-download-2').textContent = "Скачать приложение";
}

// Tiếng Bengali (Bengali)
if (userLang.startsWith('bn')) {
    document.documentElement.lang = "bn";
    document.getElementById('txt-slogan').textContent = "শিশুদের ইংরেজি শেখার এবং তাদের বুদ্ধিমত্তা বাড়ানোর জন্য একটি অ্যাপ!";
    document.getElementById('txt-desc-1').textContent = "King English Kids একটি আকর্ষণীয় এবং ব্যবহারকারী-বান্ধব ইংরেজি শেখার অ্যাপ যা বিশেষভাবে শিশুদের জন্য ডিজাইন করা হয়েছে। এটি শব্দভান্ডার শেখা, শ্রবণ অনুশীলন এবং ইংরেজি পড়ার অনুশীলনকে একত্রিত করে, একটি ইন্টারঅ্যাকটিভ এবং আনন্দদায়ক শেখার পরিবেশ তৈরি করে, যা শিশুদেরকে মজার সঙ্গে কার্যকরভাবে জ্ঞান অর্জন করতে সহায়তা করে।";
    document.getElementById('txt-desc-2').textContent = "শব্দভান্ডার শেখার বৈশিষ্ট্যের সাহায্যে, শিশুরা জীবন্ত চিত্র এবং প্রাণবন্ত শব্দের মাধ্যমে নতুন শব্দগুলি আবিষ্কার করতে পারে। অ্যাপটি বিভিন্ন বিষয় যেমন প্রাণী, রঙ, সংখ্যা, খেলনা এবং আরও অনেক কিছু প্রদান করে। শিশুরা ইংরেজি শব্দ শুনবে এবং দেখবে, পাশাপাশি তাদের উচ্চারণ এবং অর্থও শিখবে। এটি শিশুদেরকে ছোটবেলা থেকেই একটি শক্তিশালী শব্দভান্ডার ভিত্তি গড়তে সহায়তা করে।";
    document.getElementById('txt-send-feedback').textContent = "মতামত পাঠান";
    document.getElementById('txt-intro').textContent = "পরিচিতি";
    document.getElementById('txt-download').textContent = "অ্যাপ ডাউনলোড করুন";
    document.getElementById('txt-download-2').textContent = "অ্যাপ ডাউনলোড করুন";
}

// Tiếng Bồ Đào Nha (Portuguese)
if (userLang.startsWith('pt')) {
    document.documentElement.lang = "pt";
    document.getElementById('txt-slogan').textContent = "Um aplicativo para crianças aprenderem inglês e melhorarem sua inteligência!";
    document.getElementById('txt-desc-1').textContent = "King English Kids é um aplicativo de aprendizado de inglês envolvente e amigável, projetado especificamente para crianças. Combinando aprendizado de vocabulário, prática de escuta e exercícios de leitura em inglês, este aplicativo cria um ambiente de aprendizado interativo e divertido, permitindo que as crianças adquiram conhecimentos de forma eficaz enquanto se divertem.";
    document.getElementById('txt-desc-2').textContent = "Com o recurso de aprendizado de vocabulário, as crianças podem explorar novas palavras através de imagens vibrantes e sons animados. O aplicativo oferece uma ampla gama de tópicos, como animais, cores, números, brinquedos e muito mais. As crianças ouvirão e verão palavras em inglês, junto com sua pronúncia e significados. Isso ajuda as crianças a construir uma base sólida de vocabulário desde cedo.";
    document.getElementById('txt-send-feedback').textContent = "Enviar Feedback";
    document.getElementById('txt-intro').textContent = "Introdução";
    document.getElementById('txt-download').textContent = "Baixar o aplicativo";
    document.getElementById('txt-download-2').textContent = "Baixar o aplicativo";
}

// Tiếng Urdu (Urdu)
if (userLang.startsWith('ur')) {
    document.documentElement.lang = "ur";
    document.getElementById('txt-slogan').textContent = "بچوں کے لیے انگریزی سیکھنے اور ان کی ذہانت کو بڑھانے کے لیے ایک ایپ!";
    document.getElementById('txt-desc-1').textContent = "King English Kids ایک دلچسپ اور صارف دوست انگریزی سیکھنے والی ایپ ہے جو خاص طور پر بچوں کے لیے تیار کی گئی ہے۔ یہ ایپ الفاظ کے سیکھنے، سننے کی مشق، اور انگریزی پڑھنے کی مشق کو ملا کر ایک متعامل اور خوشگوار سیکھنے کا ماحول پیدا کرتی ہے، جس سے بچوں کو مؤثر طریقے سے علم حاصل کرنے میں مدد ملتی ہے جبکہ وہ تفریح بھی کرتے ہیں۔";
    document.getElementById('txt-desc-2').textContent = "الفاظ کے سیکھنے کی خصوصیت کے ساتھ، بچے زندگی سے بھرپور تصاویر اور خوشگوار آوازوں کے ذریعے نئے الفاظ تلاش کر سکتے ہیں۔ ایپ مختلف موضوعات جیسے کہ جانور، رنگ، نمبر، کھلونے اور بہت کچھ فراہم کرتی ہے۔ بچے انگریزی الفاظ سنیں گے اور دیکھیں گے، ساتھ ہی ان کے تلفظ اور معانی بھی سیکھیں گے۔ یہ بچوں کو کم عمری سے ہی مضبوط الفاظ کی بنیاد بنانے میں مدد دیتا ہے۔";
    document.getElementById('txt-send-feedback').textContent = "فیڈبیک بھیجیں";
    document.getElementById('txt-intro').textContent = "تعارف";
    document.getElementById('txt-download').textContent = "ایپ ڈاؤن لوڈ کریں";
    document.getElementById('txt-download-2').textContent = "ایپ ڈاؤن لوڈ کریں";

}

// Tiếng Thái (Thai)
if (userLang.startsWith('th')) {
    document.documentElement.lang = "th";
    document.getElementById('txt-slogan').textContent = "แอปพลิเคชันสำหรับเด็กในการเรียนรู้ภาษาอังกฤษและเพิ่มพูนสติปัญญา!";
    document.getElementById('txt-desc-1').textContent = "King English Kids เป็นแอปเรียนภาษาอังกฤษที่น่าสนใจและใช้งานง่าย ออกแบบมาโดยเฉพาะสำหรับเด็ก แอปนี้รวมการเรียนรู้คำศัพท์ การฝึกฟัง และการฝึกอ่านภาษาอังกฤษเข้าด้วยกัน สร้างสภาพแวดล้อมการเรียนรู้ที่มีปฏิสัมพันธ์และสนุกสนาน ช่วยให้เด็ก ๆ สามารถเรียนรู้ได้อย่างมีประสิทธิภาพในขณะที่สนุกสนาน";
    document.getElementById('txt-desc-2').textContent = "ด้วยฟีเจอร์การเรียนรู้คำศัพท์ เด็ก ๆ สามารถสำรวจคำใหม่ ๆ ผ่านภาพที่มีสีสันและเสียงที่สดใส แอปนี้มีหัวข้อหลากหลาย เช่น สัตว์ สี ตัวเลข ของเล่น และอื่น ๆ เด็ก ๆ จะได้ยินและเห็นคำภาษาอังกฤษ พร้อมทั้งการออกเสียงและความหมาย การเรียนรู้เหล่านี้ช่วยให้เด็ก ๆ สร้างพื้นฐานคำศัพท์ที่แข็งแกร่งตั้งแต่อายุยังน้อย";
    document.getElementById('txt-send-feedback').textContent = "ส่งข้อเสนอแนะ";
    document.getElementById('txt-intro').textContent = "แนะนำ";
    document.getElementById('txt-download').textContent = "ดาวน์โหลดแอป";
    document.getElementById('txt-download-2').textContent = "ดาวน์โหลดแอป";
}

// Tiếng Anh (English)
if (userLang.startsWith('en')) {
    document.documentElement.lang = "en";
    document.getElementById('txt-slogan').textContent = "The App for Kids to Learn English & Grow Smarter!";
    document.getElementById('txt-desc-1').textContent = "King English Kids is an engaging and user-friendly English learning app designed specifically for children. Combining vocabulary learning, listening practice, and English reading exercises, this app creates an interactive and enjoyable learning environment, enabling children to effectively grasp knowledge while having fun.";
    document.getElementById('txt-desc-2').textContent = "With the vocabulary learning feature, children can explore new words through vibrant images and lively sounds. The app offers a wide range of topics such as animals, colors, numbers, toys, and more. Children will listen to and see English words, along with their pronunciation and meanings. This helps children build a strong vocabulary foundation from an early age.";
    document.getElementById('txt-send-feedback').textContent = "Send Feedback"
    document.getElementById('txt-intro').textContent = "Introduction"
    document.getElementById('txt-download').textContent = "Download the app"
    document.getElementById('txt-download-2').textContent = "Download the app"
}

function sendFeedback() {
    window.open("https://forms.gle/DdiecdZYQH2hqVZN8", "_blank");
}


function openStore() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const platform = navigator.platform.toLowerCase();

    // Điện thoại Android
    if (/android/i.test(ua)) {
        window.open("https://play.google.com/store/apps/details?id=com.vngame.kingenglishkids", "_blank");
    }
    // Thiết bị Apple (iOS)
    else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        window.open("https://apps.apple.com/app/id6449469018", "_blank");
    }
    // Máy tính macOS
    else if (platform.includes("mac")) {
        window.open("https://apps.apple.com/app/id6449469018", "_blank");
    }
    // Máy tính Windows
    else if (platform.includes("win")) {
        window.open("https://play.google.com/store/apps/details?id=com.vngame.kingenglishkids", "_blank");
    }
    // Hệ điều hành khác
    else {
        alert("Device not supported.");
    }
}

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);