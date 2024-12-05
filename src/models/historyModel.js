import mongoose from "mongoose";
import { Schema } from "mongoose";


const treatmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const patientSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  }
});

const scheduleSchema = new Schema({
  hours: {
    type: String,
    required: true,
    trim: true
  }
});

const workerSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  }
});

const historySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true,
    trim: true
  },
  treatment: {
    type: treatmentSchema,
    required: true
  },
  patient: {
    type: patientSchema,
    required: true
  },
  schedule: {
    type: scheduleSchema,
    required: true
  },
  worker: {
    type: workerSchema,
    required: true
  }
}, );

const history = mongoose.model('history', historySchema);

export default history