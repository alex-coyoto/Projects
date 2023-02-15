# Veles Trading Mobile
This cross platform mobile application was written using Rect Native, [Expo library](https://expo.dev/) and JavaScript. 
The program uses local state management which passes the state from `MainPage.jsx` component to all application endpoints.
`ModalWindow.jsx` component keeps its own state since it has isolated data processing logic so encapsulation is reasonable in this case. 
All components use `.styles.js` files that contain `StyleSheet` object from React Native so those ShadowDOM styles will display correctly on any devices.

This app was successfully tested on **Android 9** ([emulator](https://developer.android.com/studio/run/emulator)), 
**Android 11** (physical device) and **iOS 16.1** (physical device)

  **Launching / Error handling**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218453065-88370a09-accd-4d0b-b352-f22ceb4c80d7.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  <img
  src="https://user-images.githubusercontent.com/125201494/218453495-a4190bfd-3c21-4556-bad4-26e11bf6e85f.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
  **Modal Window**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218454249-3cb0c246-f2a2-44b5-9410-a6f6485b823f.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
  
   **Invalid input handling**
  
  <img
  src="https://user-images.githubusercontent.com/125201494/218454690-9c529061-07a9-4600-a645-b662fd63b607.png"
  alt="Alt text"
  title="Optional title"
  style="width: 300px">
