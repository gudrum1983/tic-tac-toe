Коротко: **класть стили рядом с компонентами — это нормально и вообще ок**, главное — **отделить “базовую дизайн-систему” от “локальных стилей компонента”**.

А ещё позырить тут (https://habr.com/ru/articles/471924/)

Разберём по полочкам.


-------
импорты статьи  https://sass-lang.com/documentation/at-rules/forward/ и https://sass-lang.com/documentation/at-rules/forward/



**[category]-[type]-[item]-[subitem]-[state]**

$color-background-button-primary-hover

**[category]-**[type]-**[item]-[subitem]-[state]**

$color-button-primary

[Category]-[Type]-[Item]-[SubItem]-[State]

Category – категория токена (color, font);

Type – тип токена (text, background, border);

Item – элемент (button, table, input);

SubItem – тип элемента (primary, secondary);

State – состояние элемента (default, hover, active).

/*
├── tokens/
│   ├── _palettes.scss         // сыровые палитры (primary-10…90, neutral-10…90)
│   ├── _semantic.scss         // семантические токены (color-bg, color-text, border...)
│   └── _themes.scss           // карты тем + генерация .theme-light, .theme-dark и т.д.
*/