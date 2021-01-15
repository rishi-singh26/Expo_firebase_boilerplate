# Expo app with firebse authentication and stack navigation setup

## Installation

```sh
$ git clone https://github.com/rishi-singh26/Code_Scanner.git
Clones this repo
$ npm install
Install all the node modules
$ expo upgrade
```

### Firebase credentials setup

- Create a new folder named "Conatants" inside src.
- Inside "src" foldar create a file by name "Api.js"
- Inside "Api.js" copy the code below

```sh
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PRIJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const cloudStorage = firebase.storage();
```

### Dependencies

| Dependencies     | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| GitHub           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |

### Todos

- Write MORE Tests
- Add Night Mode
