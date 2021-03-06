# landingScroll

Я делаю лендинги, и у меня часто возникает ситуация сделать для него красивую прокрутку. Раньше я писал все с нуля, теперь у меня появилось время и я решил написать плагин для того, чтобы этот процесс автоматизировать.

Мой плагин работает с jquery версии 1.8.3, 2.2.4, 3.1.1. С jquery версии 3.1.1 он работает вместе с плагином jQuery Migrate v3.0.0, там разработчики что-то с prototype намутили.

Так же я подключил к проекту плагин jquery.easing.min.js, для красивой прокрутки, мой плагин будет работать и без этого плагина, но тогда будут всего 2 easing-а ('linear' и 'swing'), а прокрутка в таком случае будет не очень хорошая (не плавная). 

В моем проекте я использую easing: "easeInOutQuart" по умолчанию стоит "linear".

Мой плагин работает с адаптивными сайтами, и если вы сожмете экран, высота какого-то блока изменится, то величины прокрутки изменятся и плагин все равно будет прокручивать четко до нужных блоков.

Очень часто возникают проблемы с продвижением лендингов, поэтому многие делают в ссылках адреcа на страницы с информацией, а потом после загрузки js отменяют переходы по ссылкам. Поисковые роботы js не видят. Поэтому для поиска блоков для которых нужно прокручивать я использую атрибут data-link с названием блока до которого нужно осуществить прокрутку. Блок до которого нужно осуществить прокрутку должен содержать id с атрибутом из data-link ссылки.

В моем примере плагин инициализируется следующим кодом:

$('#nav a').landingScroll({'blockIndent': 59, 'activeIndent': 150, 'easing': 'easeInOutQuart'});

Помимо этих параметров в моем плагине есть следующие параметры:

- 'speed': Скорость с которой будет осуществляться прокрутка в милисекундах, по умолчанию 1000;

- 'easing': плавность прокрутки до нужного блока по умолчанию "linear", с плагином jquery.easing появляется много вариантов, советую им воспользоваться;

- 'blockIndent': вначале мой плагин определяет отступ до нужного блока, а потом из этого расстояния вычитает это число. Смотрите обычно в лендингах менюшки фиксятся, и чтобы осуществилась прокрутка четко до нужного блока нужно вычесть высоту этой менюшки, иначе она наедеит на блок;

- 'activeIndent': начале мой плагин определяет отступ до нужного блока, а потом из этого расстояния вычитает это число, это нужно для того, чтобы подсвечивать активный пункт индикатора раньше чем до него дойдет прокрутка, обычно этот параметр тесно связан с 'blockIndent' и он одинаков, но иногда менеджер проектов хочет, чтобы пункт меню становился активным раньше чем мы до него докрутили, последние проекты все такие;

- 'menuActiveClass': - название активного класса меню, по умолчанию он равен "active", но вы можете изменить его на любой, точка для класса не ставится;

- 'blockActiveEnable' - определяет будет ли добавляться класс к блокам до которых была осуществлена прокрутка, по умолчанию имеет значение false;

- 'blockActiveClass' - название класса которое будет добавляться к блоку до которого была осуществлена прокрутка, по умолчанию это 'activeBlock', параметр имеет значение только если 'blockActiveEnable' имеет значению 'true';

- 'callback' - как нитрудно догадаться это функция обратного вызова, пока выполняется 2 раза, для поддержки старых браузеров. Давно еще, одни браузеры поддерживали 'scrollTop' только для 'body', другие только для 'Html'  я прокручию и то, и то для поддержки. Отсюка код выполнится 2 раза, если от поддержки отказаться то все будет нормально.

Мой плагин работает c 8 IE))))))

Мой плагин лежит по следующему пути 'project/js/min/landingScroll.js' (Сжатая версия) или project/js/landingScroll.js (Нормальная версия).