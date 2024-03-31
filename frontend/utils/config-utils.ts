import getConfig from 'next/config'

export function url(path: string): string {
  const { publicRuntimeConfig } = getConfig() as {
    publicRuntimeConfig: { basePath: string }
  }

  return publicRuntimeConfig.basePath + path
}
