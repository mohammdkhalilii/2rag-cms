import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getPayloadClient() {
  return await getPayload({
    config: configPromise,
  })
}
