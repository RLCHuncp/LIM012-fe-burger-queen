const firebasemock = require('firebase-mock');

const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
export default firebasemock.MockFirebaseSdk(
    () => null,
    () => mockfirestore,
);