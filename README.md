# bvrio-challange

## Descrição do Projeto

<p align="center">Este é um pequeno projeto em <strong>Vue</strong>, que acessa a api <span> <a href='https://openweathermap.org/'>openweathermap.org</a></span> para pegar dados meteorológicos de acordo com a cidade digitada pelo usuário.</p>

## Antes de usar

- <p>Para utilizar esta aplicação é necessário gerar uma AppId no site da openweathermap.org</p>
- <p>Esta AppId é necessária para realizar poder acessar a área de consulta de dados meteorológicos.</p>
- <p>Para obter a AppId basta apenas realizar as etapas de cadastro na openweathermap.org. Depois que esse processo for realizado e sua conta estiver ativada é só executar o projeto e ser feliz. :)</p>

## Build

<h3>Para servir corretamente a build da aplicação, é preciso antes se atentar a alguns pontos</h3>
<br/>
<p>
    A aplicação está configurada para rodar em uma sub-pasta(<strong> /bv-rio/ </strong>).
    Na documentação do <a href="https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations">vue-router</a> você pode ver como configurar seu servidor
    para servir a aplicação da maneira correta.
    Se for mudar o modo como a aplicação é servida, sugiro ler <a href="https://router.vuejs.org/api/#base">este tópico</a> do <strong>Vue-Router</strong> e <a href="https://cli.vuejs.org/config/#baseurl">este tópico</a> do <strong>Vue CLI</strong> para fazer tudo da maneira correta.
</p>

## OBS: O script de build não está funcionando ao rodar pelo terminal bash, mas você pode usar o powershell ou cmd ou outro terminal.

## Ao clonar o projeto instale as dependências

```
npm install
```

### Para rodar em modo de desenvolvimento

```
npm run serve
```

### Para gerar o build da aplicação

```
npm run build
```

### Lints e correções de arquivos

```
npm run lint
```

### Configurações personalizadas

See [Configuration Reference](https://cli.vuejs.org/config/).
