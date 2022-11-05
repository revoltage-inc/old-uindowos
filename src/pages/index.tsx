import { useWindow } from '@libs/window'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Switch } from '@components/common/Switch'
import { Top } from '@components/pages/Top'

const TopPage: NextPage = () => {
  const { t } = useTranslation()
  const { width } = useWindow()

  return (
    <>
      <Head>
        <title>{`UindowOS | ${t('top')}`}</title>
        <meta
          name="viewport"
          content={`width=${
            width > 375 ? 'device-width' : '375'
          }, height=device-height,initial-scale=1`}
        />
      </Head>
      <main>
        <Switch />
        <Top />
      </main>
    </>
  )
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default TopPage
