import * as fs from 'fs'
import convertVisionResult from '../src/convertVisionResult'

describe('convertVisionResult', () => {
  const FIXTURE_PATH = './__test__/fixtures/files/cloudVisionResult.txt'
  const words = fs.readFileSync(FIXTURE_PATH, { encoding: 'utf-8' }).split("\n")

  it('equals argument', () => {
    const subject = convertVisionResult(words)
    expect(subject).toBe(words)
  })
})
