# bvrio-challange

## Descrição do Projeto

<p align="center">Este é um pequeno projeto em <strong>Vue</strong>, que acessa a api <span> <a href='https://openweathermap.org/'>openweathermap.org</a></span> para pegar dados meteorológicos de acordo com a cidade digitada pelo usuário.</p>


<h3>Para servir corretamente a aplicação buildada, é preciso antes se atentar a alguns pontos</h3>
<br/>
<p>
    A aplicação está configurada para rodar em uma sub-pasta(<strong>/bv-rio/</strong>).
    Na documentação do <a href="https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations">vue-router</a> você pode ver como configurar seu servidor
    para servir a aplicação da maneira correta.
    Se for mudar o modo como a aplicação é servida, sugiro ler <a href="https://router.vuejs.org/api/#base">este tópico</a> do <strong>Vue-Router</strong> e <a href="https://cli.vuejs.org/config/#baseurl">este tópico</a> do <strong>Vue CLI</strong> para fazer tudo da maneira correta.
</p>

# OBS: O script de build não está funcionando ao rodar pelo terminal bash, use powershell ou cmd ou outro terminal. :)

## Antes de usar, instale as dependências

```
npm install
```

### Build do projeto em modo de desenvolvimento

```
npm run serve
```

### Build para produção

```
npm run build
```

### Lints e correções em arquivos

```
npm run lint
```

### Personalização

See [Configuration Reference](https://cli.vuejs.org/config/).
