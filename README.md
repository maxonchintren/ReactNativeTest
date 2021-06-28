# Тестовое задание (аутстафф)
#### Мобильное приложение отображает пагинированную ленту с постами пользователей, и при нажатии на конкретный пост позволяет посмотреть комментарии к нему.

### Используемые технологии

 * React Native
 * Redux
 * React Navigation
 * Axios
 * Mock-API JsonPlacheholder в качестве эмуляции работы с API 

### Развертывание проекта

 1. Установить в систему nodejs *(на примере macos)*

  brew install nodejs npm

 2. Настроить dev окружение в соотетствии с [документацией React Native](https://reactnative.dev/docs/environment-setup).

  В том числе, необходимо установить Xcode и Android Studio и настроить их для работы с React Native.

 4. Перейти в папку с проектом

  cd /path/to/project/folder/

 4. Установить зависимости

  npm install i

 5. Собрать Podfile

 `cd ios &&
 pod install`

 6. Запуска на iOS

 `cd /path/to/project/folder/ &&
 npm run ios`

 7. Запуска на Android

`cd /path/to/project/folder/  &&
 npm run android`
