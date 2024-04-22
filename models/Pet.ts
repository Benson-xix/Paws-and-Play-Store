// models/Pet.ts
import mongoose, { Document } from 'mongoose';

export interface IPet extends Document {
  petName: string;
  petDescription: string;
  petCategory: 'dog' | 'cat' | 'bird' | 'horse';
  petSubcategory: string;
  petColor: string;
  petImages?: string[];
  petGender: 'male' | 'female';
  petPrice: string;
  petDateOfBirth: Date;
  petAge: string;
  petStatus?: string;
}

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  petDescription : {
    type: String,
    required: true,
  },
  petCategory: {
    type: String,
    enum: ['dog', 'cat', 'bird', 'horse'],
    required: true,
  },
  petSubcategory: {
    type: String,
    required: true,
  },
  petColor: {
    type: String,
    required: true,
  },
  petImages: {
    type: [String],
    required: false,
  },
  petGender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  petPrice: {
    type: String,
    required: true,
  },
  petDateOfBirth: {
    type: Date,
    required: true,
  },
  petAge: {
    type: String,
    required: true,
  },
  petStatus: {
    type: String,
    required: false,
  },
});

const Pet = mongoose.models.Pet || mongoose.model<IPet>('Pet', petSchema);

export default Pet;
