import { useLocale } from '@lib/locale'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch } from '../components/common/Switch'
import { Top } from '../components/pages/Top'

const TopPage: NextPage = () => {
  const { text } = useLocale()

  return (
    <>
      <Head>
        <title>UindowOS | {text.TOP}</title>
      </Head>
      <main>
        <Switch />
        <Top />
      </main>
    </>
  )
}

export default TopPage