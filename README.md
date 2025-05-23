# Локальный запуск DecapCMS

**1. Установи зависимости**

```sh
cd cms
npm install
```

**2. Поправь конфиг (`cms/config.yml`):**

```yaml
backend:
  ...
  name: git-gateway
  branch: master      # поменять на blog-development(или что там) на master

local_backend: true   # добавить
  ...
...
```

**3. Запусти backend-прокси в одной вкладке терминала:**

```sh
npx decap-server
```

**4. Во второй вкладке терминала раздай статику:**

```sh
npx serve public -l 3000
```


**5. Открой в браузере:**

```
[http://localhost:3000](http://localhost:3000)
```
