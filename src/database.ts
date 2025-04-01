import { connect, connection } from 'mongoose'
                //mongodb://localhost:27017/proyecto
                const mongoURI = 'mongodb://127.0.0.1:27017/test';

export async function startConnection() {
    try {
        await connect(mongoURI, {
        });
        console.log('Connected to MongoDB successfully!');
    } catch (err) {
        console.error('Unable to connect to MongoDB. Error:', err);
    }
}
