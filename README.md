### TODO:
* задокументировать проект
* дописать тесты

## Запуск проекта

```
npm install - устанавливаем зависимости

```

----
## Скрипты
- `npm run start:dev` ...
- `npm run start` - ...
- `npm run start:dev` - ...
- `npm run preview` - ...
- `npm run build` - ...
- `npm run prettier:check` - ...
- `npm run prettier:write` - ...
- `npm run lint:ts` - ...
- `npm run lint:ts:quiet` - ...
- `npm run lint:ts:fix` - ...
- `npm run lint:scss` - ...
- `npm run lint:scss:fix` - ...
- `npm run dev-server:start` - ...
- `npm run storybook:start` - ...
- `npm run storybook:build` - ...
- `npm run test:unit` - ...
- `npm run test:e2e` - ...
----

## Архитектура проекта

Проект написан в не строгом соответствии с методологией Feature sliced design
Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с Vue testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [/docs/tests.md](./docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:quiet` - Проверка ts файлов линтером - error-only
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import MyButton from './Button.vue';

export default {
   title: 'Example/Button',
   component: MyButton,
   argTypes: {
      backgroundColor: { control: 'color' },
      onClick: {},
      size: {
         control: { type: 'select' },
         options: ['small', 'medium', 'large'],
      },
   },
};

const Template = (args) => ({
   components: { MyButton },
   setup() {
      return { args };
   },
   template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};

```


----

## Конфигурация проекта

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в .github/workflows/[main.yaml](.github%2Fworkflows%2Fmain.yaml)

Конфигурация gitlab находится в .gitlab-ci.yml [.gitlab-ci.yml](.gitlab-ci.yml)

# В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.
# В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными


----
