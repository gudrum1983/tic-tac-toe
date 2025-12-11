# Автоматическое создание папки с файлами React компонентa

**Пакет - [Generate React CLI](https://www.npmjs.com/package/generate-react-cli)**

1. Первичный запуск для формирования конфигурационного файла (он же запуск без устанвки)

```bash
  npx generate-react-cli component Box 
```

Или для pnpm

```bash
  pnpx generate-react-cli component Button
```

2. После запуска, если нет конфигурационного файла, будет задано несколько вопросов, после ответа на которые будет
   создана
   папка с компонентом и конфигурационный файл в корне проекта generate-react-cli.json


3. Для создания кастомных шаблонов необходимо установить пакет в дев зависимости

```bash
  npm i -D generate-react-cli
```

Или для pnpm

```bash
  pnpm add -D generate-react-cli
```

4. После необходимо откорректировать шаблоны в папке `templates` и конфигурационный файл в свойстве `"component":`.


5. Если используется только одна папка/шаблон в `"component":` то создание по `default` доступно по команде

```bash
  npx generate-react-cli component Box
```

Или для pnpm

```bash
  pnpx generate-react-cli component Button
```

6. Если несколько кастомных шаблонов, то необходимо указывать тип через `--type=nameType`

```bash
  npx generate-react-cli component Box --type=atom
```

Или для pnpm

```bash
  pnpx generate-react-cli component Button --type=organism
```

7. Также можно создать скрипт в `package.json` так как пакет уже установлен как дев зависимость

```json
{
  "scripts": {
    "gen:component": "pnpm generate-react component",
    "gen:atom": "pnpm generate-react component --type=atom",
    "gen:layout": "pnpm generate-react component --type=layout",
    "gen:organism": "pnpm generate-react component --type=organism",
    "gen:molecule": "pnpm generate-react component --type=molecule"
  }
}
```

8. Команды создания дефолтных компонентов 
```bash
  npm run gen:component Box 
```
Или для pnpm

```bash
  pnpm gen:component Box
```

9. Команды создания кастомных компонентов
```bash
  npm run gen:layout -- Container 
```

Или для pnpm

```bash
  pnpm gen:layout -- Container
```

10. Так как ts/linter ругались на полупустые шаблоны, были добавлены файлы `css-modules.d.ts` и `tsconfig.json` локально в
папку `templates`