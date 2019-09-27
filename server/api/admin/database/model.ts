import { InterfaceDatabase } from './interface';
import { Document, Schema, model, Model } from 'mongoose';

export interface InterfaceDbModel extends InterfaceDatabase, Document {
    _id: string;
}

export var DataBaseSchema: Schema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    database: { type: String, required: true },
    acessos: Array({
        nome: { type: String, default: '' },
        email: { type: String, lowercase: true, unique: true, required: true },
        senha: { type: String, default: 0 },
    })
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

DataBaseSchema.pre("save", (next) => {
    console.log('Database salva!');
    next();
});

const Database = model('Database', DataBaseSchema);

const DatabaseModel: Model<InterfaceDbModel> = model<InterfaceDbModel>("Database", DataBaseSchema);

export {
    Database,
    DatabaseModel,
}