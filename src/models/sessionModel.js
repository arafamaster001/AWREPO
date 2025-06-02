import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({
  ip: String,
  hostname: String,
  city: String,
  region: String,
  country: String,
  loc: String,
  org: String,
  postal: String,
  timezone: String
}, { _id: false })

const sessionEntrySchema = new mongoose.Schema({
  entranceTime: { type: Date },
  exitTime: { type: Date },
  durationInSeconds: Number,
  location: locationSchema
}, { _id: false })

const errorLogSchema = new mongoose.Schema({
  errorMessage: String,
  errorStack: String,
  timestamp: { type: Date, default: Date.now },
  requestData: Object
}, { _id: false })

const sessionSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  status: { type: String, enum: ['new', 'returning'], default: 'new' },
  lastVisit: { type: Date, default: Date.now },
  visitCount: { type: Number, default: 1 },
  sessions: [sessionEntrySchema],
  errorLogs: [errorLogSchema]
})

const sessionModel = mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default sessionModel