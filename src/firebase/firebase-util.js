import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =
    {
        apiKey: "AIzaSyCbOMHqnUZXndf9m1ExeuJOa1Xu6Ys-ZVs",
        authDomain: "onlinshoping-db.firebaseapp.com",
        databaseURL: "https://onlinshoping-db.firebaseio.com",
        projectId: "onlinshoping-db",
        storageBucket: "",
        messagingSenderId: "750729150562",
        appId: "1:750729150562:web:d1b09894423b6cad"
      };

      export const createUserProfileDocument = async (userAuth, additionalData) =>{
          if (!userAuth) return;
          const userRef = firestore.doc(`users/${userAuth.uid}`);
          const snapShot = await userRef.get();
          if(!snapShot.exists) {
              const {displayName, email} = userAuth;
              const createdAt = new Date ();
              try{
                  await userRef.set({
                      displayName,
                      email,
                      createdAt,
                      ...additionalData
                  })

              } catch (error){
                console.log('error creating user', error.message);
              }
          }

          return userRef;
      };

      firebase.initializeApp(config);
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ promt: 'select_account'});
      export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
      export default firebase;
