import os
import pyrebase

firebase_config = {
    'apiKey': os.getenv('FIREBASE_API_KEY'),
    'authDomain': os.getenv('FIREBASE_AUTH_DOMAIN'),
    'databaseURL': os.getenv('FIREBASE_DB_URL'),
    'storageBucket': os.getenv('FIREBASE_STORAGE_BUCKET'),
}
firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()
db = firebase.database()
