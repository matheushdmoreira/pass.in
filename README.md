<p align="center">
  <img src="https://docs.google.com/uc?id=16DybhM_UpZ45gmigtwXo79MFpBBGvhIY" width="100%" />
</p>

# Pass.In - Mobile App

Esta aplicação que tem o nome de Pass.in consiste em uma aplicação para realização de inscrição para um determinado evento. 🚀

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto em sua máquina.

Comece clonando o repositório:

```sh
git clone https://github.com/matheushdmoreira/pass.in
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Após instalar o Node.js, vamos acessar a pasta api do projeto, instalar as dependências e, então, subir o servidor HTTP.

```sh
cd server

# Instalando as dependências
npm install

# Subir o servidor HTTP
npm run dev
```

### Mobile

Para executar o app pass.in utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Instalando suas dependências:

```sh
cd mobile

# Instalando as dependências
npm install
```

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
npx expo start
```

## Links rápidos ↗

- [Layout | Figma 🎨](https://www.figma.com/file/loOsLyQ1exuBRPDuT8xSND/pass.in?type=design&node-id=2007-1477&mode=design&t=0czApPOozEGaejnY-0)

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage)
- [NativeWind](https://www.nativewind.dev/quick-starts/expo)
- [React Native QRCode SVG](https://github.com/exzos28/react-native-qr-svg)
- [React Native Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
- [Moti](https://moti.fyi/installation)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## License

MIT License © [Matheus Moreira](https://github.com/matheushdmoreira)

