import mongoose from 'mongoose'

const sessionEntrySchema = new mongoose.Schema({
  entranceTime: Date,
  exitTime: Date,
  durationInSeconds: Number, // Optional: duration (exit - entrance)
}, { _id: false })

const sessionSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  status: { type: String, enum: ['new', 'returning'], default: 'new' },
  lastVisit: { type: Date, default: Date.now },
  visitCount: { type: Number, default: 1 },
  sessions: [sessionEntrySchema]  // Array of session history
})

const sessionModel = mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default sessionModel
