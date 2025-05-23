# Локальный запуск DecapCMS

**1. Поправить конфиг (`cms/config.yml`):**

```yaml
backend:
  ...
  name: git-gateway
  branch: master      # поменять на blog-development(или что там) на master

local_backend: true   # добавить
  ...
...
```

**2. Запустить backend-прокси в одной вкладке терминала:**

```sh
npx decap-server
```

**3. Во второй вкладке терминала раздать статику:**

```sh
serve cms/public -l 3000
```


**5. Открой в браузере:**

```
[http://localhost:3000](http://localhost:3000)
```
